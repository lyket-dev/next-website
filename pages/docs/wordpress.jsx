import React from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import Code from "components/Code";
import Link from "next/link";
import Head from "next/head";
import { LikeButton, ClapButton, UpdownButton, Provider } from "@lyket/react";

export default function Docs() {
  return (
    <>
      <Head>
        <title>Lyket Wordpress like button plugin</title>
        <meta
          content="Create beautiful Wordpress like button with Lyket plugin!"
          name="description"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <div className="docs__title__container">
            <h2 className="page__kicker">Wordpress like button plugin</h2>
            <h1 className="docs__title">
              Create beautiful buttons with Lyket Wordpress like button plugin
            </h1>
            <QuickDocsMenu />
          </div>
          <div className="docs">
            <div className="markdown">
              <p>
                <strong>Lyket Wordpress like button plugin</strong> lets you
                create beautiful like buttons in your <strong>Wordpress</strong>{" "}
                website!
              </p>
              <h4 id="how-buttons-work">How the buttons work</h4>
              <p>
                All Lyket buttons share these{" "}
                <strong>basic behaviors and features:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    The plugin will create a button for all your pages and
                    posts.
                  </p>
                </li>
                <li>
                  <p>
                    Notice that{" "}
                    <strong>
                      the server will create a new button for every different
                      and unique identifier
                    </strong>
                    , so if you change ID or namespace or type the new button
                    won’t inherit the votes.
                  </p>
                </li>
                <li>
                  <p>
                    Every time a visitor interacts with a button, the button
                    counter will update and{" "}
                    <strong>Lyket will flag that the visitor has voted</strong>.
                    Lyket uses an unique random ID stored in the visitor's
                    browser localStorage to identify the visitor, with no need
                    to signup or to use any third party service. To disable the
                    session ID, and therefore use only the IP address to
                    identify a user, set the disableSessionId prop to{" "}
                    <em>true</em> in the Provider component.
                  </p>
                </li>
                <li>
                  <p>
                    Lyket enforces a{" "}
                    <strong>maximum number of sessions IDs per IP</strong>
                    address to avoid receiving too many requests or DDoS
                    attacks. The default is 3 sessions per IP. You can change
                    this number by logging into your private area and edit the
                    user settings.
                  </p>
                </li>
                <li>
                  <p>
                    In the user settings you can also specify{" "}
                    <strong>
                      from which domains Lyket should accept requests
                    </strong>{" "}
                    using your personal API key. If left empty Lyket will accept
                    requests coming from all domains.
                  </p>
                </li>
              </ul>
              <h4 id="installation">Installation</h4>
              <p>
                Implementing Lyket is quite simple, but you have to have a basic
                knowledge of HTML to do that. In your HTML or your site builder
                (Wordpress, Webflow or else){" "}
                <strong>
                  add the script you find below in the &lt;footer&gt; or in the
                  &lt;header&gt;
                </strong>
                , then start creating buttons just by{" "}
                <strong>
                  adding a &lt;div&gt; element with a data-lyket-type and
                  data-lyket-id
                </strong>{" "}
                anywhere in your code. Use custom HTML to do that with a site
                builder.
              </p>
              <p>
                <strong>Important</strong>: Lyket needs to verify your identity
                when creating and storing button counters. To do that it
                requires that you provide in the top-level script an unique
                alpha-numeric value, <strong>the API key</strong>, that you can
                get <a href="https://app.lyket.dev">by registering to Lyket</a>.
              </p>
              <p>
                Replace "[YOUR-API-KEY]" in the code with your personal key.
              </p>
              <Code>
                &lt;script
                src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]"&gt;&lt;/script&gt;
              </Code>

              <h6>Optional parameters</h6>
              <p>You can provide additional parameters to the script:</p>
              <ul>
                <li>
                  <p>
                    <strong>recaptchaSiteKey: string</strong> - If you enabled
                    reCAPTCHA in the private area's user settings, you will need
                    to insert your reCAPTCHA public key in Lyket script,
                    otherwise your buttons will result as unauthorized. Read
                    more in the <Link href="#recaptcha">reCAPTCHA</Link> section
                    at the end of this document.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>disableSessionId</strong> - If added to script{" "}
                    <strong>Lyket won't store a unique session ID</strong> for
                    your visitors making them anonymous. Lyket will then
                    discriminate visitors (to tell if they already liked a
                    button or not) only based on the IP address. Disabling the
                    session ID can be useful if you don't want Lyket to result
                    in your cookie detection software.
                  </p>
                  <Code>
                    {`<script
  src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]&disableSessionId"
>
</script>`}
                  </Code>
                </li>
              </ul>
              <h4 id="buttons">Buttons</h4>
              <p>
                There are three different button types that have different
                behaviours.
              </p>
              <h5>Like button</h5>
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
  data-lyket-id="my-second-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="like"
  data-lyket-id="my-third-post"
  data-lyket-namespace="blog"
  data-lyket-template="twitter"
></div>`}
              </Code>
              <div className="flex big">
                <div className="try">Try it! →</div>
                <LikeButton namespace="docs" id="widget-like-button" />
              </div>
              <h6 id="like-templates">Like button Templates</h6>
              <ul>
                <li>
                  <strong>Simple (default)</strong> - supports custom theme
                </li>
                <li>
                  <strong>Twitter</strong>: Twitter style
                </li>
                <li>
                  <strong>Chevron</strong>: Chevron style - supports custom
                  theme
                </li>
              </ul>
              <h5 id="updown-button">Like/dislike button</h5>
              <p>
                Like/dislike buttons, or Updown buttons, behave like Reddit
                buttons. Visitors can only like or dislike once and a subsequent
                call from the same visitor will remove the visitor's vote or
                unvote.
              </p>
              <p>Use the data-lyket-type="updown" to create a updown button.</p>
              <Code>
                {`<!-- minimal settings -->
<div data-lyket-type="updown" data-lyket-id="my-first-post"></div>

<!-- with namespace -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-second-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-third-post"
  data-lyket-namespace="blog"
  data-lyket-template="reddit"
></div>`}
              </Code>
              <div className="flex big">
                <div className="try">Try it! →</div>
                <UpdownButton namespace="docs" id="widget-updown-button" />
              </div>
              <h6 id="updown-templates">UpdownButton Templates</h6>
              <ul>
                <li>
                  <strong>Simple (default)</strong> - supports custom theme
                </li>
                <li>
                  <strong>Reddit</strong>: Reddit style
                </li>
                <li>
                  <strong>Chevron</strong>: Chevron style - supports custom
                  theme
                </li>
              </ul>

              <h5 id="clap-button">Clap button</h5>
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
  data-lyket-id="my-second-post"
  data-lyket-namespace="blog"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="clap"
  data-lyket-id="my-third-post"
  data-lyket-namespace="blog"
  data-lyket-template="medium"
></div>`}
              </Code>
              <div className="flex big">
                <div className="try">Try it! →</div>
                <ClapButton namespace="docs" id="widget-clap-button" />
              </div>
              <h6 id="clap-templates">ClapButton Templates</h6>
              <ul>
                <li>
                  <strong>Simple (default)</strong> - supports custom theme
                </li>
                <li>
                  <strong>Medium</strong>: Medium style
                </li>
                <li>
                  <strong>Heart</strong>: Heart style - supports custom theme
                </li>
              </ul>
              <h4 id="styling-the-buttons">Styling the buttons</h4>
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
                  text color.
                </li>
                <li>
                  <strong>data-lyket-color-icon</strong> - Changes the icon's
                  color.
                </li>
                <li>
                  <strong>data-lyket-color-highlight</strong> - Changes the
                  animation's color.
                </li>
              </ul>
              <p>Here is an example for an Updown button</p>
              <Code>
                {`<!-- button with color scheme -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
  data-lyket-color-primary="#b8fff3"
  data-lyket-color-secondary="rgba(220, 234, 108, 0.6)"
  data-lyket-color-background="rgba(255, 224, 138, 0.4)"
  data-lyket-color-text="black"
  data-lyket-color-icon="violet"
  data-lyket-color-highlight="#ff00c3"
></div>
`}
              </Code>
              <div className="flex big">
                <div className="try">Try it! →</div>
                <Provider
                  apiKey="Xkp5R0w+6uY+OftTTVEQ2BkiwUw="
                  theme={{
                    colors: {
                      primary: "#b8fff3",
                      secondary: "rgba(220, 234, 108, 0.6)",
                      background: "rgba(255, 224, 138, 0.4)",
                      text: "black",
                      icon: "violet",
                      highlight: "#ff00c3"
                    }
                  }}
                >
                  <UpdownButton namespace="docs" id="widget-like-colors" />
                </Provider>
              </div>
              <h4>Other props</h4>
              <ul>
                <li>
                  <p>
                    <strong>data-lyket-show-counter-from</strong>:{" "}
                    <strong>string</strong> - Number of likes required to show
                    the counter.
                  </p>
                </li>
              </ul>
              <Code>
                {`<!-- button with hidden counter -->
<div
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
  data-lyket-show-counter-from="4"
></div>
`}
              </Code>
              <h4>Button Templates</h4>
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
              <h4 id="recaptcha">reCAPTCHA</h4>
              <p>
                Lyket is integrated with Google reCAPTCHA V3 to handle malicious
                use without interrupting <em>human</em> users. To enable it you
                need to provide your Google reCAPTCHA secret key in the user
                settings in the private area and add your recaptcha site key
                through the recaptchaSiteKey prop in the Provider. The key will
                be encrypted.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
