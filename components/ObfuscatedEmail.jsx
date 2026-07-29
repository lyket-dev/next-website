import React, { useEffect, useState } from "react";

const USER = "lyket.dev";
const DOMAIN = "gmail.com";

export default function ObfuscatedEmail({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  if (!ready) {
    return <span>{children || "our email"}</span>;
  }

  const address = `${USER}@${DOMAIN}`;

  return <a href={`mailto:${address}`}>{children || address}</a>;
}
