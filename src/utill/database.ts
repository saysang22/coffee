// import { MongoClient } from 'mongodb';


// const url: string | string = "mongodb+srv://saysang2212:xfFd2k6qiUvoD8vW@cluster0.dnf1sql.mongodb.net/?retryWrites=true&w=majority"

// const options = {};

// let client;
// let clientPromise: Promise<MongoClient>;

// if (process.env.NODE_ENV === "development") {

//   if (!global._mongoClientPromise) {
//     client = new MongoClient(url, options);
//     global._mongoClientPromise = client.connect();
//   }
//   clientPromise = global._mongoClientPromise;
// } else {
//   client = new MongoClient(url, options);
//   clientPromise = client.connect();
// }

// export default clientPromise;

import { MongoClient } from 'mongodb'
// Connect MongoDB
const url = process.env.MONGODB_URL;
// 환경변수 설정하지 않으면 에러 발생
if (!url) {
  throw new Error('The MONGODB_URL environment variable is not defined')
}
let connectDB: Promise<MongoClient>;
if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url).connect()
}
export default connectDB
