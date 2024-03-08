import DefaultContainer from "@/components/DefaultContainer";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { validateToken } from "@/logic/jwt";

export default async function BackendLayout({ children }: { children: React.ReactNode }) {
    const userToken = cookies().get("userToken");

    if(!await validateToken(userToken?.value)) {
        redirect("/login")
    }

    return <>
        <main className="flex-shrink-0 mt-5 pt-2">
            <DefaultContainer>
                {children}
            </DefaultContainer>
        </main>
    </>
}