import React, { useState } from "react";
import useAsyncEffect from "utils/useAsyncEffect";
import ReactMarkdown from "react-markdown";
import QuickDocsMenu from "components/QuickDocsMenu";

export default function Docs() {
  const [markdown, markdownSet] = useState(null);

  useAsyncEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/lyket-dev/lyket/master/packages/widget/README.md"
    )
      .then(response => response.text())
      .then(text => markdownSet(text));
  }, []);

  return (
    <div className="page">
      <section className="page__section">
        <QuickDocsMenu />
      </section>
      <section className="page__section">
        <div className="docs">
          <p className="docs__title">Widget docs</p>
          <ReactMarkdown source={markdown} className="docs__markdown" />
        </div>
      </section>
    </div>
  );
}
