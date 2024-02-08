import { MONGO_CONNECTION_STRING, MONGO_DATABASE, MONGO_PASSWORD, MONGO_USERNAME } from "@/env";
import mongoose from "mongoose";

export async function setupMongoose() {
    console.log("Mongo connection string", MONGO_CONNECTION_STRING)
    await mongoose.connect(MONGO_CONNECTION_STRING || "", {
        dbName: MONGO_DATABASE || "swim",
        auth: {
            username: MONGO_USERNAME,
            password: MONGO_PASSWORD
        }
    });
}