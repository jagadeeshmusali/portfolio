
export interface CheckpointEntity {
  clientName: string;
  partitionKey: string;
  rowKey: string;
  sequencenumber: number;
  offset: number;
  timestamp: Date;
}
export interface PartitionOwnershipEntity {
  clientName: string;
  partitionKey: string;
  rowKey: string;
  ownerId: string;
  timestamp?: Date;
  etag?: string;
}
