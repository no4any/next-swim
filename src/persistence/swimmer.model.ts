import { z } from "zod"

export const SwimmerSchema = z.object({
    mail: z.string().email(),
    name: z.string().min(3),
    prename: z.string().min(3),
    breakfast: z.boolean(),
    distanceRating: z.boolean(),
    city: z.optional(z.string().min(3)),
    birthday: z.string(),
    teamStarter: z.boolean(),
    teamName: z.optional(z.string().min(3))
})

export const SwimmerSubscriptionSchema = SwimmerSchema.extend({
    optIn: z.boolean(),
    subscriptionDate: z.date()
})

export const LaneCountEntrySchema = z.object({
    lane: z.optional(z.number()),
    isNight: z.boolean(),
    count: z.number(),
    date: z.date()
})

export const BathingCapSchema = z.object({
    color: z.string(),
    num: z.number()
})

export const SwimmerRegisteredSchema = SwimmerSubscriptionSchema.extend({
    registered: z.date(),
    bathingCap: BathingCapSchema,
    counting: z.array(LaneCountEntrySchema),
    isBreakfastPayed: z.boolean()
})

export type Swimmer = z.infer<typeof SwimmerSchema>
export type SwimmerSubscription = z.infer<typeof SwimmerSubscriptionSchema>
export type LaneCountEntry = z.infer<typeof LaneCountEntrySchema>
export type BathingCap = z.infer<typeof BathingCapSchema>
export type SchwimmerRegistered = z.infer<typeof SwimmerRegisteredSchema>