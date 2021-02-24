import React from "react";
import { UpdownButton } from "@lyket/react";
import Head from "next/head";
import Link from "next/link";

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
          content="Add a stylish and privacy-friendly Wordpress like button in a matter of seconds"
        />
        <meta
          name="keywords"
          content="Wordpress like button, Wordpress, like button"
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
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              If you have a blog or an e-commerce probably wondered if there is
              an easy way to add a <strong>like button to Wordpress</strong>,
              or, if you are a fan of Medium, a clap button. Lyket is a new tool
              that lets you add like buttons to any Wordpress site in just a few
              seconds.
            </p>
            <p>Don't believe me? See it with your own eyes 👀</p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/LHcYHsY8ICM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <h4>As seen on the video</h4>
            <p>Lets's go through the video steps.</p>
            <p>
              First thing we do here is copying this code in our footer to make
              Lyket available all around our <strong>Wordpress site</strong>.
            </p>
            <pre>
              <code className="language-javascript">
                {`<script
    src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=acc0dbccce8e557db5ebbe6d605aaa"
/>`}
              </code>
            </pre>
            <p>
              Be aware that this code uses a test API key that resets all the
              counters every day so, like I am suggesting in the video, you
              should <strong>register to Lyket</strong> to get your own.
            </p>
            <p>Lets's move on!</p>
            <p>
              Just go to the{" "}
              <a href={`${process.env.appBaseUrl}/signup`}>registration page</a>
              , fill out the form, to get your personal public API key and then
              replace the test one with that, after the "apiKey=" query
              parameter
            </p>
            <p>
              Once you register you will also be able to visit your dashboard
              where you can see which of your buttons were the most upvoted!
            </p>
            <p>
              Then, to <strong>create a Wordpress like button</strong> you need
              to specify the type of button you want to create - like, clap or
              like/dislike - using the "data-lyket-type" attribute, and choose
              an unique identifier with the "data-lyket-id" attribute.
              "data-lyket-namespace" is useful to tag or categorize your buttons
              once you see them listed in your dashboard in the private area.
            </p>
            <p>In the video we use this code to create a clap button</p>
            <pre>
              <code className="language-javascript">
                {`<div
    data-lyket-type="clap"
    data-lyket-namespace="testing-widget"
    data-lyket-id="everybody-clap-now"
/>`}
              </code>
            </pre>

            <h4>What if my Wordpress theme does not support HTML widgets?</h4>
            <p>
              Some themes does not support custom HTML widgets, like the one we
              use in the tutorial. To fix that you can install a plugin like{" "}
              <a
                href="https://wordpress.org/plugins/insert-headers-and-footers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this one
              </a>
              , called Insert headers and footers and then follow the
              instructions to add the Lyket script mentioned above.
            </p>
            <p>
              Even if you don't want to install the plugin you can still use
              Lyket! Because of the way Lyket is built you can also directly
              paste Lyket's script together with each button without impacting
              your pageviews count or performance!
            </p>
            <h4>Customize your Wordpress like buttons</h4>
            <p>
              Once you have copied the script, Lyket will be available anywhere
              in your Wordpress website so you can start adding buttons wherever
              you prefer!
            </p>
            <p>
              To choose and customize the buttons follow the{" "}
              <Link href="/docs/widget">
                <a>widget documentation.</a>
              </Link>
            </p>
            <p>
              P.S.: If you’re using Wordpress you are probably accustomed to
              plugins. We are developing a{" "}
              <strong>Lyket Wordpress plugin</strong>, write to us if you are
              interested!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
