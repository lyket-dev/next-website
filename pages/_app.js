import "../styles/main.sass";
import Layout from "../components/Layout";
import "swagger-ui-react/swagger-ui.css";
import dynamic from "next/dynamic";
import { Provider } from "@lyket/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider apiKey="Xkp5R0w+6uY+OftTTVEQ2BkiwUw=">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
