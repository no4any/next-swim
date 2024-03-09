import { MONGO_CONNECTION_STRING, MONGO_DATABASE, MONGO_PASSWORD, MONGO_USERNAME } from "@/env";
import { Collection, Db, DeleteResult, MongoClient, ObjectId } from "mongodb";
import { Swimmer, SwimmerSchema } from "./swimmer.model";

const mongo: MongoClient | undefined = undefined;

export async function getMongo(): Promise<MongoClient> {
    if (mongo) {
        return mongo;
    }

    return new MongoClient(MONGO_CONNECTION_STRING || "", {
        auth: {
            username: MONGO_USERNAME,
            password: MONGO_PASSWORD
        }
    })
}

export async function getDB(): Promise<Db> {
    return (await getMongo()).db(MONGO_DATABASE);
}

export async function getSwimmerCollection(): Promise<Collection<Swimmer>> {
    return (await getDB()).collection<Swimmer>("swimmer");
}