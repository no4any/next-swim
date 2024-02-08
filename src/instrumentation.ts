import { MONGO_CONNECTION_STRING } from "./env";

export async function register() {
    console.log("Mongodb", MONGO_CONNECTION_STRING)
}