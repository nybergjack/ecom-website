import { MongoClient } from "mongodb";
import * as dotenv from "dotenv";

dotenv.config();

let db;

const connectDB = async () => {
  if (db) return db;
  const client = await MongoClient.connect(process.env.MONGODB_URI);
  db = client.db("test");
  return db;
};

export default connectDB;
