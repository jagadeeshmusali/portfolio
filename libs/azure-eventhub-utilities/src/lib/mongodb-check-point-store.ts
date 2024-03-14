import {
  Checkpoint,
  CheckpointStore,
  PartitionOwnership,
} from '@azure/event-hubs';
import * as mongoDB from 'mongodb';
import {getRandomName, logErrorStackTrace, logger} from "./helpers";
import {CheckpointEntity, PartitionOwnershipEntity} from "./interfaces";

export class MongoDBCheckpointStore implements CheckpointStore {
  private _mongoClient: mongoDB.MongoClient;
  private _db: mongoDB.Db;
  private _partitionOwnershipCollection: mongoDB.Collection<PartitionOwnershipEntity>;
  private _checkPointCollection: mongoDB.Collection<CheckpointEntity>;
  constructor(connectionUrl: string, dbName: string, clientName: string);
  constructor(
    mongoClient: mongoDB.MongoClient,
    dbName: string,
    clientName: string
  );
  constructor(
    connectionUrlOrMongoClient: string | mongoDB.MongoClient,
    dbName: string,
    private clientName: string
  ) {
    if (typeof connectionUrlOrMongoClient === 'string') {
      this._mongoClient = new mongoDB.MongoClient(connectionUrlOrMongoClient, {
        appName: `${MongoDBCheckpointStore.name}-${clientName}`,
        retryReads: true,
        retryWrites: true,
      });
    } else {
      this._mongoClient = connectionUrlOrMongoClient;
    }
    this._db = this._mongoClient.db(dbName);
    this._partitionOwnershipCollection =
      this._db.collection<PartitionOwnershipEntity>('PartitionOwnerships');
    this._checkPointCollection =
      this._db.collection<CheckpointEntity>('Checkpoints');
  }
  async listOwnership(
    fullyQualifiedNamespace: string,
    eventHubName: string,
    consumerGroup: string
  ): Promise<PartitionOwnership[]> {
    const partitionKey = `${fullyQualifiedNamespace} ${eventHubName} ${consumerGroup} Ownership`;
    const partitionOwnershipArray: PartitionOwnership[] = [];
    const entities = await this._partitionOwnershipCollection
      .find({ clientName: this.clientName, partitionKey })
      .toArray();
    try {
      for (const entity of entities) {
        if (!entity.timestamp) {
          throw new Error(
            `Unable to retrieve timestamp from partitionKey "${partitionKey}", rowKey "${entity.rowKey}"`
          );
        }

        const partitionOwnership: PartitionOwnership = {
          fullyQualifiedNamespace,
          eventHubName,
          consumerGroup,
          ownerId: entity.ownerId,
          partitionId: entity.rowKey,
          lastModifiedTimeInMs: entity.timestamp.getTime(),
          etag: entity.etag,
        };
        partitionOwnershipArray.push(partitionOwnership);
      }
      return partitionOwnershipArray;
    } catch (err) {
      logger.warning(
        `Error occurred while fetching the list of entities`,
        err.message
      );
      logErrorStackTrace(err);
      if (err.name === 'AbortError') throw err;

      throw new Error(
        `Error occurred while fetching the list of entities. \n${err}`
      );
    }
  }
  async claimOwnership(
    partitionOwnership: PartitionOwnership[]
  ): Promise<PartitionOwnership[]> {
    const partitionOwnershipArray: PartitionOwnership[] = [];
    for (const ownership of partitionOwnership) {
      const updatedOwnership = { ...ownership };
      const partitionKey = `${ownership.fullyQualifiedNamespace} ${ownership.eventHubName} ${ownership.consumerGroup} Ownership`;
      const ownershipEntity: PartitionOwnershipEntity = {
        clientName: this.clientName,
        partitionKey: partitionKey,
        rowKey: ownership.partitionId,
        ownerId: ownership.ownerId,
      };

      try {
        const date = new Date();
        const etag = getRandomName();
        if (ownership.etag) {
          const result = await this._partitionOwnershipCollection.updateOne(
            {
              clientName: this.clientName,
              etag: ownership.etag,
            },
            { $set: { etag, timestamp: date } }
          );
          if (result.modifiedCount === 0) {
            throw new Error(
              `Unable to retrieve timestamp from partitionKey "${partitionKey}", rowKey "${ownership.partitionId}"`
            );
          }
          logger.info(
            `[${ownership.ownerId}] Claimed ownership successfully for partition: ${ownership.partitionId}`,
            `LastModifiedTime: ${date}, ETag: ${etag}`
          );
        } else {
          await this._partitionOwnershipCollection.insertOne({
            ...ownershipEntity,
            etag,
            timestamp: date,
          });
          logger.info(
            `[${ownership.ownerId}] Claimed new ownership successfully for partition: ${ownership.partitionId}`,
            `LastModifiedTime: ${date}, ETag: ${etag}`
          );
        }
        updatedOwnership.lastModifiedTimeInMs = date.getTime();
        updatedOwnership.etag = etag;
        partitionOwnershipArray.push(updatedOwnership);
      } catch (err) {
        if (err.statusCode === 412) {
          logger.verbose(
            `[${ownership.ownerId}] Did not claim partition ${ownership.partitionId}. Another processor has already claimed it.`
          );
          continue;
        }
        logger.warning(
          `Error occurred while claiming ownership for partition: ${ownership.partitionId}`,
          err.message
        );
        logErrorStackTrace(err);
      }
    }
    return partitionOwnershipArray;
  }
  async listCheckpoints(
    fullyQualifiedNamespace: string,
    eventHubName: string,
    consumerGroup: string
  ): Promise<Checkpoint[]> {
    const partitionKey = `${fullyQualifiedNamespace} ${eventHubName} ${consumerGroup} Checkpoint`;
    const checkpoints: Checkpoint[] = [];
    const entitiesIter = await this._checkPointCollection
      .find({
        clientName: this.clientName,
        partitionKey: partitionKey,
      })
      .toArray();

    for await (const entity of entitiesIter) {
      checkpoints.push({
        consumerGroup,
        eventHubName,
        fullyQualifiedNamespace,
        partitionId: entity.rowKey,
        offset: entity.offset,
        sequenceNumber: entity.sequencenumber,
      });
    }
    return checkpoints;
  }
  async updateCheckpoint(checkpoint: Checkpoint): Promise<void> {
    const partitionKey = `${checkpoint.fullyQualifiedNamespace} ${checkpoint.eventHubName} ${checkpoint.consumerGroup} Checkpoint`;
    const checkpointEntity: CheckpointEntity = {
      clientName: this.clientName,
      partitionKey: partitionKey,
      rowKey: checkpoint.partitionId,
      sequencenumber: checkpoint.sequenceNumber,
      offset: checkpoint.offset,
      timestamp: new Date(),
    };
    try {
      await this._checkPointCollection.findOneAndUpdate(
        {
          clientName: this.clientName,
          partitionKey: partitionKey,
          rowKey: checkpoint.partitionId,
        },
        { $set: { ...checkpointEntity } },
        { upsert: true }
      );
      logger.verbose(
        `Updated checkpoint successfully for partition: ${checkpoint.partitionId}`
      );
      return;
    } catch (err) {
      logger.verbose(
        `Error occurred while upating the checkpoint for partition: ${checkpoint.partitionId}.`,
        err.message
      );
      throw err;
    }
  }
}
