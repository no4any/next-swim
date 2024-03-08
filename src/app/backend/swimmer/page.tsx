import { SwimmersTable } from "@/components/swimmerTable/SwimmerTable.component";
import { getSwimmers } from "./actions"

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function SwimmerPage() {
    const swimmers = await getSwimmers();

    return <div>
        <div>
            <h1>
                <span>Schwimmer</span>
            </h1>
        </div>
        <div >
            <div >
                <SwimmersTable swimmers={swimmers} />
            </div>
        </div>
    </div>

}