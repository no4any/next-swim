"use client"

import { useState } from "react";
import { login } from "./actions";

export function LoginForm() {
    const [name, setName] = useState("");
    const [pass, setPass] = useState("");

    return <div>
        <input type="text" value={name} onChange={(evnt)=>setName(evnt.target.value)} />
        <input type="password" value={pass} onChange={(evnt)=>setPass(evnt.target.value)} />
        <button onClick={()=>login(name, pass)}>Anmelden</button>
    </div>
}