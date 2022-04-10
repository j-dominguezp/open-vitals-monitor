import Head from 'next/head';

const Seo = (): JSX.Element => (
  <Head>
    <title>Open Vitals Monitor</title>

    <meta
      name="description"
      content="Open Web Vitals Monitor with no particular web service dependency. It will work as long as you provide a valid service that this monitor can read. Details can be found on project's github repository."
    />

    <link rel="icon" href="/favicon.ico" />
  </Head>
);

export default Seo;
