import React, { useState } from "react";
import Decorator from "components/Decorator";
import HomeSandbox from "components/HomeSandbox";
import Ranking from "components/Ranking";
import Link from "next/link";
import Bolt from "public/icons/outline/lightning-bolt.svg";
import Shield from "public/icons/outline/shield-check.svg";
import Lock from "public/icons/outline/lock-closed.svg";
import Price from "public/icons/outline/currency-dollar.svg";
import Tag from "public/icons/outline/tag.svg";
import Trending from "public/icons/outline/trending-up.svg";
import GeHC from "public/icons/logos/ge-logo.svg";
import Heat from "public/icons/logos/heat-logo.svg";
import TedX from "public/icons/logos/tedx-logo.svg";
import { ClapButton, LikeButton, RateButton, UpdownButton } from "@lyket/react";

export default function Home() {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <div>
            <h1 className="header__title">
              <Decorator
                fulltext="Start receiving feedback, now!"
                toDecorate="feedback"
                color="blue"
              />
            </h1>
          </div>
          <div>
            <p className="header__subtitle">
              Transform your webpage from a dull wall-of-text into an{" "}
              <strong>engaging experience.</strong>
            </p>
            <div className="section--center">
              <a
                className="button--big button--center"
                href={`${process.env.appBaseUrl}/signup`}
              >
                Try it for free
              </a>
            </div>
            <div className="check">
              <p className="check__text">1 minute setup</p>
              <p className="check__text">Free plan</p>
              <p className="check__text">No credit card needed</p>
            </div>
            <div className="list">
              <TedX className="list__logos" alt="tedx" />
              <Heat className="list__logos" alt="heat-mvmnt" />
              <GeHC className="list__logos" alt="ge-hc" />
            </div>
          </div>
        </div>
      </section>
      <section className="section--gradient">
        <div className="section__container">
          <div className="section__title">
            <h3>
              <Decorator
                fulltext="Easier done than said!"
                toDecorate="done than said!"
                color="yellow"
              />
            </h3>
            <p className="section__subtitle">
              Choose a button, then copy & paste the code to see how easy it is
            </p>
          </div>
          <HomeSandbox selectedTab="like" selectedTech="html" />
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h3 className="section__title">
            <Decorator
              fulltext="We can help you get the feedback you need!"
              toDecorate="feedback you need!"
              color="red"
            />
          </h3>
          <div className="half">
            <div className="half__left half__shadow">
              <h2 className="half__kicker">For your e-commerce</h2>
              <p className="half__title ">What are your best products?</p>
              <p className="half__text">
                Know immediately which are the{" "}
                <strong>most wanted products in your catalog</strong> by letting
                your users leave a like, while{" "}
                <Link href="/blog/posts/stop-using-facebook-like-button">
                  respecting their privacy
                </Link>
                ! Learn now how to{" "}
                <Link href="/blog/posts/react-like-button">
                  add a like button
                </Link>{" "}
                to your website.
              </p>
            </div>
            <div className="half__right">
              <div className="half__reaction">
                <div className="half__image__container">
                  <img
                    className="half__arrow"
                    alt=""
                    src="/assets/arrow-down.png"
                  />
                  <img
                    src="/assets/like-button-ecommerce.png"
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
                  <img
                    className="half__arrow"
                    alt="arrow"
                    src="/assets/arrow-down.png"
                  />
                  <img
                    src="/assets/like-button-blog.png"
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
              <p className="half__title">Does your blog feel static?</p>
              <p className="half__text">
                Without interactivity, your blog may risk feeling like a
                monotonous wall-of-text. A <strong>simple like button</strong>{" "}
                can make your blog feel alive!{" "}
                <Link href="/blog/posts/medium-clap-button">Read more.</Link>
              </p>
            </div>
          </div>

          <div className="half">
            <div className="half__left half__shadow">
              <h2 className="half__kicker">For developers</h2>
              <p className="half__title">User feedback at your fingertips</p>
              <div className="half__text">
                Quickly implement buttons thanks to our out-of-the-box{" "}
                <Link href="/docs/react" title="react-like-button">
                  React
                </Link>{" "}
                or{" "}
                <Link href="/docs/html" title="react-like-button">
                  HTML
                </Link>{" "}
                integrations, and fetch your data thanks to our{" "}
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
                  <img
                    className="half__arrow"
                    alt="arrow"
                    src="/assets/arrow-down.png"
                  />
                  <img
                    src="/assets/like-buttons-api.png"
                    alt="like-button-api"
                    title="like-button-api"
                  />
                </div>
                <UpdownButton id="docs" namespace="homepage" />
              </div>
            </div>
            <div className="half__line--yellow" />
          </div>

          <div className="half">
            <div className="half__line--pink" />
            <div className="half__left">
              <div className="half__reaction">
                <div className="half__image__container">
                  <img
                    className="half__arrow"
                    alt="arrow"
                    src="/assets/arrow-down.png"
                  />
                  <img
                    src="/assets/rating-component-react.png"
                    alt="rating-component-react"
                    title="rating-component-react"
                  />
                </div>
                <div className="text__left half__text">
                  <p className="space--bottom-1">Leave your review!</p>
                  <div className="half__rate space--bottom-2">
                    <RateButton
                      id="blog"
                      namespace="homepage"
                      showRating="user"
                    />
                  </div>
                  <p className="space--bottom-1">The results</p>
                  <div className="half__rate">
                    <RateButton
                      id="blog"
                      namespace="homepage"
                      showRating="average"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="half__right half__shadow">
              <h2 className="half__kicker">For community builders</h2>
              <p className="half__title">
                Which of your services is the most appreciated?
              </p>
              <p className="half__text">
                If you are offering a service, or content in general, it is
                paramount to know, and to let other know,{" "}
                <strong>what the community thinks</strong> about it!{" "}
                <Link href="/docs/react/rating-component-react">Read how.</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="section__title">
            <h3>
              <Decorator
                fulltext="Can I sort my content using likes?"
                toDecorate="sort my content"
                color="blue"
              />
            </h3>
            <p className="section__subtitle">
              Lyket is not only in charge of counting votes. It also{" "}
              <strong>keeps updated rankings for all of your buttons</strong>!
              Vote your favourite old school console in this example to see
              ranking in action!
            </p>
          </div>
          <Ranking />
        </div>
      </section>
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
                  By using our <Link href="/docs/react">React component</Link>{" "}
                  or our{" "}
                  <Link href="/docs/html" title="Like button HTML">
                    HTML widget
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
                    Read more
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
                  buttons. <Link href="/docs/api#ranking-api">Read more</Link>
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
                  <Link href="/docs/api#categorization">Read more</Link>
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
                <Link href="/pricing">Visit our pricing page</Link>
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
