import React from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import Link from "next/link";

export default function Docs() {
  return (
    <div className="page">
      <section className="page__section">
        <QuickDocsMenu />
      </section>
      <section className="page__section">
        <h1 className="page__title">Widget docs</h1>
        <div class="docs">
          <div class="markdown">
            <h1>Lyket Widget</h1>
            <p>
              A simple script that lets you embed Lyket in your
              html/Wordpress/Webflow/Notion website and more!
            </p>
            <p>We have more detailed guides for:</p>
            <ul>
              <li>
                <Link href="/blog/posts/embed-like-button-to-notion">
                  <a>Notion</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/like-clap-button-on-worpress">
                  <a>Wordpress</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/blogger-like-button">
                  <a>Blogger</a>
                </Link>
              </li>
            </ul>
            <h2>Installation</h2>
            <p>
              In your HTML file or widget add the script top-level passing your
              Lyket API key as argument, then just add an element with a
              data-lyket-type anywhere in your code to create buttons.
            </p>
            <pre>
              <code class="language-html">
                &lt;script
                src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]"&gt;&lt;/script&gt;
              </code>
            </pre>
            <h2>Buttons</h2>
            <p>
              When you add a Lyket element a GET request is made to retrieve
              info about the button with that certain id and namespace. If no
              button is found, a new resource is created with the id/namespace
              identifier.
            </p>
            <p>
              Notice that the server will create a new resource for every
              different and unique identifier, so if you change id or namespace
              the new button won’t inherit the votes.
            </p>
            <p>
              Every time a user clicks on a button, the template will update the
              likes counter and flag that the user has already voted. There is
              no need of signup or third party service.
            </p>
            <p>
              There are three different button types that have different
              behaviours.
            </p>
            <h3>Like button</h3>
            <p>
              Like buttons behave like Twitter buttons. Users can only like once
              and a subsequent call from the same user will remove the user's
              like.
            </p>
            <p>Use the data-lyket-type="like" to create a like button.</p>
            <pre>
              <code class="language-html">
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
              </code>
            </pre>
            <h3>Clap button</h3>
            <p>
              Clap buttons behave like Medium applauses. Users can like multiple
              times and every other call from the same user will increment the
              claps number.
            </p>
            <p>Use the data-lyket-type="clap" to create a clap button.</p>
            <pre>
              <code class="language-html">
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
              </code>
            </pre>
            <h3>Up/down button</h3>
            <p>
              Up/down buttons behave like Reddit buttons. Users can only vote or
              unvote once and a subsequent call from the same user will remove
              the user's vote or unvote.
            </p>
            <p>Use the data-lyket-type="updown" to create a updown button.</p>
            <pre>
              <code class="language-html">
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
              </code>
            </pre>
            <h2>Button Templates</h2>
            <p>
              Browse our{" "}
              <Link href="/docs/widget">
                <a>templates gallery</a>
              </Link>{" "}
              to choose your favourite template!
            </p>
            <p>
              Do you have an idea for the perfect clap or like button?{" "}
              <a href="mailto:write@lyket.dev">Write to us</a> explaining your
              idea or make a pull request to our open-source{" "}
              <a href="https://github.com/lyket-dev/react" target="_blank">
                Github repository
              </a>{" "}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
