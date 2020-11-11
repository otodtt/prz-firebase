export interface Registers {
    id: number;
    name?: string;
    type?: string;
    moreNames?: string;
    secondName?: string;
    manufacturersId?: number;
    firmName?: string;
    permission?: string;
    valid?: string;
    dateOrder?: string;
    period?: string;
    substance?: string;
    lethal?: string;
    category?: number;
    alphabet?: number;
    pesticide?: string;
    pesticideId?: number;
    pestDescription?: string;
    pestsubstanse?: [
        {
            id: number;
            name?: string;
            substanceId?: number;
            quantity?: string;
            quantityAfter?: string;
            pesticides_id?: number;
        }
    ];
    doses?: [
        {
            id: number;
            pesticides_id?: number;
            dose?: number;
            doseNote?: string;
            secondDose?: string;
            measure?: string;
            measureId?: string;
            note?: string;
            afterNote?: string;
            crop?: string;
            disease?: string;
            application?: string;
            quarantine?: string;
            isCalc?: number;
            isActive?: number;
        }
    ];
}
