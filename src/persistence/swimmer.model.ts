export interface Swimmer {
    mail: string, // E-Mail
    name: string, // Name
    prename: string, // Vorname
    breakfast: boolean, // Möchte frühstück
    distanceRating: boolean, // Möchte an der Anreiseentfernungswertung teilnehmen
    city: string, // Stadt für Anreiseentfernungswertung
    birthday: string, // Geburtstag für Alterswertung
    teamStarter: boolean, // Ist Team starter
    teamName: string, // Teamname
}

export interface SwimmerSubscribed extends Swimmer {
    optIn: boolean, // OptIn ob der User auch angenommen hat
    subscriptionDate: Date // Anmeldedatum
}

export interface SwimmerRegistered extends SwimmerSubscribed {
    registered: Date // Anmeldung abgeschlossen
    bathingCap: BathingCap // Badekappe
    counting: Array<LaneCountEntry> // Einträge der Bahnen
    breakfastIsPayed: boolean, // Frühstück ist bezahlt
}

export interface LaneCountEntry {
    lane: number, // Bahn
    isNight: boolean, // Ist Nachtwertung
    count: number, // Anzahl der Bahnen
    date: Date // Zeitpunkt an dem der Eintrag gemacht wurde
}

export interface BathingCap {
    color: string, // Farbe der Badekappe
    num: number // Nummer der Badekappe
}