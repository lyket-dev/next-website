import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import SwaggerUI from "swagger-ui-react";

export default function Docs() {
  return (
    <div className="page">
      <div className="page__section--gradient" />
      <section className="page__section">
        <div className="docs__title__container">
          <h2 className="page__kicker">clap & like button API</h2>
          <h1 className="docs__title">API docs</h1>
          <QuickDocsMenu />
        </div>
        <div className="api">
          <SwaggerUI url={`${process.env.apiBaseUrl}/schema`} />
        </div>
      </section>
    </div>
  );
}
