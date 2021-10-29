import { useEventEmitter } from '@umijs/hooks';
import '../styles/globals.css';
import 'react-awesome-button/dist/styles.css';
import { ContextApi } from '../state/ContextApi';
import { Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { marketCards } from '../mock';

function MyApp({ Component, pageProps }) {
  const $event = useEventEmitter();
  const [purchases, setPurchases] = useState([marketCards[1]]);
  return (
    <ContextApi.Provider
      value={{
        data: { event: $event, purchases },
        setPurchases,
      }}
    >
      <Component {...pageProps}>
        <Toaster />
      </Component>
    </ContextApi.Provider>
  );
}

export default MyApp;
