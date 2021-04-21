import React from "react";
import ActiveLink from "components/ActiveLink";

export default function QuickDocsMenu() {
  return (
    <div className="menu">
      <ActiveLink href="/docs/react">
        <a className="menu__link">React</a>
      </ActiveLink>
      <span>|</span>
      <ActiveLink href="/docs/widget">
        <a className="menu__link">Widget</a>
      </ActiveLink>
      <span>|</span>
      <ActiveLink href="/docs/wordpress">
        <a className="menu__link">Wordpress</a>
      </ActiveLink>
      <span>|</span>
      <ActiveLink href="/docs/api">
        <a className="menu__link">API</a>
      </ActiveLink>
    </div>
  );
}
