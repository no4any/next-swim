"use client"

import { Swimmer } from "@/persistence/swimmer.model";
import { useEffect, useId, useState } from "react";
import { removeSwimmer } from "./removeSwimmer.action";
import { getSwimmers } from "./getSwimmers.action";

export function SwimmersTable(): React.ReactNode {
    const [swimmers, setSwimmers] = useState<Swimmer[]>([]);
    const [isLoading, setLoading] = useState(true);

    async function reload() {
        setLoading(true);
        setSwimmers(await getSwimmers());
        setLoading(false);
    }

    useEffect(() => {
        reload()
    }, [])

    return <div>
        <div><button onClick={reload}>Reload</button></div>
        {isLoading ? <div>Loading</div> : <table>
            <thead>
                <tr>
                    <th>Vorname</th>
                    <th>Nachname</th>
                    <th>Wohnort</th>
                    <th>Team</th>
                    <th>Frühstück</th>
                    <th>Anmeldestatus</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {swimmers.map((swimmer: Swimmer) => <tr key={swimmer._id || useId()}>
                    <td>{swimmer.prename}</td>
                    <td>{swimmer.name}</td>
                    <td>{swimmer.city}</td>
                    <td>{swimmer.teamName}</td>
                    <td>{swimmer.breakfast ? "Ja" : "Nein"}</td>
                    <td>{swimmer.state}</td>
                    <td>
                        <button>Bearbeiten</button>
                        <button onClick={async () => {
                            const a = await removeSwimmer(swimmer.mail);
                        }}>Löschen</button>
                    </td>
                </tr>)}
            </tbody>
        </table>}
    </div>
}