"use server"

import { revalidatePath } from "next/cache";
import Swimmer from "@/persistence/swimmer.model";
import { cookies } from "next/headers";

export interface AddSwimmerResponse {
    added: boolean
}

export async function addSwimmer(prev: AddSwimmerResponse, swimmer: FormData):Promise<AddSwimmerResponse> {
    const s = new Swimmer({
        name: swimmer.get("name") || "",
        prename: swimmer.get("prename") || ""
    });
    s.save();
    revalidatePath("/");
    return {added: true}
}

export async function addCookie() {
    cookies().set('user', 'Hans', {
        httpOnly: true,
        secure: true,
        maxAge: 300,
        path: '/'
    })
}