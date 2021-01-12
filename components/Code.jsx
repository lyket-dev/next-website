import React, { useEffect } from "react";
import Prism from "prismjs";
import PrismJsx from "prismjs/components/prism-jsx.min";
import Line from "prismjs/plugins/line-numbers/prism-line-numbers.js";

export default function Code({ children }) {
  useEffect(Prism.highlightAll, [children]);

  return (
    <pre className="language-jsx line-numbers">
      <code>{children}</code>
    </pre>
  );
}
