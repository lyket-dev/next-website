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
                <a className="navbar__link">React</a>
              </Link>
              <Link href="/docs/widget">
                <a className="navbar__link">Widget</a>
              </Link>
              <Link href="/docs/api">
                <a className="navbar__link">API</a>
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
          <a className="button" href={process.env.appBaseUrl}>
            Login
          </a>
        </li>
      </ul>
      <a className="navbar__toggler" onClick={() => setMenuOpen(true)}>
        <Menu />
      </a>
    </div>
  );
}
