import "../styles/main.sass";
import Layout from "./sub/Layout";
import "swagger-ui-react/swagger-ui.css";
import dynamic from "next/dynamic";
import { Provider } from "@lyket/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider apiKey="xxx" baseUrl="http://localhost:3000">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
