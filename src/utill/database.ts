import { MongoClient } from 'mongodb';


const url: string | string = "mongodb+srv://saysang2212:xfFd2k6qiUvoD8vW@cluster0.dnf1sql.mongodb.net/?retryWrites=true&w=majority"

const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {

  if (!global._mongoClientPromise) {
    client = new MongoClient(url, options);
    global._mongoClientPromise = client.connect();
  }
  clientPromise = global._mongoClientPromise;
} else {
  client = new MongoClient(url, options);
  clientPromise = client.connect();
}

export default clientPromise;