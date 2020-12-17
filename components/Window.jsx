import React, { useState } from "react";

export default function Window() {
  const [type, setType] = useState("html");

  const reactText = () => {
    return `import { Provider, ClapButton } from "@lyket/react";

<Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
  <ClapButton
    namespace="testing-react"
    id="everybody-clap-now"
  />
</Provider>
  `;
  };

  const htmlText = () => {
    return `<div
    data-lyket-type="clap"
    data-lyket-namespace="testing-widget"
    data-lyket-id="everybody-clap-now"
/>

<script
    src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=acc0dbccce8e557db5ebbe6d605aaa"
/>`;
  };

  return (
    <div className="window">
      <div className="window__top">
        <a
          className="window__link"
          onClick={e => {
            e.preventDefault();
            setType("html");
          }}
        >
          Widget
        </a>
        <a
          className="window__link"
          onClick={e => {
            e.preventDefault();
            setType("react");
          }}
        >
          React
        </a>
      </div>
      <div className="window__body">
        <pre>
          <code className="language-html">
            {type === "react" && reactText()}
            {type === "html" && htmlText()}
          </code>
        </pre>
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
