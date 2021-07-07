import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import SwaggerUI from "swagger-ui-react";
import Head from "next/head";

// score api

export default function Docs() {
  return (
    <>
      <Head>
        <title>Lyket ranking API | Lyket</title>
        <meta
          content="Lyket ranking API keeps track of your users likes and dislikes and provides the updated ranking in real-time"
          name="description"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <div className="docs__title__container">
            <h2 className="page__kicker">Rank by likes API</h2>
            <h1 className="docs__title">Lyket ranking API</h1>
            <div className="docs__menu__container">
              <QuickDocsMenu />
            </div>
          </div>
          <div className="docs">
            <div className="markdown">
              <p>
                The API represents Lyket's core, and it is as simple as
                powerful.
              </p>
              <p>Here you will find all</p>
            </div>
          </div>
          <div className="api">
            <SwaggerUI url={`${process.env.apiBaseUrl}/schema`} />
          </div>
        </section>
      </div>
    </>
  );
}
