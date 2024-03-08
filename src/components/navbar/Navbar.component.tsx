"use client"

import { logout } from "@/app/backend/actions"
import Link from "next/link"
import { usePathname } from "next/navigation"

function getClassNames(path:string, currentPath:string) {
    if(path === currentPath) {
        return "nav-link active"
    }
    return "nav-link"
}

export function Navbar(): React.ReactNode {
    const path = usePathname();

    return <header>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Fixed navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <Link className={getClassNames("/backend", path)} aria-current="page" href="/backend">Dashboard</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getClassNames("/backend/register", path)} href="/backend/register">Anmeldung</Link>
                        </li>
                        <li className="nav-item">
                            <Link className={getClassNames("/backend/swimmer", path)} href="/backend/swimmer">Schwimmer</Link>
                        </li>
                        <li className="nav-item">
                            <form action={logout}>
                                <input type="submit" className="nav-link" aria-disabled="true" value="Logout" />
                            </form>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
}