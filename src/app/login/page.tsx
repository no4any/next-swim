import { loginAction } from "./actions";

export default async function LoginPage() {
    return <div className="container">
        <div className="row">
            <div className="col">
                <h1 className="mb-3">Anmeldung</h1>
                <form action={loginAction}>
                    <div className="form-floating mb-3">
                        <input type="email" name="mail" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">E-mail Adresse</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" name="password" className="form-control" id="floatingPassword" placeholder="Passwort" />
                        <label htmlFor="floatingPassword">Passwort</label>
                    </div>
                    <input type="submit" className="btn btn-primary" value="Anmelden" />
                </form>
            </div>
        </div>
    </div>
}