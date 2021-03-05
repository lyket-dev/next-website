import React from "react";
import { UpdownButton, LikeButton, ClapButton, Provider } from "@lyket/react";
import Head from "next/head";
import Link from "next/link";
import Code from "components/Code";
import TryIt from "components/TryIt";

export const meta = {
  title: "Add a Wordpress like button in a matter of seconds"
};

export default function Post() {
  return (
    <>
      <Head>
        <title>Wordpress Like button | Lyket</title>
        <meta
          name="description"
          content="Add fresh and privacy-friendly Wordpress like buttons in a few seconds. Fully customizable and without login!"
        />
        <meta
          name="keywords"
          content="Wordpress like button, Wordpress, like button, heart button"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h2 className="page__kicker">Wordpress like button</h2>
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <UpdownButton namespace="blog" id="wordpress-video-tutorial" />
          </div>
          <p className="page__text"></p>
        </section>
        <section className="page__section">
          <div className="markdown">
            <p></p>
          </div>
        </section>
      </div>
    </>
  );
}
