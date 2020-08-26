import Link from "next/link";

export default function Layout({ children }) {
  const renderLoggedMenuItems = () => {
    return (
      <>
        {false && (
          <li className="navbar__item">
            <Link className="navbar__link" href="/signup">
              <a>Signup</a>
            </Link>
          </li>
        )}
        <li className="navbar__item">
          <Link href="/login" className="button">
            <a>Log in</a>
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
            <Link href="/docs" className="navbar__link">
              <a>Docs</a>
            </Link>
          </li>
          {renderLoggedMenuItems()}
        </div>
      </ul>
      {children}
    </main>
  );
}
