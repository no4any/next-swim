import { JWT_ENCRYPTION_KEY } from "@/env";
import { User, UserCredentials, UserSchema } from "@/persistence/credentials.model";
import jwt from "jsonwebtoken";

export async function validateToken(userToken?: string): Promise<boolean> {
    if (userToken) {
        try {
            jwt.verify(userToken, JWT_ENCRYPTION_KEY || "");
            return true;
        } catch (_e) {
            return false;
        }
    }
    return false;
}

export async function validateCredentials(credentials: UserCredentials): Promise<boolean> {
    return true
}

export async function generateToken(user: User): Promise<string> {
    return jwt.sign(UserSchema.parse(user), JWT_ENCRYPTION_KEY || "")
}