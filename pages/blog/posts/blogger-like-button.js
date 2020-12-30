import React from "react";
import { UpdownButton } from "@lyket/react";
import Head from "next/head";
import Link from "next/link";

export const meta = {
  title: "Blogger like button with Lyket + video tutorial"
};

export default function Post() {
  return (
    <>
      <Head>
        <title>Lyket - Add a Blogger like button in a few seconds</title>
        <meta
          property="og:description"
          content="Lyket lets you add privacy compliant clap and like buttons to any Blogger project in a matter of seconds"
          name="description"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <UpdownButton namespace="blog" id="blogger-video-tutorial" />
          </div>
          <p className="page__text"></p>
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              If you have a blog on Blogger you probably wondered if there is an
              easy way to add a like button, or, if you are a fan of Medium, a
              clap button. Lyket is a new tool that lets you add like buttons on
              any Blogger project in a matter of seconds.
            </p>
            <p>Don't believe me? See it with your own eyes 👀</p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/acvFpZULNH8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h2>As seen on Youtube</h2>
            <p>
              Lets's go through the video steps. In the video we use this code
              to create a clap button
            </p>
            <pre>
              <code class="language-javascript">
                {`<div
      data-lyket-type="clap"
      data-lyket-namespace="testing-widget"
      data-lyket-id="everybody-clap-now"
  />
      <script
  src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=acc0dbccce8e557db5ebbe6d605aaa"
  />
  `}
              </code>
            </pre>
            <p>
              Just like I am suggesting in the video, this snippet uses a test
              API key that resets all the button counters every day so you
              should register to Lyket to get your own!
            </p>
            <p>
              To do that just navigate to the{" "}
              <a href={`${process.env.appBaseUrl}/signup`}>registration page</a>
              , fill out the form and get your personal public API key. Then
              replace the test one with that, after the "apiKey=" query
              parameter.
            </p>
            <p>
              Once you register you will also be able to visit your dashboard
              where you can see which of your buttons were the most upvoted!
            </p>

            <h3>Customize your buttons</h3>
            <p>
              Let's go back to our button. Lyket is very simple to customize.
              The best way to do it is by following the instructions you can
              find in the{" "}
              <Link href="/docs/widget">
                <a>widget documentation.</a>
              </Link>
            </p>
            <p>
              Basically, to create a button you need to specify the type of
              button you want to create - like, clap or up/down - using the
              "data-lyket-type" attribute. Then choose an unique ID for your
              button using the "data-lyket-id" attribute. "data-lyket-namespace"
              is useful to tag or categorize your buttons once you see them
              listed in your dashboard in the private area.
            </p>
            <p>
              That's it! Easy, right? Write to us if you had any problems using
              the widget or if you want to suggest any improvement!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
