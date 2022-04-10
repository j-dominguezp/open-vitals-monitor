import type { AppProps } from 'next/app';
import Script from 'next/script';
import Navbar from '../components/Navbar';
import Seo from '../components/Seo';

import '../styles/globals.css';

function OpenVitalsMonitorApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Script src="/scripts/theme.js" strategy="beforeInteractive" />

      <Seo />

      <Navbar />

      <Component {...pageProps} />
    </>
  );
}

export default OpenVitalsMonitorApp;
