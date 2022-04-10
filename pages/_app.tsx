import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Navbar from '../components/navbar';
import Seo from '../components/seo';

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
