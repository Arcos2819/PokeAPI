export interface PokeapiResponse {
    abilities:       AbilityElement[];
    base_experience: number;
    forms:           GenericItem[];
    game_indices:    GameIndex[];
    id:              number;
    name:            string;
}

export interface AbilityElement {
    ability:   GenericItem;
    is_hidden: boolean;
    slot:      number;
}

export interface GenericItem {
    name: string;
    url:  string;
}

export interface GameIndex {
    game_index: number;
    version:    GenericItem;
}