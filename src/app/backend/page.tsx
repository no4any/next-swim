import { cookies } from "next/headers"
import { LoginForm } from "./form"

export default function BackendPage() {
    const user = cookies().get("username")?.value
    return <div>
        <LoginForm />
        <div>{user?user:"NICHT ANGEMELDET!"}</div>
    </div>
}