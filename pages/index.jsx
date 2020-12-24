import React, { useState } from "react";
import Decorator from "components/Decorator";
import HomeSandbox from "components/HomeSandbox";
import Link from "next/link";
import dynamic from "next/dynamic";
import Bolt from "public/icons/outline/lightning-bolt.svg";
import Shield from "public/icons/outline/shield-check.svg";
import Lock from "public/icons/outline/lock-closed.svg";
import Price from "public/icons/outline/currency-dollar.svg";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

export default function Home() {
  return (
    <>
      <section className="header">
        <div className="header__container">
          <div>
            <h2 className="header__title">
              <Decorator
                fulltext="Start getting feedback now!"
                toDecorate="feedback"
                color="blue"
              />
            </h2>
          </div>
          <div>
            <p className="header__subtitle">
              Engage your audience with fresh out-of-the-box{" "}
              <strong>clap and like buttons</strong>. With Lyket it's just a
              matter of seconds!
            </p>
            <div className="section--center">
              <a
                className="button button--center"
                href={`${process.env.appBaseUrl}/signup`}
              >
                Register for free
              </a>
            </div>
            <div className="check">
              <p className="check__text">1 minute setup</p>
              <p className="check__text">Free forever plan</p>
              <p className="check__text">No trial</p>
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
              fulltext="Bring your content to life!"
              toDecorate="to life!"
              color="yellow"
            />
          </h3>
          <div className="half">
            <div className="half__left half__shadow">
              <p className="half__title">
                Are your readers enjoying the latest blog post?
              </p>
              <p className="half__text">
                Comments can lead to useless polemics, while a{" "}
                <strong>simple clap button</strong> can make your blog feel
                alive!
              </p>
            </div>
            <div className="half__right">
              <div className="half__reaction">
                <ClapButton
                  id="blog"
                  namespace="homepage"
                  component={ClapButton.templates.Medium}
                />
              </div>
            </div>
            <div className="half__line--green">—</div>
          </div>
          <div className="half">
            <div className="half__line--pink">—</div>
            <div className="half__left">
              <div className="half__reaction">
                <UpdownButton id="docs" namespace="homepage" />
              </div>
            </div>
            <div className="half__right half__shadow">
              <p className="half__title">
                Are your users happy with the new documentation?
              </p>
              <p className="half__text">
                When providing a service you need more than just positive
                reinforcement, <strong>critics can be even more crucial</strong>
                !
              </p>
            </div>
          </div>
          <div className="half">
            <div className="half__left half__shadow">
              <p className="half__title ">
                Your portfolio could use some lovin'?
              </p>
              <p className="half__text">
                All social-networks alike are windows to{" "}
                <strong>expose your work</strong>. Your website should{" "}
                <strong>behave in the same way!</strong>
              </p>
            </div>
            <div className="half__right">
              <div className="half__reaction">
                <LikeButton
                  id="portfolio"
                  namespace="homepage"
                  component={LikeButton.templates.Twitter}
                />
              </div>
            </div>
            <div className="half__line--yellow">—</div>
          </div>
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
                <Link href="docs/widget">
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
                <Lock className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Privacy oriented</h6>
                <p className="stripe__text">
                  Most feedback services require visitors to sign up and that
                  can <strong>discourage interaction</strong> +{" "}
                  <strong>is bad for privacy concerns</strong>.
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Bolt className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Fastest implementation</h6>
                <p className="stripe__text">
                  By using our React component or widget you just need to choose
                  a style, provide an identifier for your button and{" "}
                  <strong>you are done!</strong>
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
                  forever plan for small/hobby websites.
                </p>
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
