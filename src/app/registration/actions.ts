"use server"

import { getSwimmerCollection } from "@/persistence/mongo";
import { Swimmer, SwimmerSchema } from "@/persistence/swimmer.model";

export async function registerSwimmer(swimmer: Swimmer): Promise<any> {
    const parsedSwimmer = SwimmerSchema.parse(swimmer);
    (await getSwimmerCollection()).insertOne(parsedSwimmer);
    return {
        msg: "Added",
        swimmer
    }
}