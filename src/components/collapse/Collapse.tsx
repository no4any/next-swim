"use client"

import React from "react"

export function Collapse({ show, children }: { show: boolean, children: React.ReactNode }) {
    return show ? <div>
        {children}
    </div> :
        <></>
}