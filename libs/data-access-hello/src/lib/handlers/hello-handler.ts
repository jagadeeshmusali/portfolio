import { sendEmail } from '@portfolio/data-access-email';
import {Request, Response} from 'express';
import {MongoClient} from "mongodb";
import { Hello } from '../models/hello';
const dbString = process.env.MONGO_CONNECTION_STRING;
const alertEmailId = process.env.ALERT_EMAIL_ID;


export async function sayHello(req: Request, res: Response): Promise<any>{
    const hello: Hello = req.body;
    if(!hello.name || !hello.email || !hello.message){
        res.status(400).json({error: "Missing required fields"});
        return;
    }
    const client = new MongoClient(dbString);
    await client.connect();
    const collection = client.db("portfolio").collection("say-hello");
    await collection.insertOne(hello);
    await client.close();
    await sendEmail(alertEmailId, `Hello from ${hello.name}`, `${hello.message}`);
    res.status(200).send('Hello ' + hello.name + '! Your message has been sent.');
  }