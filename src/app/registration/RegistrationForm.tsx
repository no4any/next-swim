"use client"

import { useState } from "react";
import { registerSwimmer } from "./actions"

export default function RegistrationForm() {
    const [mail, setMail] = useState("");
    const [name, setName] = useState("");
    const [prename, setPrename] = useState("");
    const [breakfast, setBreakfast] = useState(false);
    const [birthday, setBirthday] = useState("2000-01-01");
    const [distanceRating, setDistanceRating] = useState(false);
    const [city, setCity] = useState("");
    const [teamStarter, setTeamStarter] = useState(false);
    const [teamName, setTeamName] = useState("");

    async function buttonClick() {
        try {
            console.log(await registerSwimmer({
                name,
                prename,
                breakfast,
                birthday,
                city,
                distanceRating,
                mail,
                teamStarter: false,
                teamName
            }));
        } catch (e) {
            console.log("FEHLE!!!", e);
        }
    }

    return <div className="registration">
        <h1>Anmeldung</h1>
        <form className="form">
            <LabeledInputText value={prename} onChange={setPrename} name="prename" label="Vorname" />
            <LabeledInputText value={name} onChange={setName} name="name" label="Name" />
            <LabeledInputText value={mail} onChange={setMail} name="mail" label="E-Mailadresse" />
            <LabeledInputDate value={birthday} onChange={setBirthday} name="birthday" label="Geburtstag" />
            <LabeledInputBoolean value={breakfast} onChange={setBreakfast} name="breakfast" label="Frühstück" />
            <LabeledInputBoolean value={distanceRating} onChange={setDistanceRating} name="distanceRating" label="An weiteste Anreise Wertung Teilnehmen" />
            {distanceRating ? <LabeledInputText value={city} onChange={setCity} name="city" label="Wohnort" /> : <></>}
            <LabeledInputBoolean value={teamStarter} onChange={setTeamStarter} name="teamStarter" label="Ich möchte in einem Team starten" />
            {teamStarter ? <LabeledInputText value={teamName} onChange={setTeamName} name="teamName" label="Name des Teams" /> : <></>}
        </form>
        <button onClick={buttonClick}>Absenden</button>
    </div>
}

interface LabeledInputTextProps<T> {
    value: T,
    onChange: (t: T) => void,
    name: string,
    label: string,
    id?: string
}

function LabeledInputText({ value, onChange, name, label, id }: LabeledInputTextProps<string>) {
    return <div className="input">
        <label htmlFor={id || name}>{label}</label>
        <input type="text" value={value} name={name} id={id || name} onChange={(evnt) => onChange(evnt.target.value)} />
    </div>
}

function LabeledInputBoolean({ value, onChange, name, label, id }: LabeledInputTextProps<boolean>) {
    return <div className="input boolean">
        <input type="checkbox" checked={value} name={name} id={id || name} onChange={(evnt) => onChange(evnt.target.checked)} />
        <label htmlFor={id || name}>{label}</label>
    </div>
}

function LabeledInputDate({ value, onChange, name, label, id }: LabeledInputTextProps<string>) {
    return <div className="input">
        <label htmlFor={id || name}>{label}</label>
        <input type="date" value={value} name={name} id={id || name} onChange={(evnt) => onChange(evnt.target.value)} />
    </div>
}