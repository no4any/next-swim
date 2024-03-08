import { SWIMMER_STATE_ANNOUNCED, SWIMMER_STATE_CONFIRMED, SWIMMER_STATE_FINISHED, SWIMMER_STATE_REGISTERED, SwimmerState } from "@/persistence/swimmer.model";

export function SwimmerStateBadge({ state }: { state: SwimmerState }): React.ReactNode {
    return <span className={stateToClassName(state)}>{stateToText(state)}</span>
}

function stateToText(state:SwimmerState): string {
    switch(state) {
        case SWIMMER_STATE_ANNOUNCED: return "Angemeldet";
        case SWIMMER_STATE_CONFIRMED: return "Bestätigt";
        case SWIMMER_STATE_REGISTERED: return "Registriert";
        case SWIMMER_STATE_FINISHED: return "Abgeschlossen";
        default: return "FEHLER"
    }
}

function stateToClassName(state:SwimmerState): string {
    switch(state) {
        case SWIMMER_STATE_ANNOUNCED: return "badge rounded-pill text-bg-warning";
        case SWIMMER_STATE_CONFIRMED: return "badge rounded-pill text-bg-primary";
        case SWIMMER_STATE_REGISTERED: return "badge rounded-pill text-bg-success";
        case SWIMMER_STATE_FINISHED: return "badge rounded-pill text-bg-danger";
        default: return "FEHLER"
    }
}