import { z } from "zod";

export const UserSchema = z.object({
    mail: z.string().email(),
    role: z.optional(z.enum(["admin", "user"]))
})

export const UserCredentialsSchema = UserSchema.extend({
    password: z.string(),
})

export type User = z.infer<typeof UserSchema>
export type UserCredentials = z.infer<typeof UserCredentialsSchema>