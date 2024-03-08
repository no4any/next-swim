import { loginAction } from "./actions";

export default async function LoginPage() {
    return <div>
        <h1>Anmeldung</h1>
        <form action={loginAction}>
            <div>
                <input type="email" name="mail" id="floatingInput" placeholder="name@example.com" />
                <label htmlFor="floatingInput">E-mail Adresse</label>
            </div>
            <div >
                <input type="password" name="password" id="floatingPassword" placeholder="Passwort" />
                <label htmlFor="floatingPassword">Passwort</label>
            </div>
            <input type="submit" value="Anmelden" />
        </form>
    </div>
}