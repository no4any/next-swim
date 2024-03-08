"use server"

import { getAllSwimmer } from "@/persistence/mongo";
import { Swimmer } from "@/persistence/swimmer.model";
import { revalidatePath } from "next/cache";

export async function getSwimmers(): Promise<Array<Swimmer>> {
    return await getAllSwimmer();
}

export async function revalidateSwimmer(path:string) {
    revalidatePath(path)
}