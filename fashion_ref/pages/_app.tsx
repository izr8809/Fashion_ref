import '@/styles/globals.scss';
import '@/styles/uploadfiles.scss';
import '@/styles/sidebar.scss';
import type { AppProps } from 'next/app';
import wrapper from '../store/configureStore';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

// export default App;
export default wrapper.withRedux(App);
