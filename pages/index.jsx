import React from "react";
import Decorator from "../components/Decorator";
import Window from "../components/Window";
import Link from "next/link";
import dynamic from "next/dynamic";
import Clap from "../public/svg/clap.svg";
import Like from "../public/svg/like.svg";
import Heart from "../public/svg/heart.svg";
import ClapIcon from "../public/svg/clapping.svg";
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
            <div className="stripe--center">
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
          <p className="section__title">
            <Decorator fulltext="Just try it!" color="red" />
          </p>
          <div className="flag">
            <div className="flag__left">
              <Window />
            </div>
            <div className="flag__right">
              <ClapButton namespace="homepage" id="everybody-clap-now">
                {({ totalClaps, onClick }) => (
                  <div className="social">
                    <div className="social__container">
                      <button onClick={onClick} className="social__button">
                        <ClapIcon />
                      </button>
                    </div>
                    <span className="social__counter">{totalClaps}</span>
                  </div>
                )}
              </ClapButton>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <p className="section__title">
            <Decorator
              fulltext="Bring your content to life!"
              toDecorate="to life!"
              color="red"
            />
          </p>
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
              <p className="half__title ">
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
                The jack-of-all-trades, Lyket's embedded version works with all
                website builders that support custom HTML embedding - Wordpress,
                Wix, Webflow and more!
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
      <section className="section">
        <div className="section__container">
          <h2 className="section__title">
            <Decorator
              fulltext="  What makes it different?"
              toDecorate="different"
              color="blue"
            />
          </h2>
          <div className="ternary">
            <div className="ternary__item">
              <h6 className="ternary__title">Privacy oriented</h6>
              <div className="ternary__line--yellow">—</div>
              <p className="ternary__text">
                Most feedback services require visitors to sign up and that can
                <strong>discourage interaction</strong> and{" "}
                <strong>is bad for privacy concerns</strong>.
              </p>
            </div>
            <div className="ternary__item">
              <h6 className="ternary__title">Fastest implementation</h6>
              <div className="ternary__line--green">—</div>
              <p className="ternary__text">
                By using our React component or widget you just need to choose a
                style, provide an identifier for your button and{" "}
                <strong>you are done!</strong>
              </p>
            </div>
            <div className="ternary__item">
              <h6 className="ternary__title">No bots allowed</h6>
              <div className="ternary__line--pink">—</div>
              <p className="ternary__text">
                Lyket is integrated with <strong>Google reCAPTCHA V3</strong> to
                provide protection against malitious use, while never
                interrupting your users.
              </p>
            </div>
          </div>
        </div>
      </section>
      {false && (
        <section className="section">
          <div className="section__container">
            <h2 className="section__title">Pricing </h2>
            <p className="section__text">
              No trial | free forever plan | pay as you grow
            </p>
            <div className="ternary">
              <div className="ternary__item">
                <h6 className="ternary__title">Free plan</h6>
                <p className="ternary__text">0£</p>
              </div>
              <div className="ternary__item">
                <h6 className="ternary__title">Growth plan</h6>
                <p className="ternary__text">0£</p>
              </div>
              <div className="ternary__item">
                <h6 className="ternary__title">Custom plan</h6>
                <p className="ternary__text">0£</p>
              </div>
            </div>
          </div>
        </section>
      )}
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
