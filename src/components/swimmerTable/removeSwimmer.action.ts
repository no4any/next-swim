"use server"

import { getSwimmerCollection } from "@/persistence/mongo";
import { DeleteResult } from "mongodb";

export async function removeSwimmer(mail: string): Promise<DeleteResult> {
    return (await getSwimmerCollection()).deleteMany({mail: mail});
}