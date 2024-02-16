import { 
    FuturamaCast, 
    FuturamaCharacter, 
    FuturamaEpisode, 
    FuturamaInfo, 
    FuturamaInventoryItem, 
    FuturamaQuestion, 
} from '@Services/FuturamaService'
import { UseQueryResult } from 'react-query';

export type FuturamaProviderPropsType = {
    children: React.ReactNode;
}

export interface FuturamaProviderValueType {
    getInfo(): UseQueryResult<FuturamaInfo, unknown>;
    getCharacter(id?: number): UseQueryResult<FuturamaCharacter | FuturamaCharacter[], unknown>;
    getCast(id?: number): UseQueryResult<FuturamaCast | FuturamaCast[], unknown>;
    getEpisode(id?: number): UseQueryResult<FuturamaEpisode | FuturamaEpisode[], unknown>;
    getQuestion(id?: number): UseQueryResult<FuturamaQuestion | FuturamaQuestion[], unknown>;
    getInventory(id?: number): UseQueryResult<FuturamaInventoryItem | FuturamaInventoryItem[], unknown>;
}