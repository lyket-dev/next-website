import React from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import Code from "components/Code";
import Link from "next/link";
import Head from "next/head";

export default function Docs() {
  return (
    <>
      <Head>
        <title>
          Lyket - The ultimate like, clap and like/dislike buttons widget
        </title>
        <meta
          property="og:description"
          content="Instantly add like, applause and like/dislike on any website with our super simple HTML widget!"
          name="description"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <h1 className="docs__title">Widget docs</h1>
          <QuickDocsMenu />
          <div className="docs">
            <div className="markdown">
              <p>
                Here you can read the full{" "}
                <strong>
                  <a
                    href="https://github.com/lyket-dev/lyket/tree/master/packages/widget"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    @lyket/widget
                  </a>
                </strong>{" "}
                documentation, a simple script that lets you embed Lyket in your{" "}
                <strong>HTML, Wordpress, Webflow, Notion</strong> website and
                more!
              </p>
              <p>We have more framework-specific guides for:</p>
              <ul>
                <li>
                  <Link href="/blog/posts/embed-like-button-to-notion">
                    <a>How to add like buttons to Notion</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/posts/like-clap-button-on-worpress">
                    <a>How to add like buttons to Wordpress</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/posts/blogger-like-button">
                    <a>How to add like buttons to Blogger</a>
                  </Link>
                </li>
              </ul>
              <h2>Installation</h2>
              <p>
                In your HTML file or widget add the script top-level passing
                your Lyket API key as argument, then just add an element with a
                data-lyket-type anywhere in your code to create buttons.
              </p>
              <Code>
                &lt;script
                src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]"&gt;&lt;/script&gt;
              </Code>
              <h2>Buttons</h2>
              <p>
                When you add a Lyket element a GET request is made to retrieve
                info about the button with that certain id and namespace. If no
                button is found, a new resource is created with the id/namespace
                identifier.
              </p>
              <p>
                Notice that the server will create a new resource for every
                different and unique identifier, so if you change id or
                namespace the new button won’t inherit the votes.
              </p>
              <p>
                Every time a user clicks on a button, the template will update
                the likes counter and flag that the user has already voted.
                There is no need of signup or third party service.
              </p>
              <p>
                There are three different button types that have different
                behaviours.
              </p>
              <h3>Like button</h3>
              <p>
                Like buttons behave like Twitter buttons. Users can only like
                once and a subsequent call from the same user will remove the
                user's like.
              </p>
              <p>Use the data-lyket-type="like" to create a like button.</p>
              <Code>
                {`<!-- minimal settings -->
<div data-lyket-type="like" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="like"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="like"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
  data-lyket-template="twitter"
></div>`}
              </Code>
              <h3>Clap button</h3>
              <p>
                Clap buttons behave like Medium applauses. Users can like
                multiple times and every other call from the same user will
                increment the claps number.
              </p>
              <p>Use the data-lyket-type="clap" to create a clap button.</p>
              <Code>
                {`<!-- minimal settings -->
<div data-lyket-type="clap" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
  data-lyket-template="medium"
></div>`}
              </Code>
              <h3>Up/down button</h3>
              <p>
                Up/down buttons behave like Reddit buttons. Users can only vote
                or unvote once and a subsequent call from the same user will
                remove the user's vote or unvote.
              </p>
              <p>Use the data-lyket-type="updown" to create a updown button.</p>
              <Code>
                {`<!-- minimal settings -->
<div data-lyket-type="clap" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-first-post"
  data-lyket-namespace="blog"
  data-lyket-template="reddit"
></div>`}
              </Code>
              <h2 id="styling-the-buttons">Styling the buttons</h2>
              <p>
                You can change the default colors by providing your own color
                scheme. The color scheme does not apply on buttons with
                non-default templates.
              </p>
              <ul>
                <li>
                  <strong>data-lyket-color-primary</strong> - Changes the color
                  of the "like" button, when user has liked.
                </li>
                <li>
                  <strong>data-lyket-color-secondary</strong> - Changes the
                  color of the "dislike" button, when user has disliked.
                </li>
                <li>
                  <strong>data-lyket-color-background</strong> - Changes the
                  background color of the inactive button.
                </li>
                <li>
                  <strong>data-lyket-color-text</strong> - Changes the counter's
                  text and the inactive icon's color.
                </li>
                <li>
                  <strong>data-lyket-color-highligh</strong> - Changes the
                  animation's color.
                </li>
              </ul>
              <p>Here is an example for an Updown button</p>
              <Code>
                {`<!-- button with color scheme -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
  data-lyket-color-primary="#e095ed"
  data-lyket-color-secondary="blue"
  data-lyket-color-background="#333"
  data-lyket-color-text="green"
  data-lyket-color-highligh="#ff00c3"
></div>
`}
              </Code>
              <h2>Button Templates</h2>
              <p>
                Browse our{" "}
                <Link href="/templates">
                  <a>templates gallery</a>
                </Link>{" "}
                to choose your favourite template!
              </p>
              <p>
                Do you have an idea for the perfect clap or like button?{" "}
                <a href="mailto:write@lyket.dev">Write to us</a> explaining your
                idea or make a pull request to our open-source{" "}
                <a
                  href="https://github.com/lyket-dev/lyket/tree/master/packages/react"
                  target="_blank"
                >
                  Github repository
                </a>{" "}
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
