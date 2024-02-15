import DefaultContainer from "@/components/DefaultContainer";
import { logout } from "./actions";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateToken } from "@/logic/jwt";

export default async function BackendLayout({ children }: { children: React.ReactNode }) {
    const userToken = cookies().get("userToken");

    if(!await validateToken(userToken?.value)) {
        redirect("/login")
    }

    return <>
        <header>
            <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Fixed navbar</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav me-auto mb-2 mb-md-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Link</a>
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
        <main className="flex-shrink-0 mt-5 pt-2">
            <DefaultContainer>
                {children}
            </DefaultContainer>
        </main>
        <footer className="container-fluid">
            <div className="row">
                <div className="col">
                    Footer
                </div>
            </div>
        </footer>
    </>
}