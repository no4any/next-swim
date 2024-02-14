import DefaultContainer from "@/components/DefaultContainer";

export default function BackendLayout({ children }: { children: React.ReactNode }) {
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
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
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