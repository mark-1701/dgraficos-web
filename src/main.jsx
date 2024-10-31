import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import './index.css';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primeicons/primeicons.css';
import '/node_modules/primeflex/primeflex.css';
import App from './App';
import store from './redux/store'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <PrimeReactProvider>
        <App />
      </PrimeReactProvider>
    </Provider>
  </StrictMode>
);
