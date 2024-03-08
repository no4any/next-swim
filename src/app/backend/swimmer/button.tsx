"use client"

import { revalidateSwimmer } from "./actions"

export default function Button({ path }: { path: string }) {
    return <button className="btn btn-secondary" onClick={() => revalidateSwimmer(path)}>Click Me!!!</button>
}