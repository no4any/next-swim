"use client"

import { logout } from "@/app/backend/actions"
import Link from "next/link"
import { usePathname } from "next/navigation"

function getClassNames(path: string, currentPath: string) {
    if (path === currentPath) {
        return "active"
    }
    return ""
}

export function Navbar(): React.ReactNode {
    const path = usePathname();

    return <header>
        <nav>
            <ul>
                <li>
                    <Link className={getClassNames("/backend", path)} href="/backend">Dashboard</Link>
                </li>
                <li>
                    <Link className={getClassNames("/backend/register", path)} href="/backend/register">Anmeldung</Link>
                </li>
                <li>
                    <Link className={getClassNames("/backend/swimmer", path)} href="/backend/swimmer">Schwimmer</Link>
                </li>
                <li>
                    <button onClick={() => logout()}>ASDF</button>
                </li>
            </ul>
        </nav>
    </header>
}