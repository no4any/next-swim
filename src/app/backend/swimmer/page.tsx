import { SwimmersTable } from "@/components/swimmerTable/SwimmerTable.component";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function SwimmerPage() {
    return <div>
        <div>
            <h1>
                <span>Schwimmer</span>
            </h1>
        </div>
        <div >
            <div>
                <SwimmersTable />
            </div>
        </div>
    </div>
}