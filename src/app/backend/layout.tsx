import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateToken } from "@/logic/jwt";

export default async function BackendLayout({ children }: { children: React.ReactNode }) {
    const userToken = cookies().get("userToken");

    if (!await validateToken(userToken?.value)) {
        redirect("/login")
    }

    return <>
        <main>
            {children}
        </main>
    </>
}