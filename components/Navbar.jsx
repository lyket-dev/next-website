import { useState, useEffect } from "react";
import Link from "next/link";
import Menu from "public/svg/menu.svg";
import Close from "public/svg/close.svg";
import { useRouter } from "next/router";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const router = useRouter();

  useEffect(() => setMenuOpen(false), [router.pathname]);

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <Link href="/">
          <a>LYKET</a>
        </Link>
      </div>
      <ul className={`navbar__container${menuOpen ? "--visible" : ""}`}>
        <a className="navbar__toggler" onClick={() => setMenuOpen(false)}>
          <Close />
        </a>
        <li className="navbar__item">
          <Link href="/demo">
            <a className="navbar__link">Demo</a>
          </Link>
        </li>
        <li className="navbar__item">
          <div className="navbar__group">
            <a className="navbar__link">Docs</a>
            <div className="navbar__pane">
              <Link href="/docs/react">
                <a>React</a>
              </Link>
              <Link href="/docs/widget">
                <a>Widget</a>
              </Link>
              <Link href="/docs/api">
                <a>API</a>
              </Link>
            </div>
          </div>
        </li>
        <li className="navbar__item">
          <Link href="/pricing">
            <a className="navbar__link">Pricing</a>
          </Link>
        </li>
        <li className="navbar__item">
          <Link href="/login">
            <a className="button">Log in</a>
          </Link>
        </li>
      </ul>
      <a className="navbar__toggler" onClick={() => setMenuOpen(true)}>
        <Menu />
      </a>
    </div>
  );
}
