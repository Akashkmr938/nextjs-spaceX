import Head from "next/head";
import { wrapper } from "../store/store";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SpaceX</title>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
