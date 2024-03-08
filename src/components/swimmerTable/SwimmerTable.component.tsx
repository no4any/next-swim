import { Swimmer } from "@/persistence/swimmer.model";
import { useId } from "react";
import { SwimmerStateBadge } from "../swimmerStateBadge/SwimmerStateBadge.component";

export function SwimmersTable({ swimmers }: { swimmers: Array<Swimmer> }): React.ReactNode {
    return <table className="table">
        <thead>
            <tr>
                <th scope="col">Vorname</th>
                <th scope="col">Nachname</th>
                <th scope="col">Wohnort</th>
                <th scope="col">Team</th>
                <th scope="col">Frühstück</th>
                <th scope="col">Anmeldestatus</th>
            </tr>
        </thead>
        <tbody>
            {swimmers.map((swimmer: Swimmer) => <tr key={swimmer._id || useId()}>
                <td>{swimmer.prename}</td>
                <td>{swimmer.name}</td>
                <td>{swimmer.city}</td>
                <td>{swimmer.teamName}</td>
                <td>{swimmer.breakfast ? "Ja" : "Nein"}</td>
                <td><SwimmerStateBadge state={swimmer.state} /></td>
            </tr>)}
        </tbody>
    </table>
}