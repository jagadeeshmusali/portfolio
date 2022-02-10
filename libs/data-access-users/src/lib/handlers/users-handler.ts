import {Request, Response} from 'express';
import {MongoClient} from "mongodb";
const dbString = process.env.MONGO_CONNECTION_STRING;

export async function getUsersByName(req: Request, res: Response): Promise<any>{
  const client = new MongoClient(dbString);
  await client.connect();
  const collection = client.db("portfolio").collection("users");
  const dbUsers = await collection.find({"user.firstName": req.params.name}).toArray();
  await client.close();
  res.status(200).send(dbUsers);
}

export async function getUsers(req: Request, res: Response): Promise<any>{
  const client = new MongoClient(dbString);
  await client.connect();
  const collection = client.db("portfolio").collection("users");
  const dbUsers = await collection.find().toArray();
  await client.close();
  res.status(200).send(dbUsers);
}


