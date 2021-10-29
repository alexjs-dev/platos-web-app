import { useEventEmitter } from '@umijs/hooks';
import '../styles/globals.css';
import 'react-awesome-button/dist/styles.css';
import { ContextApi } from '../state/ContextApi';
import { Toaster } from 'react-hot-toast';

function MyApp({ Component, pageProps }) {
  const $event = useEventEmitter();
  return (
    <ContextApi.Provider value={{ event: $event }}>
      <Component {...pageProps}>
        <Toaster />
      </Component>
    </ContextApi.Provider>
  );
}

export default MyApp;
