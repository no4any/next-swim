"use client"

import React, { useId } from "react"

export function Collapse({ show, children }: { show: boolean, children: React.ReactNode }) {
    return show ? <div>
        {children}
    </div> :
        <></>
}