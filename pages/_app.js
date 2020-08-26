import "../styles/main.sass";
import Layout from "./sub/Layout";
import "swagger-ui-react/swagger-ui.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  );
}
