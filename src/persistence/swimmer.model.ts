import { z } from "zod"

export type SwimmerState = "ANNOUNCED" | "CONFIRMED" | "REGISTERED" | "FINISHED";

export const SWIMMER_STATE_ANNOUNCED = "ANNOUNCED"
export const SWIMMER_STATE_CONFIRMED = "CONFIRMED"
export const SWIMMER_STATE_REGISTERED = "REGISTERED"
export const SWIMMER_STATE_FINISHED = "FINISHED"

export const CountEntrySchema = z.object({
    lane: z.optional(z.number()),
    isNight: z.boolean(),
    count: z.number(),
    date: z.date()
})

export const BathingCapSchema = z.object({
    color: z.string(),
    num: z.number()
})

export const RegistrationSchema = z.object({
    id: z.number(),
    cap: BathingCapSchema
})

export const SwimmerAnnouncedSchema = z.object({
    _id: z.optional(z.string()),
    mail: z.string().email(),
    name: z.string().min(3),
    prename: z.string().min(3),
    breakfast: z.boolean(),
    distanceRating: z.boolean(),
    city: z.optional(z.string().min(3)),
    birthday: z.string(),
    teamName: z.optional(z.string().min(3)),
    optIn: z.optional(z.boolean()),
})

export const SwimmerConfirmedSchema = SwimmerAnnouncedSchema.extend({
    subscriptionDate: z.date(),
})

export const SwimmerRegisteredSchema = SwimmerConfirmedSchema.extend({
    registrationDate: z.date(),
    registration: RegistrationSchema,
    counting: z.optional(z.array(CountEntrySchema)),
    isBreakfastPayed: z.optional(z.boolean())
})

export const SwimmerFinishedSchema = SwimmerRegisteredSchema.extend({
    finishingDate: z.date()
})

export const SwimmerSchema = z.discriminatedUnion("state", [
    SwimmerAnnouncedSchema.extend({ state: z.literal(SWIMMER_STATE_ANNOUNCED) }),
    SwimmerConfirmedSchema.extend({ state: z.literal(SWIMMER_STATE_CONFIRMED) }),
    SwimmerRegisteredSchema.extend({ state: z.literal(SWIMMER_STATE_REGISTERED) }),
    SwimmerFinishedSchema.extend({ state: z.literal(SWIMMER_STATE_FINISHED) })
])

export type Swimmer = z.infer<typeof SwimmerSchema>
export type SwimmerAnnounced = z.infer<typeof SwimmerAnnouncedSchema>
export type SwimmerConfirmed = z.infer<typeof SwimmerConfirmedSchema>
export type SwimmerRegistered = z.infer<typeof SwimmerRegisteredSchema>
export type SwimmerFinished = z.infer<typeof SwimmerFinishedSchema>

export type CountEntry = z.infer<typeof CountEntrySchema>
export type BathingCap = z.infer<typeof BathingCapSchema>
export type Registration = z.infer<typeof RegistrationSchema>