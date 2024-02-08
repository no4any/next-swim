"use server"

import { Swimmer } from "@/persistence/swimmer.model";

export async function registerSwimmer(swimmer: Swimmer): Promise<any> {
    console.log(swimmer);
    return {
        msg: "Alles toll",
        swimmer
    }
}