import type { AppProps } from 'next/app';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';

import '../styles/globals.css';

function OpenVitalsMonitorApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Seo />

      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default OpenVitalsMonitorApp;
