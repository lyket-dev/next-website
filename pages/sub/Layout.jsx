import Link from "next/link";

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
    </main>
  );
}
