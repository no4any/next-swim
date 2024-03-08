import { Swimmer } from "@/persistence/swimmer.model";
import { useId } from "react";

export function SwimmersTable({ swimmers }: { swimmers: Array<Swimmer> }): React.ReactNode {
    return <table>
        <thead>
            <tr>
                <th >Vorname</th>
                <th >Nachname</th>
                <th >Wohnort</th>
                <th >Team</th>
                <th >Frühstück</th>
                <th >Anmeldestatus</th>
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
            </tr>)}
        </tbody>
    </table>
}