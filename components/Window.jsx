import React, { useState } from "react";
import Code from "components/Code";

export default function Window({ currentButton }) {
  const [type, setType] = useState("html");
  const capitolized =
    currentButton.charAt(0).toUpperCase() + currentButton.slice(1);

  const reactText = () => {
    return `import { Provider, ${capitolized}Button } from "@lyket/react";

<Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <${capitolized}Button
    namespace="testing-react"
    id="everybody-${currentButton}-now"
  />
</Provider>
`;
  };

  const htmlText = () => {
    return `<div
    data-lyket-type="${currentButton}"
    data-lyket-namespace="testing-widget"
    data-lyket-id="everybody-${currentButton}-now"
/>

<script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=acc0dbccce8e557db5ebbe6d605aaa" />
`;
  };

  return (
    <div className="window">
      <div className="window__top">
        <a
          className={`window__link${type === "html" ? " active" : " "}`}
          onClick={e => {
            e.preventDefault();
            setType("html");
          }}
        >
          HTML
        </a>
        <a
          className={`window__link${type === "react" ? " active" : " "}`}
          onClick={e => {
            e.preventDefault();
            setType("react");
          }}
        >
          React
        </a>
      </div>
      <div className="window__body">
        <Code>{type === "react" ? reactText() : htmlText()}</Code>
        <button
          className="copy-button"
          onClick={e => {
            e.preventDefault();

            navigator.clipboard.writeText(
              type === "react" ? reactText() : htmlText()
            );
          }}
        >
          copy
        </button>
      </div>
    </div>
  );
}
