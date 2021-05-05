import React from "react";
import Twitter from "../public/icons/twitter.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <Link href="/templates">
              <a className="footer__link">Templates</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/docs/react">
              <a className="footer__link">React Docs</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/docs/widget">
              <a className="footer__link">Widget Docs</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/docs/wordpress">
              <a className="footer__link">Wordpress Docs</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/docs/api">
              <a className="footer__link">API Docs</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/pricing">
              <a className="footer__link">Pricing</a>
            </Link>
          </li>
          <li className="footer__item">
            <Link href="/contact">
              <a className="footer__link">Contact us</a>
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">Copyright Lyket 2021</li>•
          <li className="footer__item">
            <Link href="/privacy">
              <a className="footer__link">Privacy Policy</a>
            </Link>
            <Link href="/blog">
              <a className="footer__link">Blog</a>
            </Link>
          </li>
          •
          <li className="footer__link">
            <a
              href="https://twitter.com/LyketDev"
              target="_blank"
              className="footer__link"
              rel="noopener noreferrer"
            >
              <Twitter className="footer__icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}
