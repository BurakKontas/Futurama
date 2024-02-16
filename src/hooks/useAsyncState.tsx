import { SetStateAction, useState } from 'react';

function useAsyncState<S>(initialState: S | (() => S)): [S, (newValue: SetStateAction<S>) => Promise<void>] {
    const [state, setState] = useState(initialState);

    const asyncSetState = async (newValue: SetStateAction<S>) => {
        await new Promise(resolve => {
            setState(newValue);
            resolve(null);
        });
    };

    return [state, asyncSetState];
}

export default useAsyncState;