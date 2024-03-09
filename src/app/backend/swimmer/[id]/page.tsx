export const revalidate = 0;
export const dynamic = "force-dynamic";

export default async function SwimmerPage({ params }: { params: { id: string } }) {
    return <div>
        <div>
            <h1>
                <span>Schwimmer</span>
            </h1>
        </div>
        <div >
            <div>
                {params.id}
            </div>
        </div>
    </div>

}