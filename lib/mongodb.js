import { MongoClient } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise;

if (process.env.NODE_ENV === "development") {
  if (!global._mongoClientPromise) {
    // Create a new MongoClient instance and connect to the MongoDB server.
    client = new MongoClient(uri, options);
    global._mongoClientPromise = client.connect().catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err; // Rethrow the error to terminate the app on connection failure
    });
  }
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient instance and connect.
  client = new MongoClient(uri, options);
  clientPromise = client.connect().catch((err) => {
    console.error("MongoDB connection error:", err);
    throw err; // Rethrow the error to terminate the app on connection failure
  });
}

// Export a module-scoped MongoClient promise.
export default clientPromise;
