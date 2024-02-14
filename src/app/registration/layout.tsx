import DefaultContainer from "@/components/DefaultContainer";

export default function RegistrationLayout({ children }: { children: React.ReactNode }) {
    return <>
        <header></header>
        <main>
            <DefaultContainer isFluid={false}>
                {children}
            </DefaultContainer>
        </main>
        <footer></footer>
    </>
}