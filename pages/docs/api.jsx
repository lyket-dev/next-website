import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import SwaggerUI from "swagger-ui-react";

export default function Docs() {
  return (
    <div className="page">
      <section className="page__section">
        <QuickDocsMenu />
      </section>
      <section className="page__section">
        <h1 className="page__title">Lyket API docs</h1>
        <div className="docs">
          <SwaggerUI url={`${process.env.apiBaseUrl}/schema`} />
        </div>
      </section>
    </div>
  );
}
