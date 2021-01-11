import React from "react";
import { PrismLight as Prism } from "react-syntax-highlighter";
import { dracula } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { jsx } from "react-syntax-highlighter/dist/cjs/languages/prism";

Prism.registerLanguage("jsx", jsx);

export default function Code({ children }) {
  return (
    <code>
      <Prism language={"jsx"} style={dracula} showLineNumbers>
        {children}
      </Prism>
    </code>
  );
}
