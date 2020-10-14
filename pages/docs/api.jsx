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
        <div className="docs">
          <p className="docs__title">API docs</p>
          <SwaggerUI url={`${process.env.apiBaseUrl}/schema`} />
        </div>
      </section>
    </div>
  );
}
