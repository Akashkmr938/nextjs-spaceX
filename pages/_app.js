import Head from "next/head";
import { wrapper } from "../store/store";
import "../public/style.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>SpaceX</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default wrapper.withRedux(MyApp);
