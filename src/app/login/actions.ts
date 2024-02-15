"use server"

import { JWT_ENCRYPTION_KEY } from "@/env";
import { validateCredentials } from "@/logic/jwt";
import { UserCredentials } from "@/persistence/credentials.model";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

function formDataToUserCredentials(form: FormData): UserCredentials {
    const mail = form.get("mail");
    const password = form.get("password");

    return {
        mail: typeof mail === "string" ? mail : "",
        password: typeof password === "string" ? password : ""
    }
}

export async function loginAction(form: FormData) {
    const credentials = formDataToUserCredentials(form);
    if (await validateCredentials(credentials)) {
        cookies().set("userToken", jwt.sign({ mail: credentials.mail }, JWT_ENCRYPTION_KEY || ""), {
            maxAge: 3600
        });
        redirect("/backend");
    }
}