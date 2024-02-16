import { Provider } from 'react-redux'
import { store } from './redux/store.ts'
import FuturamaProvider from './hooks/useFuturama/useFuturama.tsx';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

function Providers({ children }: { children: React.ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <FuturamaProvider>
                    {children}
                </FuturamaProvider>
            </Provider>
        </QueryClientProvider>
    )
}

export default Providers;