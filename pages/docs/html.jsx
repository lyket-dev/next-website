import React from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import Code from "components/Code";
import Link from "next/link";
import Head from "next/head";
import { LikeButton, ClapButton, UpdownButton, RateButton } from "@lyket/react";
import Anchor from "components/Anchor";

export default function Docs() {
  return (
    <>
      <Head>
        <title>Like button HTML | Lyket</title>
        <meta
          content="Instantly add like, clap and like/dislike buttons on any web project with our super simple like button HTML widget!"
          name="description"
        />
        <meta name="keywords" content="like button HTML, HTML like button" />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <div className="docs__title__container">
            <h1 className="page__kicker">Like button HTML</h1>
            <h2 className="docs__title">HTML widget docs</h2>
            <div className="docs__menu__container">
              <QuickDocsMenu />
            </div>
          </div>
          <div className="docs">
            <div className="markdown">
              <p>
                Lyket can be easily embedded on any website or app by using a
                simple HTML + Javascript snippet.
              </p>
              <p>
                Just by adding a few lines of code you will see beautiful like,
                clap or like/dislike buttons! Something like this:
              </p>
              <div className="half__reaction space--bottom-4">
                <UpdownButton namespace="docs" id="widget-main" />
              </div>
              <p>
                This is very powerful because it works, not only in a{" "}
                <strong>HTML website</strong>, but also on any platform or
                framework that supports custom HTML/Javascript injections, like{" "}
                <strong>Wordpress, Webflow, Notion</strong> and more!
              </p>
              <p>We have more framework-specific guides for:</p>
              <ul>
                <li>
                  <Link
                    href="/blog/posts/embed-like-button-to-notion"
                    title="How to add HTML like buttons to Notion"
                  >
                    How to add HTML like buttons to Notion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs/wordpress"
                    title="Wordpress like button plugin"
                  >
                    Wordpress like button plugin
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/posts/wordpress-like-button"
                    title="How to add HTML like buttons to Wordpress"
                  >
                    How to add HTML like buttons to Wordpress
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog/posts/blogger-like-button"
                    title="How to add HTML like buttons to Blogger"
                  >
                    How to add HTML like buttons to Blogger
                  </Link>
                </li>
              </ul>
              <Anchor
                slug="how-buttons-work"
                keyword="How the like buttons work in HTML"
              >
                <h2>How the like buttons work in HTML</h2>
              </Anchor>
              <p>
                First, an introduction on what happens when you add the
                Javascript snippet and the HTML tag containing the like button's
                attributes, and how you can get the best out of Lyket. If you
                prefer to see a few examples on how to integrate our HTML like
                buttons in your website, simply scroll down.
              </p>
              <p>
                All Lyket like buttons share these{" "}
                <strong>basic behaviors and features:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    As soon as your page is loaded, a request is made to
                    retrieve info on the button that{" "}
                    <strong>
                      identifies with the combination of the "data-lyket-id",
                      "data-lyket-namespace" and "data-lyket-type"
                    </strong>{" "}
                    that you provided.{" "}
                    <strong>
                      If no button is found, a new one will be created
                    </strong>{" "}
                    using that type/namespace/ID identifier.
                  </p>
                </li>
                <li>
                  <p>
                    Every time a user interacts with your button, the button
                    counter will update and{" "}
                    <strong>Lyket will flag that that user has voted</strong>.
                    To do that, Lyket uses a unique random ID associated with
                    the user's browser. This makes possible to recognise a user
                    with no need to signup or to use any third party service. To
                    disable the session ID, and therefore use only the IP
                    address to identify a user, set the disableSessionId prop to{" "}
                    <em>true</em> in the Provider component.
                  </p>
                </li>
                <li>
                  <p>
                    Lyket enforces a{" "}
                    <strong>
                      maximum number of browser sessions IDs per IP address
                    </strong>
                    , to avoid receiving too many requests or DDoS attacks. The
                    default is 3 sessions per IP. You can change this number by
                    logging into your private area and edit the user settings.
                  </p>
                </li>
                <li>
                  <p>
                    In the user settings you can also specify{" "}
                    <strong>
                      from which domains Lyket should accept requests
                    </strong>{" "}
                    using your personal public API key. If left empty Lyket will
                    accept requests coming from all domains.
                  </p>
                </li>
              </ul>
              <Anchor slug="installation" keyword="Install like button HTML">
                <h4>
                  How to add like buttons to your HTML site or website builder
                </h4>
              </Anchor>
              <p>
                Adding Lyket like buttons is really simple, but you have to have
                a basic knowledge of HTML to do that. In your{" "}
                <strong>HTML or your site builder</strong> (Wordpress, Webflow
                or else) add the script you find below in the &lt;footer&gt; or
                in the &lt;header&gt;, then start creating buttons just by{" "}
                <strong>
                  adding a &lt;div&gt; element with a data-lyket-type and
                  data-lyket-id
                </strong>
                .
              </p>
              <p>
                If you are using a site builder, look on the documentation for{" "}
                <strong>how to add a custom HTML block</strong> and use the same
                HTML code to create a button.
              </p>
              <p>
                <strong>Important</strong>: Lyket needs to verify your identity
                when creating and storing button counters. To do that it
                requires that you provide in a top-level script an unique
                alpha-numeric value, <strong>the public API key</strong>, that
                you can get{" "}
                <a href="https://app.lyket.dev/signup">
                  by registering to Lyket
                </a>
                .
              </p>
              <p>
                Replace "[YOUR-API-KEY]" in the code with your personal public
                API key.
              </p>
              <Code language="html">
                &lt;script
                src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]"&gt;&lt;/script&gt;
              </Code>

              <h6>Optional parameters</h6>
              <p>You can provide additional parameters to the script:</p>
              <ul>
                <li>
                  <p>
                    <strong>disableSessionId</strong> - If added to the script,{" "}
                    <strong>
                      Lyket WON'T store a unique browser session ID
                    </strong>{" "}
                    for your visitors making them anonymous. Lyket will then
                    discriminate visitors (to tell if they already liked a
                    button or not) only based on the IP address. Disabling the
                    session ID can be useful if you don't want Lyket to result
                    in your cookie detection software.
                  </p>
                  <Code language="html">
                    {`<script
  src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]&disableSessionId"
></script>`}
                  </Code>
                </li>
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
              </ul>
              <Anchor slug="html-buttons" keyword="Like button HTML">
                <h4>All Lyket's HTML like buttons</h4>
              </Anchor>
              <p>
                There are four different button types that have their own
                behaviours and properties. Each one of them can be used in
                <strong>
                  different contexts and to achieve different results
                </strong>
                !
              </p>
              <Anchor slug="html-like-button" keyword="Like button in HTML">
                <h3>Like button HTML</h3>
              </Anchor>
              <p>
                Like buttons behave like <em>Twitter buttons</em>. Users can
                only like once, and a subsequent call from the same user will
                remove the user's like.
              </p>
              <p>
                Use the <em>data-lyket-type="like"</em> to create a like button.
              </p>
              <Code language="html">
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
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <LikeButton namespace="docs" id="widget-like-button" />
              </div>
              <Anchor
                slug="like-templates"
                keyword="Like button HTML Templates"
              >
                <h5>Like button HTML Templates</h5>
              </Anchor>
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
              <Anchor
                slug="html-like-dislike-button"
                keyword="Like dislike button HTML"
              >
                <h3>Like/dislike button HTML</h3>
              </Anchor>
              <p>
                Like/dislike buttons, or Updown buttons, behave like Reddit
                buttons. Visitors can only like or dislike once and a subsequent
                call from the same visitor will remove the visitor's vote or
                unvote.
              </p>
              <p>
                Use the <em>data-lyket-type="updown"</em> to create a
                like/dislike button.
              </p>
              <Code language="html">
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
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <UpdownButton namespace="docs" id="widget-updown-button" />
              </div>
              <Anchor
                slug="updown-templates"
                keyword="Like/dislike buttons HTML"
              >
                <h5>Like/dislike buttons HTML Templates</h5>
              </Anchor>
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

              <Anchor slug="html-clap-button" keyword="Clap button HTML">
                <h3>Clap button HTML</h3>
              </Anchor>
              <p>
                Clap buttons behave like <em>Medium applauses</em>. Users can
                like multiple times and every other interaction from the same
                user will increment the claps number.
              </p>
              <p>
                Use the <em>data-lyket-type="clap"</em> to create a clap button.
              </p>
              <Code language="html">
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
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <ClapButton namespace="docs" id="widget-clap-button" />
              </div>
              <Anchor
                slug="clap-templates"
                keyword="Clap button HTML Templates"
              >
                <h5>Clap button HTML Templates</h5>
              </Anchor>
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

              <Anchor slug="html-star-rating" keyword="star rating HTML">
                <h3>Star rating HTML</h3>
              </Anchor>
              <p>
                Star rating behaves like <em>Tripadvisor ratings</em>. Each user
                can leave one vote. By clicking again on the same button, the
                vote will be removed.
              </p>
              <p>
                Rating components have two interfaces. Given the same button,
                ie. with same id-namespace combination, you may want to show two
                types of information: the average rating for that button, and an
                interface in which the user can click to leave their rating. You
                can select which interface you want to show, with the attribute{" "}
                <code>data-lyket-show-rating</code>
              </p>
              <p>
                Use the <em>data-lyket-type="rate"</em> to create a star rating
                button.
              </p>
              <Code language="html">
                {`<!-- minimal settings -->
<div data-lyket-type="rating" data-lyket-id="my-first-post" data-lyket-show-rating="user"></div>
<div data-lyket-type="rating" data-lyket-id="my-first-post" data-lyket-show-rating="average"></div>

<!-- with namespace -->
<div
  data-lyket-type="rating"
  data-lyket-id="my-second-post"
  data-lyket-namespace="blog"
  data-lyket-show-rating="user"
></div>
<div
  data-lyket-type="rating"
  data-lyket-id="my-second-post"
  data-lyket-namespace="blog"
  data-lyket-show-rating="average"
></div>

<!-- with non-default template -->
<div
  data-lyket-type="rating"
  data-lyket-id="my-third-post"
  data-lyket-namespace="blog"
	data-lyket-show-rating="user"
  data-lyket-template="custom"
></div>
<div
  data-lyket-type="rating"
  data-lyket-id="my-third-post"
  data-lyket-namespace="blog"
	data-lyket-show-rating="average"
  data-lyket-template="custom"
></div>
`}
              </Code>
              <div className="flex-left big">
                <div className="try">Average rating: </div>
                <div>
                  <RateButton
                    namespace="docs"
                    id="widget-rate-button"
                    showRating="average"
                  />
                </div>
              </div>
              <p />
              <div className="flex-left big space--bottom-4">
                <div className="try">Click to rate! →</div>
                <RateButton
                  namespace="docs"
                  id="widget-rate-button"
                  showRating="user"
                />
              </div>
              <Anchor
                slug="rate-templates"
                keyword="Star rating HTML Templates"
              >
                <h5>Star rating HTML Templates</h5>
              </Anchor>
              <ul>
                <li>
                  <strong>Star (default)</strong> - does not support custom
                  theme
                </li>
                <li>
                  <strong>Custom</strong>: Medium style - supports custom theme
                </li>
                <li>
                  <strong>Heart</strong>: Heart style - supports custom theme
                </li>
              </ul>

              <Anchor slug="styling-the-buttons" keyword="Like button HTML">
                <h4>Styling the buttons</h4>
              </Anchor>
              <Anchor slug="colors-and-fonts" keyword="Like button HTML">
                <h6>Change colors and font family</h6>
              </Anchor>
              <p>
                You can <strong>change the default colors</strong> and provide
                favourite color scheme, just by adding a few attributes to your
                HTML element. Be aware that color scheme does not apply to every
                template, so be sure to select your template accordingly!
              </p>
              <p>Attributes to change the template colors:</p>
              <ul>
                <li>
                  <strong>data-lyket-color-primary</strong> - Changes the color
                  of the button, when user has clicked on it.
                </li>
                <li>
                  <strong>data-lyket-color-secondary</strong> - Changes the
                  color of the downvote button, when user has clicked on it.
                </li>
                <li>
                  <strong>data-lyket-color-background</strong> - Changes the
                  background color of the inactive button (the user still hasn't
                  clicked on it).
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
                <li>
                  <strong>data-lyket-font-family</strong> - Changes the font
                  family.
                </li>
              </ul>
              <p>Here is an example for an Updown button:</p>
              <Code language="html">
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
  data-lyket-font-family="monospace"
 />
`}
              </Code>
              <Anchor slug="change-size" keyword="Like button HTML">
                <h6>Change size</h6>
              </Anchor>
              <p>
                You can increase or decrease the size of the button
                proportionally by changing the CSS <em>font-size</em> property.
              </p>
              <p>
                To do that simply add a style property in the containing{" "}
                <em>div</em>, with your desired size.
              </p>
              <Code language="html">
                {`<!-- button with hidden counter -->
<div style="font-size: 12px"
  data-lyket-type="updown"
  data-lyket-id="my-first-post"
 />
`}
              </Code>
              <Anchor slug="other-props" keyword="Like button HTML">
                <h6>Other props</h6>
              </Anchor>
              <ul>
                <li>
                  <p>
                    <strong>data-lyket-show-counter-from</strong>:{" "}
                    <strong>string</strong> - Number of likes required to show
                    the counter.
                  </p>
                </li>
              </ul>
              <Code language="html">
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
                Browse our <Link href="/templates">templates gallery</Link> to
                choose your favourite template!
              </p>
              <p>
                Do you have an idea for the perfect clap or like button?{" "}
                <a href="mailto:lyket.dev@gmail.com">Write to us</a> explaining
                your idea or make a pull request to our open-source{" "}
                <a
                  href="https://github.com/lyket-dev/lyket/tree/master/packages/react"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github repository
                </a>{" "}
              </p>
              <Anchor slug="recaptcha" keyword="Like button HTML">
                <h4>reCAPTCHA</h4>
              </Anchor>
              <p>
                Lyket is integrated with Google reCAPTCHA V3 to handle malicious
                use without interrupting <em>human</em> users. To enable it, you
                need first to insert your Google reCAPTCHA secret key{" "}
                <a href="https://app.lyket.dev/user-settings">
                  in the user settings of your private area
                </a>
                . Then you need to pass the reCAPTCHA site key in the Javascript
                script, like this.
              </p>
              <Code language="html">
                {`<!-- Client-side reCAPTCHA site key -->

<script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]&recaptchaSiteKey=[YOUR-RECAPTCHA-SITE-KEY]"></script>`}
              </Code>
              <p>
                In this way each time a user interacts with a button an
                "invisible" reCAPTCHA check will be performed, keeping your
                website safe.
              </p>
              <p>
                Be aware that if you only set reCAPTCHA secret key in the user
                settings while not providing the site key in your script, the
                buttons won't work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
