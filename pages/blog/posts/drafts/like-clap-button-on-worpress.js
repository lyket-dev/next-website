import React from "react";
import { UpdownButton } from "@lyket/react";
import Head from "next/head";
import Link from "next/link";

export const meta = {
  title: "Add clap and like buttons to Wordpress with Lyket"
};

export default function Post() {
  return (
    <>
      <Head>
        <title>Lyket - Like and clap buttons for Wordpress</title>
        <meta
          property="og:description"
          content="Lyket lets you add privacy compliant clap and like buttons to any Wordpress project in a matter of seconds"
          name="description"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <UpdownButton namespace="blog" id="embed-on-wordpress" />
          </div>
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              Lyket is the ultimate tool to quickly implement GDPR-compliant
              like, clap and vote buttons on any Wordpress project. From the
              moment you create a button our server will keep track of every
              visitor interaction, without storing their personal data.
            </p>
            <p>
              If you’re using Wordpress you are probably accustomed to plugins.
              We are currently developing a Lyket Wordpress plugin but in the
              meantime you can use our super simple html integration to see
              Lyket clap and like buttons in action on your Wordpress website!
              Just follow this few easy steps:
            </p>
            <h3>Register on Lyket</h3>
            <p>
              To get started you need to{" "}
              <a href={`${process.env.appBaseUrl}/signup`}>register</a> to get
              your personal public API key.
            </p>
            <h3>Add Lyket script to your project</h3>
            <p>
              Once you'registered you have to add this code top-level in your
              Wordpress project (remember to replace "[YOUR-API-KEY]" with your
              own API key you got from registering.):
            </p>
            <pre>
              <code className="language-javascript">
                {`<script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]></script>`}
              </code>
            </pre>
            <p>You can do it in two ways:</p>
            <ul>
              <li>
                By going in your theme customization settings and by adding a
                new widget to the footer. Here is a video explaining how to do
                it:
              </li>
            </ul>

            <video
              playsInline
              controls
              src="/assets/lyket-wordpress-pt1.mov"
              type="video/mov"
            ></video>
            <ul>
              <li>
                Or, if your theme does not support custom html widgets, you can
                install a plugin like{" "}
                <a
                  href="https://wordpress.org/plugins/insert-headers-and-footers/"
                  target="_blank"
                >
                  this one, called Insert headers and footers
                </a>{" "}
                and then follow the instructions to insert the Lyket script
                mentioned above.
              </li>
            </ul>
            <h3>Add buttons anywhere in your Wordpress pages</h3>
            <p>
              Now that you copied the script, Lyket is available anywhere in
              your Wordpress website so you can add a button wherever you are
              able to add an html block. Here is an example video on how to do
              it.
            </p>
            <video
              playsInline
              controls
              src="/assets/lyket-wordpress-pt2.mov"
              type="video/mov"
            ></video>
            <p>
              To choose and customize the buttons follow the{" "}
              <Link href="/docs/html" title="Like button HTML">
                <a>HTML documentation</a>
              </Link>
              . And that's it!
            </p>
            <p>I told you it was that easy ;)</p>
          </div>
        </section>
      </div>
    </>
  );
}
