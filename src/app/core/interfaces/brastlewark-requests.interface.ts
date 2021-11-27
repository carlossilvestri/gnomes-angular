export interface AllBrastlewark {
    Brastlewark: Brastlewark[];
}

export interface Brastlewark {
    id:          number;
    name:        string;
    thumbnail:   string;
    age:         number;
    weight:      number;
    height:      number;
    hair_color:  HairColor;
    professions: Profession[];
    friends:     string[];
}

export enum HairColor {
    Black = "Black",
    Gray = "Gray",
    Green = "Green",
    Pink = "Pink",
    Red = "Red",
}

export enum Profession {
    Baker = "Baker",
    Blacksmith = "Blacksmith",
    Brewer = "Brewer",
    Butcher = "Butcher",
    Carpenter = "Carpenter",
    Cook = "Cook",
    Farmer = "Farmer",
    Gemcutter = "Gemcutter",
    Leatherworker = "Leatherworker",
    MarbleCarver = "Marble Carver",
    Mason = "Mason",
    Mechanic = "Mechanic",
    Medic = "Medic",
    Metalworker = "Metalworker",
    Miner = "Miner",
    Potter = "Potter",
    Prospector = "Prospector",
    Sculptor = "Sculptor",
    Smelter = "Smelter",
    Stonecarver = "Stonecarver",
    Tailor = "Tailor",
    TaxInspector = "Tax inspector",
    Tinker = " Tinker",
    Woodcarver = "Woodcarver",
}
