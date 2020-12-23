import "styles/main.sass";
import Layout from "components/Layout";
import "swagger-ui-react/swagger-ui.css";
import { Provider } from "@lyket/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider
      apiKey="Xkp5R0w+6uY+OftTTVEQ2BkiwUw="
      theme={{
        colors: {
          primary: "#24fcc9",
          secondary: "#f78fb7",
          text: "#1f1630",
          background: "#ececec66"
        }
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
