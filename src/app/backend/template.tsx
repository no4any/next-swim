"use client"

import { Navbar } from "@/components/navbar/Navbar.component";
import React from "react";

export default function BackendTemplate({ children }: { children: React.ReactNode }): React.ReactNode {
    return <>
        <Navbar />
        {children}
    </>
}