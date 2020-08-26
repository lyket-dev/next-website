import "../styles/main.sass";
import Layout from "./sub/Layout";
import "swagger-ui-react/swagger-ui.css";
import dynamic from "next/dynamic";

const Provider = dynamic(
  () => import("@lyket/react").then(mod => mod.Provider),
  { ssr: false }
);

export default function App({ Component, pageProps }) {
  return (
    <Provider apiKey="xxx">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
