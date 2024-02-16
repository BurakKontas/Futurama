export interface FuturamaInfo {
    synopsis: string;
    yearsAired: string;
    creators: {
        name: string;
        url: string;
    }[];
    id: number;
}

export interface FuturamaCharacter {
    name: {
        first: string;
        middle: string;
        last: string;
    };
    images: {
        "head-shot": string;
        main: string;
    };
    age: string;
    gender: string;
    species: string;
    homePlanet?: string;
    occupation: string;
    sayings: string[];
    id: number;
}

export interface FuturamaCast {
    name: string;
    born: string;
    died: string;
    bio: {
        text: string;
        url: string;
    };
    id: number;
}

export interface FuturamaEpisode {
    number: string;
    title: string;
    writers: string;
    originalAirDate: string;
    desc: string;
    id: number;
}

export interface FuturamaQuestion {
    id: number;
    question: string;
    possibleAnswers: string[];
    correctAnswer: string;
}

export interface FuturamaInventoryItem {
    title: string;
    category: string;
    description: string;
    slogan: string;
    price: number;
    stock: number;
    id: number;
}

export interface IFuturamaService {
    getInfo(signal: AbortSignal): Promise<FuturamaInfo>;
    getCharacter(signal: AbortSignal): Promise<FuturamaCharacter[]>;
    getCharacter(signal: AbortSignal, id: number): Promise<FuturamaCharacter>;
    getCast(signal: AbortSignal): Promise<FuturamaCast[]>;
    getCast(signal: AbortSignal, id: number): Promise<FuturamaCast>;
    getEpisode(signal: AbortSignal): Promise<FuturamaEpisode[]>;
    getEpisode(signal: AbortSignal, id: number): Promise<FuturamaEpisode>;
    getQuestion(signal: AbortSignal): Promise<FuturamaQuestion[]>;
    getQuestion(signal: AbortSignal, id: number): Promise<FuturamaQuestion>;
    getInventory(signal: AbortSignal): Promise<FuturamaInventoryItem[]>;
    getInventory(signal: AbortSignal, id: number): Promise<FuturamaInventoryItem>;
}