import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-175162938-1"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag() {
                    dataLayer.push(arguments);
                  }
                  gtag("js", new Date());

                  gtag("config", "UA-175162938-1");`
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.intergramId = 217428232
            window.intergramCustomizations = {
                titleClosed: 'Chat 👋',
                titleOpen: 'Lyket AMA',
                introMessage: 'Anything on your mind?',
                autoNoResponse: 'Thanks for your message! Sorry, we are busy (or sleeping) right now. We will answer you ASAP',
                mainColor: "#ff5dff",
            };`
            }}
          />
          <script
            id="intergram"
            type="text/javascript"
            src="https://www.intergram.xyz/js/widget.js"
          ></script>
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <div
          className="loading-overlay"
          style={{
            backgroundColor: "white",
            position: "fixed",
            transition: "all 0.25s ease-in-out",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            zIndex: 2000
          }}
        />
      </Html>
    );
  }
}
