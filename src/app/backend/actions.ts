"use server"

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers"

export async function login(name: string, pass: string) {
    cookies().set("username", name);
    console.log("Cookie", name, pass)
    revalidatePath("/backend")
}