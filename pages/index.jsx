import React, { useState } from "react";
import Decorator from "components/Decorator";
import HomeSandbox from "components/HomeSandbox";
import Ranking from "components/Ranking";
import Link from "next/link";
import dynamic from "next/dynamic";
import Bolt from "public/icons/outline/lightning-bolt.svg";
import Shield from "public/icons/outline/shield-check.svg";
import Lock from "public/icons/outline/lock-closed.svg";
import Price from "public/icons/outline/currency-dollar.svg";
import Tag from "public/icons/outline/tag.svg";
import Trending from "public/icons/outline/trending-up.svg";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

export default function Home() {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <div>
            <h1 className="header__title">
              <Decorator
                fulltext="Start getting feedback now!"
                toDecorate="feedback"
                color="blue"
              />
            </h1>
          </div>
          <div>
            <p className="header__subtitle">
              Get <strong>immediate, no filter feedbacks</strong> with our{" "}
              <strong>like buttons</strong> to know exactly how to delight your
              customers and followers!
            </p>
            <div className="section--center">
              <a
                className="button--big button--center"
                href={`${process.env.appBaseUrl}/signup`}
              >
                Register for free
              </a>
            </div>
            <div className="check">
              <p className="check__text">1 minute setup</p>
              <p className="check__text">Free plan</p>
              <p className="check__text">No credit card needed</p>
            </div>
          </div>
          {false && (
            <a
              href="https://www.producthunt.com/posts/lyket?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-lyket"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                style={{ width: "200px" }}
                src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=249624&theme=light"
                alt="Lyket - Engage your audience with fresh out of the box like buttons | Product Hunt Embed"
                width="250"
                height="54"
              />
            </a>
          )}
        </div>
      </section>
      <section className="section--gradient">
        <div className="section__container">
          <h3 className="section__title">
            <Decorator
              fulltext="Easier done than said!"
              toDecorate="done than said!"
              color="yellow"
            />
            <p className="section__subtitle">
              Choose a button, then copy & paste the code to see how easy it is
            </p>
          </h3>
          <HomeSandbox />
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h3 className="section__title">
            <Decorator
              fulltext="We can help you get the feedback you need!"
              toDecorate="feedback you need!"
              color="yellow"
            />
          </h3>
          <div className="half">
            <div className="half__left half__shadow">
              <h2 className="half__kicker">For your e-commerce</h2>
              <p className="half__title ">What are you best products?</p>
              <p className="half__text">
                Know immediately which are the{" "}
                <strong>most wanted products in your catalog</strong> by letting
                your users leave a like!
              </p>
            </div>
            <div className="half__right">
              <div className="half__reaction">
                <div className="half__image__container">
                  <img className="half__arrow" src="/assets/arrow-down.png" />
                  <img
                    src="/assets/like-button-ecommerce.jpg"
                    alt="like-button-ecommerce"
                    title="like-button-ecommerce"
                  />
                </div>
                <LikeButton
                  id="portfolio"
                  namespace="homepage"
                  component={LikeButton.templates.Twitter}
                />
              </div>
            </div>
            <div className="half__line--green" />
          </div>

          <div className="half">
            <div className="half__line--pink" />
            <div className="half__left">
              <div className="half__reaction">
                <div className="half__image__container">
                  <img className="half__arrow" src="/assets/arrow-down.png" />
                  <img
                    src="/assets/like-buttons-blog.jpg"
                    alt="like-button-blog"
                    title="like-button-blog"
                  />
                </div>
                <ClapButton
                  id="blog"
                  namespace="homepage"
                  component={ClapButton.templates.Medium}
                />
              </div>
            </div>
            <div className="half__right half__shadow">
              <h2 className="half__kicker">For bloggers</h2>
              <p className="half__title">
                What articles your readers love the most?
              </p>
              <p className="half__text">
                Comments can lead to useless polemics, while a{" "}
                <strong>simple like button</strong> can make your blog feel
                alive!
              </p>
            </div>
          </div>
          <div className="half">
            <div className="half__left half__shadow">
              <h2 className="half__kicker">For developers</h2>
              <p className="half__title">User feedback at your fingertips</p>
              <div className="half__text">
                Quickly implement buttons thanks to our{" "}
                <strong>
                  <Link href="/docs/react" title="react-like-button">
                    out-of-the-box integrations
                  </Link>
                </strong>{" "}
                and fetch your buttons data thanks to our{" "}
                <strong>
                  <Link href="/docs/api" title="like-button-api">
                    rocket fast API
                  </Link>
                </strong>
                !
              </div>
            </div>
            <div className="half__right">
              <div className="half__reaction">
                <div className="half__image__container">
                  <img className="half__arrow" src="/assets/arrow-down.png" />
                  <img
                    src="/assets/like-buttons-docs.jpg"
                    alt="like-button-docs"
                    title="like-button-docs"
                  />
                </div>
                <UpdownButton id="docs" namespace="homepage" />
              </div>
            </div>
            <div className="half__line--yellow" />
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h3 className="section__title">
            <Decorator
              fulltext="Give me the most voted buttons!"
              toDecorate="most voted"
              color="blue"
            />
            <p className="section__subtitle">
              Lyket is not only in charge of counting votes. It also{" "}
              <strong>keeps updated rankings for all of your buttons</strong>!
              Vote your favourite old school console in this example to see
              ranking in action!
            </p>
          </h3>
          <Ranking />
        </div>
      </section>
      {false && (
        <section className="section--primary">
          <div className="section__container">
            <h2 className="section__title">
              <Decorator
                fulltext="No-brainer"
                toDecorate="No-brainer"
                color="yellow"
              />
            </h2>

            <div className="ternary">
              <div className="ternary__item--dyn">
                <h6 className="ternary__title">The API</h6>
                <p className="shbox">
                  Lyket's <strong>simple API</strong> tracks all reactions. You
                  can use a private API key to make requests from your server or
                  the public one to make requests from the client
                </p>
                <Link href="docs/api">
                  <a className="button--small">Read the docs</a>
                </Link>
              </div>
              <div className="ternary__item--dyn">
                <h6 className="ternary__title">The widget</h6>
                <p className="shbox">
                  The jack-of-all-trades, Lyket's embedded version works with
                  all website builders that support custom HTML embedding -
                  Wordpress, Wix, Webflow and more!
                </p>
                <Link href="docs/html">
                  <a className="button--small">Read the docs</a>
                </Link>
              </div>
              <div className="ternary__item--dyn">
                <h6 className="ternary__title">The React library</h6>
                <p className="shbox">
                  The <strong>React/JS client</strong>works with all React based
                  frameworks and SSGs - like Gatsby, NextJS, React Native - See
                </p>
                <Link href="docs/react">
                  <a className="button--small">Read the docs</a>
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
      <section className="section--primary">
        <div className="section__container">
          <h2 className="section__title">
            <Decorator
              fulltext="What makes us different?"
              toDecorate="different"
              color="red"
            />
            <p className="section__subtitle">
              More and more customers are trusting us ♥
            </p>
          </h2>
          <div className="stripes">
            <div className="stripe__item">
              <div className="stripe__left">
                <Bolt className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Fastest implementation</h6>
                <p className="stripe__text">
                  By using our{" "}
                  <Link href="/docs/react">
                    <a>React component</a>
                  </Link>{" "}
                  or our{" "}
                  <Link href="/docs/html">
                    <a>HTML widget</a>
                  </Link>{" "}
                  , you just need to choose a style, provide an identifier for
                  your button and <strong>you are done!</strong>
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Lock className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Privacy oriented</h6>
                <p className="stripe__text">
                  Most feedback services require visitors to sign up and that
                  can <strong>discourage interaction</strong> +{" "}
                  <strong>is bad for privacy concerns</strong>.{" "}
                  <Link href="/blog/posts/stop-using-facebook-like-button">
                    <a>Read more</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Trending className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Ranking API</h6>
                <p className="stripe__text">
                  In addition to our score keeping system, we provide{" "}
                  <strong>updated and detailed rankings</strong> for all of your
                  buttons.{" "}
                  <Link href="/docs/api#ranking-api">
                    <a>Read more</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Tag className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Nice, functional and tidy</h6>
                <p className="stripe__text">
                  When you have hundreds of buttons, it is hard keeping your
                  data in order. That is why we prioritize categorization! Each
                  button can have one broad{" "}
                  <strong>category, and multiple tags</strong>.{" "}
                  <Link href="/docs/api#categorization">
                    <a>Read more</a>
                  </Link>
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Shield className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">No bots allowed</h6>
                <p className="stripe__text">
                  Lyket is integrated with <strong>Google reCAPTCHA V3</strong>{" "}
                  to provide protection against malitious use, while never
                  interrupting your users.
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Price className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Simple pricing</h6>
                <p className="stripe__text">
                  We offer a simple pricing that{" "}
                  <strong>scales with your project</strong>, including a free
                  plan for test/hobby projects.{" "}
                  <strong>No credit card needed!</strong>
                </p>
                <Link href="/pricing">
                  <a>Visit our pricing page</a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section--black">
        <div className="section__container">
          <div className="neon">
            <span>APPLAUSE</span>
          </div>
        </div>
      </section>
    </>
  );
}
