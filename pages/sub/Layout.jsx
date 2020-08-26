import Link from "next/link";
import Head from "next/head";

export default function Layout({ children }) {
  const renderLoggedMenuItems = () => {
    return (
      <>
        {false && (
          <li className="navbar__item">
            <Link href="/signup">
              <a className="navbar__link">Signup</a>
            </Link>
          </li>
        )}
        <li className="navbar__item">
          <Link href="/login">
            <a className="button">Log in</a>
          </Link>
        </li>
      </>
    );
  };

  return (
    <main>
      <Head>
        <title>Lyket - Instantly implement feedbacks on your website</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#21fdd5" />
        <meta
          name="description"
          content="A tool for static site builders and JAMstack players to easily add a feedback button/voting mechanism to their website. 👍❤️👏"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
      </Head>

      <ul className="navbar">
        <li className="navbar__logo">
          <Link href="/">
            <a>LYKET</a>
          </Link>
        </li>
        <div className="navbar__container">
          <li className="navbar__item">
            <Link href="/docs">
              <a className="navbar__link">Docs</a>
            </Link>
          </li>
          {renderLoggedMenuItems()}
        </div>
      </ul>

      {children}

      <footer className="footer">
        <div className="footer__container">Copyright Lyket 2020</div>
      </footer>
    </main>
  );
}
