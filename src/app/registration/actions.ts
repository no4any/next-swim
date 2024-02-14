"use server"

import { getSwimmerCollection } from "@/persistence/mongo";
import { Swimmer, SwimmerSchema } from "@/persistence/swimmer.model";

export async function registerSwimmer(swimmer: Swimmer): Promise<any> {
    const newSwimmer:Swimmer = {...swimmer, state: "ANNOUNCED"}
    const parsedSwimmer = SwimmerSchema.parse(newSwimmer);
    (await getSwimmerCollection()).insertOne(parsedSwimmer);
    return {
        msg: "Added",
        swimmer
    }
}