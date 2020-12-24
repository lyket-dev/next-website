import React from "react";
import Link from "next/link";

export default function QuickDocsMenu() {
  return (
    <div className="menu">
      <Link href="/docs/react">
        <a className="menu__link">React</a>
      </Link>
      <span>|</span>
      <Link href="/docs/widget">
        <a className="menu__link">Widget</a>
      </Link>
      <span>|</span>
      <Link href="/docs/api">
        <a className="menu__link">API</a>
      </Link>
    </div>
  );
}
