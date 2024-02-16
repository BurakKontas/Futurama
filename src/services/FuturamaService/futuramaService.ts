import axios, { AxiosInstance } from "axios";
import { FuturamaCast, FuturamaCharacter, FuturamaEpisode, FuturamaInfo, FuturamaInventoryItem, FuturamaQuestion, IFuturamaService } from './futuramaService.types';

class FuturamaService implements IFuturamaService {
    private readonly endpoint = 'https://api.sampleapis.com/futurama';
    private readonly instance: AxiosInstance;

    private endpoints = {
        INFO: '/info',
        CHARACTERS: '/characters',
        CAST: '/cast',
        EPISODES: '/episodes',
        QUESTIONS: '/questions',
        INVENTORY: '/inventory'
    }

    constructor() {
        this.instance = axios.create({
            baseURL: this.endpoint
        });
    }

    async getInfo(signal: AbortSignal): Promise<FuturamaInfo> {
        let response = await this.instance.get(this.endpoints.INFO, { signal });
        return response.data;
    }

    async getCharacter(signal: AbortSignal): Promise<FuturamaCharacter[]>;
    async getCharacter(signal: AbortSignal, id: number): Promise<FuturamaCharacter>;
    async getCharacter(signal: AbortSignal, param?: number): Promise<FuturamaCharacter[] | FuturamaCharacter> {
        const endpoint = param ? `${this.endpoints.CHARACTERS}/${param}` : this.endpoints.CHARACTERS;
        const response = await this.instance.get(endpoint, { signal });
        return response.data;
    }

    async getCast(signal: AbortSignal): Promise<FuturamaCast[]>;
    async getCast(signal: AbortSignal, id: number): Promise<FuturamaCast>;
    async getCast(signal: AbortSignal, param?: number): Promise<FuturamaCast[] | FuturamaCast> {
        const endpoint = param ? `${this.endpoints.CAST}/${param}` : this.endpoints.CAST;
        const response = await this.instance.get(endpoint, { signal });
        return response.data;
    }

    async getEpisode(signal: AbortSignal): Promise<FuturamaEpisode[]>;
    async getEpisode(signal: AbortSignal, id: number): Promise<FuturamaEpisode>;
    async getEpisode(signal: AbortSignal, param?: number): Promise<FuturamaEpisode[] | FuturamaEpisode> {
        const endpoint = param ? `${this.endpoints.EPISODES}/${param}` : this.endpoints.EPISODES;
        const response = await this.instance.get(endpoint, { signal });
        return response.data;
    }

    async getQuestion(signal: AbortSignal): Promise<FuturamaQuestion[]>;
    async getQuestion(signal: AbortSignal, id: number): Promise<FuturamaQuestion>;
    async getQuestion(signal: AbortSignal, param?: number): Promise<FuturamaQuestion[] | FuturamaQuestion> {
        const endpoint = param ? `${this.endpoints.QUESTIONS}/${param}` : this.endpoints.QUESTIONS;
        const response = await this.instance.get(endpoint, { signal });
        return response.data;
    }

    async getInventory(signal: AbortSignal): Promise<FuturamaInventoryItem[]>;
    async getInventory(signal: AbortSignal, id: number): Promise<FuturamaInventoryItem>;
    async getInventory(signal: AbortSignal, param?: number): Promise<FuturamaInventoryItem[] | FuturamaInventoryItem> {
        const endpoint = param ? `${this.endpoints.INVENTORY}/${param}` : this.endpoints.INVENTORY;
        const response = await this.instance.get(endpoint, { signal });
        return response.data;
    }

    // async postExample(data: any, signal: AbortSignal): Promise<any> {
    //     let response = await this.instance.post("", data, { signal });
    //     return response.data;
    // }

}

export default FuturamaService;