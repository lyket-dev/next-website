import React, { useState } from "react";
import Code from "components/Code";

export default function CodeBox({ currentButton, selectedTech }) {
  const [tech, setTech] = useState(selectedTech || "html");
  const capitolized =
    currentButton.charAt(0).toUpperCase() + currentButton.slice(1);

  const reactText = () => {
    return `import { Provider, ${capitolized}Button } from "@lyket/react";

<Provider apiKey="${process.env.lyketResetApiKey}">
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

<script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=${process.env.lyketResetApiKey}" />
`;
  };

  return (
    <div className="code-box">
      <div className="code-box__top">
        <a
          className={`code-box__link${tech === "html" ? " active" : " "}`}
          onClick={(e) => {
            e.preventDefault();
            setTech("html");
          }}
        >
          HTML
        </a>
        <a
          className={`code-box__link${tech === "react" ? " active" : " "}`}
          onClick={(e) => {
            e.preventDefault();
            setTech("react");
          }}
        >
          React
        </a>
      </div>
      <div className="code-box__body">
        <Code>{tech === "react" ? reactText() : htmlText()}</Code>
        <button
          className="copy-button"
          onClick={(e) => {
            e.preventDefault();

            navigator.clipboard.writeText(
              tech === "react" ? reactText() : htmlText()
            );
          }}
        >
          copy
        </button>
      </div>
    </div>
  );
}
