import React, { createContext, useContext } from "react";
import { FuturamaProviderPropsType, FuturamaProviderValueType } from "./useFuturama.types";
import { FuturamaCast, FuturamaCharacter, FuturamaEpisode, FuturamaInfo, FuturamaInventoryItem, FuturamaQuestion, FuturamaService } from "@Services/FuturamaService";
import { useQuery } from "react-query";

export const FuturamaContext = createContext<FuturamaProviderValueType>({
    getInfo: () => { throw new Error('FuturamaProvider not found') },
    getCharacter: () => { throw new Error('FuturamaProvider not found') },
    getCast: () => { throw new Error('FuturamaProvider not found') },
    getEpisode: () => { throw new Error('FuturamaProvider not found') },
    getQuestion: () => { throw new Error('FuturamaProvider not found') },
    getInventory: () => { throw new Error('FuturamaProvider not found') },
})

export const useFuturama = () => {
    const futuramaContext = useContext(FuturamaContext);

    if (!futuramaContext) {
        throw new Error('useFuturama must be used within a FuturamaProvider');
    }

    return futuramaContext;
};


type ServiceFunction<T> = (signal: AbortSignal, id?: number) => Promise<T>;

function fetchQuery<T>(queryKey: string, serviceFunction: ServiceFunction<T>, thisContext: FuturamaService, id?: number) {
    const query = useQuery<T>({
        queryKey: [queryKey, id],
        queryFn: async ({ signal }) => {
            console.log(queryKey, id)
            if (!signal) throw new Error('AbortSignal is not available');
            return serviceFunction.call(thisContext, signal, id);
        },
        cacheTime: 1000 * 60 * 60 * 24, // 24 hours
        enabled: false,
        refetchOnWindowFocus: false,
        retry: false,
    });
    return query;
};

const FuturamaProvider: React.FC<FuturamaProviderPropsType> = (props) => {
    const [futuramaService, _] = React.useState(new FuturamaService());

    const getInfo = () => fetchQuery<FuturamaInfo>("futuramaInfo", futuramaService.getInfo, futuramaService);
    const getCharacter = (id?: number) => fetchQuery<FuturamaCharacter | FuturamaCharacter[]>("futuramaCharacter", futuramaService.getCharacter, futuramaService, id);
    const getCast = (id?: number) => fetchQuery<FuturamaCast | FuturamaCast[]>("futuramaCast", futuramaService.getCast, futuramaService, id);
    const getEpisode = (id?: number) => fetchQuery<FuturamaEpisode | FuturamaEpisode[]>("futuramaEpisode", futuramaService.getEpisode, futuramaService, id);
    const getQuestion = (id?: number) => fetchQuery<FuturamaQuestion | FuturamaQuestion[]>("futuramaQuestion", futuramaService.getQuestion, futuramaService, id);
    const getInventory = (id?: number) => fetchQuery<FuturamaInventoryItem | FuturamaInventoryItem[]>("futuramaInventory", futuramaService.getInventory, futuramaService, id);

    return (
        <FuturamaContext.Provider value={{ getCast, getCharacter, getEpisode, getInfo, getInventory, getQuestion }}>
            {props.children}
        </FuturamaContext.Provider>
    )
}

export default FuturamaProvider;
