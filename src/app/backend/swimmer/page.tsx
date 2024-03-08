import { SwimmersTable } from "@/components/swimmerTable/SwimmerTable.component";
import { getSwimmers } from "./actions"
import Button from "./button";

export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function SwimmerPage() {
    const swimmers = await getSwimmers();

    return <div className="container-fluid">
        <div className="row">
            <div className="col">
                <h1>
                    <span>Schwimmer</span>
                    <button className="btn btn-primary">Update</button>
                    <Button path="/backend/swimmer" />
                </h1>
            </div>
            <div className="row">
                <div className="col">
                    <SwimmersTable swimmers={swimmers} />
                </div>
            </div>
        </div>
    </div>
}