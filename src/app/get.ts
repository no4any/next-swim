"use server"

import { cache } from "react";
import Swimmer from "@/persistence/swimmer.model"

export const getSwimmers = cache(async () => {
    return await Swimmer.find();
})