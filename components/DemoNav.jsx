import { useState, useEffect } from "react";
import Link from "next/link";

export default function Group() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="navbar__group">
      <a className="navbar__link" onClick={() => setMenuOpen(true)}>
        Docs
      </a>
      <div className="navbar__pane">
        <Link href="/react">
          <a className="">React</a>
        </Link>
        <Link href="/widget">
          <a className="">Widget</a>
        </Link>
        <Link href="/api">
          <a className="">API</a>
        </Link>
      </div>
    </div>
  );
}
