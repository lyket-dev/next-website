import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head />

        <body>
          <Main />
          <NextScript />
        </body>

        <div
          className="loading-overlay"
          style={{
            backgroundColor: 'white',
            position: 'fixed',
            transition: 'all 0.25s ease-in-out',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 2000,
          }}
        />
      </Html>
    );
  }
}
