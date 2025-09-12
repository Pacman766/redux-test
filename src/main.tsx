import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { store } from './store/store.ts';
import { Provider } from 'react-redux';
// import { QueryClient, QueryClientProvider, type QueryOptions } from '@tanstack/react-query';

// const queryClient = new QueryClient({
//   defaultOptions: {
//     queries: {
//       keepPreviousData: true,
//     } as QueryOptions,
//   },
// });

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
