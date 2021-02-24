import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";

export default function Docs() {
  return (
    <div className="page">
      <section className="page__section">
        <QuickDocsMenu />
        <div className="docs__title__container">
          <h2 className="page__kicker">clap & like buttons on react</h2>
          <h1 className="docs__title">Lyket documentation</h1>
          <QuickDocsMenu />
        </div>
      </section>
    </div>
  );
}
