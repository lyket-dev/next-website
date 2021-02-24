import React from "react";
import { UpdownButton } from "@lyket/react";
import Head from "next/head";
import Link from "next/link";
import Code from "components/Code";

export const meta = {
  title: "Blogger like button with Lyket + video tutorial"
};

export default function Post() {
  return (
    <>
      <Head>
        <title>How to add a Blogger like button | Lyket</title>
        <meta
          content="Lyket lets you add privacy compliant clap and like buttons to Blogger in a matter of seconds"
          name="description"
        />
        <meta
          name="keywords"
          content="Blogger like button, Blogger, like button"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h2 className="page__kicker">Blogger like button</h2>
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
              Creating a blog with{" "}
              <strong>Blogger is really a piece of cake</strong> but
              unfortunately there is no an out-of-the-box way to{" "}
              <strong>add a like button</strong>, or, a{" "}
              <strong>Medium-like clap button</strong>.
            </p>

            <p>
              <strong>
                Lyket is a new tool that integrates perfectly with Blogger
              </strong>{" "}
              to let you add like buttons on all of your blogs in a matter of
              seconds.
            </p>
            <p>
              In this video tutorial I will try to show how to{" "}
              <strong>add a Blogger like button</strong> in ust 1.40 minutes!
              Read on to follow the vide step-by-step
            </p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/acvFpZULNH8"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4>As seen in the video</h4>
            <p>Lets's go through the video steps!</p>
            <p>
              In the video we use this code to create a clap button. But you can
              create a like button by changing the type attributes. The
              attribute "data-lyket-type" can be changed to{" "}
              <strong>like, clap or like/dislike button</strong>.
            </p>
            <Code>
              {`<div
    data-lyket-type="like"
    data-lyket-namespace="testing-widget"
    data-lyket-id="everybody-like-now"
/>

<script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=acc0dbccce8e557db5ebbe6d605aaa" />
`}
            </Code>

            <p>
              Just like I am suggesting in the video, this snippet uses a test
              API key that resets all the button counters every day so you
              should register to Lyket to get your own! ;)
            </p>
            <p>
              To do that just navigate to the{" "}
              <a href={`${process.env.appBaseUrl}/signup`}>registration page</a>
              , fill out the form and get your personal public API key. Then
              replace the test key with your own, after the "apiKey=" query
              parameter.
            </p>
            <p>
              Once you register you will also be able to visit your dashboard
              where you can see which of your{" "}
              <strong>Blogger like buttons were the most upvoted</strong>!
            </p>

            <h4>Customize the buttons</h4>
            <p>
              Let's go back to our button.{" "}
              <strong>Lyket is super simple to customize</strong>. The best way
              to do it is by following the instructions you can find in the{" "}
              <Link href="/docs/widget">
                <a>officil widget documentation.</a>
              </Link>
            </p>
            <p>
              Basically, to create a <strong>Blogger like button</strong> you
              need to:
              <ul>
                <li>
                  Specify the type of button you want in your Blogger blog -
                  <strong>like, clap or like/dislike</strong> - using the
                  "data-lyket-type" attribute.
                </li>
                <li>
                  Choose an <strong>unique ID</strong> for your button using the
                  "data-lyket-id" attribute.
                </li>
                <li>
                  "data-lyket-namespace" is useful to tag or categorize your
                  buttons once you see them listed in your dashboard in the
                  private area.
                </li>
              </ul>
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
