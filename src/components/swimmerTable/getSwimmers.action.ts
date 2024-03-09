"use server"

import { getSwimmerCollection } from "@/persistence/mongo";
import { Swimmer } from "@/persistence/swimmer.model";

export async function getSwimmers(): Promise<Swimmer[]> {
    const swimmers = (await (await getSwimmerCollection()).find({}).toArray());
    return JSON.parse(JSON.stringify(swimmers));
}