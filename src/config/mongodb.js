import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
    throw new Error("MONGO_URI is not set in environment variables");
}

let cached = global.mongooseConnection;
if (!cached) {
    cached = global.mongooseConnection = { conn: null, promise: null };
}

export async function connectDb() {
    if (cached.conn) return cached.conn;

    if (!cached.promise) {
        cached.promise = mongoose
            .connect(MONGO_URI, { bufferCommands: false })
            .then((mongooseInstance) => {
                const connection = mongooseInstance.connection;
                connection.on("connected", () => {
                    console.log("Connected to MongoDB successfully");
                });
                connection.on("error", (err) => {
                    console.error(
                        "MongoDB connection error. Make sure MongoDB is running",
                        err
                    );
                });
                return mongooseInstance;
            });
    }

    cached.conn = await cached.promise;
    return cached.conn;
}