import React from "react";
import Check from "public/icons/outline/check.svg";
import Beaker from "public/icons/outline/beaker.svg";
import Thumb from "public/icons/outline/thumb-up.svg";
import Case from "public/icons/outline/briefcase.svg";
import Custom from "public/icons/outline/star.svg";
import Stats from "public/icons/outline/chart-pie.svg";
import Support from "public/icons/outline/support.svg";
import Mail from "public/icons/outline/mail.svg";
import Shield from "public/icons/outline/shield-check.svg";
import ImEx from "public/icons/outline/upload.svg";
import Link from "next/link";

export default function Privacy() {
  return (
    <div className="page">
      <section className="page__section">
        <div className="page__title">
          <h1>Pricing</h1>
        </div>
        <div className="text__center">
          <p className="page__text">
            We offer a simple pricing model that{" "}
            <strong>grows with your project</strong>.
          </p>
        </div>
      </section>
      <section className="section--primary">
        <div className="section__container">
          <div className="ternary">
            <div className="ternary__item">
              <div className="ternary__title">
                <Beaker className="icon--small" />
                <h4>Test</h4>
              </div>
              <p className="ternary__text">
                Up to <strong>500 pageviews</strong> per month
              </p>
              <p className="ternary__huge">Free</p>
            </div>
            <div className="ternary__item">
              <div className="ternary__title">
                <Case className="icon--small" />
                <h4>Basic</h4>
              </div>
              <p className="ternary__text">
                Up to <strong>3,000 pageviews</strong> per month
              </p>
              <p className="ternary__huge">5€/month</p>
              <p className="ternary__text">billed yearly</p>
            </div>
            <div className="ternary__item">
              <div className="ternary__title">
                <Custom className="icon--small" />
                <h4>Business</h4>
              </div>
              <p className="ternary__text">
                Up to <strong>50,000 pageviews</strong> per month
              </p>
              <p className="ternary__huge">12€/month</p>
              <p className="ternary__text">billed monthly</p>
            </div>
          </div>
          <div className="text__center">
            <p className="page__text">
              <strong>
                Need more pageviews?{" "}
                <Link href="/contact">
                  <a>Contact us!</a>
                </Link>
              </strong>
            </p>
          </div>
          <div className="ternary__title">
            <a className="button" href={`${process.env.appBaseUrl}/signup`}>
              GET STARTED!
            </a>
          </div>
          <h2 className="page__title">What you get</h2>
          <div className="stripes">
            <div className="stripe__item">
              <div className="stripe__left">
                <Thumb className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Three different buttons</h6>
                <p className="stripe__text">
                  All three buttons have a specific function and can be used to
                  receive different feedback.
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Stats className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Statistics dashboard</h6>
                <p className="stripe__text">
                  Sign in your private area to see updated statistics on the
                  buttons!
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <div className="stripe__left">
                  <Support className="icon" />
                </div>
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Support</h6>
                <p className="stripe__text">
                  We are a small team always ready to help you.
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Mail className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Email notifications</h6>
                <p className="stripe__text">
                  Get notified when someone is leaving a feedback or when you
                  reach a certain number of votes! [WIP]
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Shield className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Privacy compliancy</h6>
                <p className="stripe__text">
                  You don't have to update your privacy/cookie policy if you use
                  Lyket!
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <ImEx className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Import-export data</h6>
                <p className="stripe__text">
                  Easily import your data from Medium or export to csv.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
