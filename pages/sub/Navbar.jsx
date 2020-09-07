import Link from "next/link";

export default function Navbar() {
  return (
    <ul className="navbar">
      <li className="navbar__logo">
        <Link href="/">
          <a>LYKET</a>
        </Link>
      </li>
      <div className="navbar__container">
        <li className="navbar__item">
          <Link href="docs">
            <a className="navbar__link">Docs</a>
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="pricing">
            <a className="navbar__link">Pricing</a>
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="/login">
            <a className="button">Log in</a>
          </Link>
        </li>
      </div>
    </ul>
  );
}
