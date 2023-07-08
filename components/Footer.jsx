import React from "react";
import Twitter from "../public/icons/twitter.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <ul className="footer__list">
          <li className="footer__item">
            <Link href="/docs/react" className="footer__link">
              React Docs
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link
              href="/docs/html"
              title="Like button HTML"
              className="footer__link"
            >
              HTML Docs
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/docs/api" className="footer__link">
              API Docs
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/templates" className="footer__link">
              Templates
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/blog/posts/count-api" className="footer__link">
              Count API
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/blog/posts/star-rating-react" className="footer__link">
              React star rating
            </Link>
          </li>
        </ul>
        <ul className="footer__list">
          <li className="footer__item">Copyright Lyket 2022</li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/privacy" className="footer__link">
              Privacy Policy
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/terms" className="footer__link">
              Terms of use
            </Link>
          </li>
          <li className="footer__dot">•</li>
          <li className="footer__item">
            <Link href="/blog" className="footer__link">
              Blog
            </Link>
          </li>
          <li className="footer__dot">•</li>
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
