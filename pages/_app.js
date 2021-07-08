import "styles/main.sass";
import Layout from "components/Layout";
import "swagger-ui-react/swagger-ui.css";
import { Provider } from "@lyket/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider
      apiKey={process.env.lyketPublicApiKey}
      baseUrl={process.env.apiBaseUrl}
      theme={{
        colors: {
          primary: "#24fcc966",
          secondary: "#ffcaff66",
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
