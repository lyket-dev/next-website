import Head from "next/head";
import Home from "./Home";
import dynamic from "next/dynamic";

const Provider = dynamic(
  () => import("@lyket/react").then(mod => mod.Provider),
  { ssr: false }
);

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Provider apiKey="xxx">
        <Home />
      </Provider>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>
    </div>
  );
}
