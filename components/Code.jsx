import React, { useEffect } from "react";
import Prism from "prismjs";
// Do not delete
import PrismJsx from "prismjs/components/prism-jsx.min";
import Line from "prismjs/plugins/line-numbers/prism-line-numbers.js";

export default function Code({ children, language }) {
  useEffect(() => {
    if (typeof document !== undefined && children !== null) {
      Prism.highlightAll(children);
    }
  }, [children, Prism]);

  return (
    <pre className={`language-${language || "jsx"} line-numbers`}>
      <code>{children}</code>
    </pre>
  );
}
