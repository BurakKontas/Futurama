import ReactDOM from 'react-dom/client'

import Providers from './providers.tsx';
import Router from './router.tsx';

import './index.css'

function App() {
  return (
    <Providers>
      <Router />
    </Providers>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />)
