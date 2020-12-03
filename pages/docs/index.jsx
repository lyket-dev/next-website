import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";

export default function Docs() {
  return (
    <div className="page">
      <section className="page__section">
        <h6 className="page__title">Lyket documentation</h6>
        <QuickDocsMenu />
      </section>
    </div>
  );
}
