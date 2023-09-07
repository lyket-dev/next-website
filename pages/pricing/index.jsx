import React from "react";
import Check from "public/icons/outline/check.svg";
import Bulb from "public/icons/outline/light-bulb.svg";
import Beaker from "public/icons/outline/beaker.svg";
import Thumb from "public/icons/outline/thumb-up.svg";
import Case from "public/icons/outline/briefcase.svg";
import Custom from "public/icons/outline/trending-up.svg";
import Stats from "public/icons/outline/chart-pie.svg";
import Support from "public/icons/outline/support.svg";
import Mail from "public/icons/outline/mail.svg";
import Shield from "public/icons/outline/shield-check.svg";
import ImEx from "public/icons/outline/upload.svg";
import Link from "next/link";
import RegisterButton from "components/RegisterButton";

export default function Privacy() {
  return (
    <div className="page">
      <section className="page__section">
        <div className="page__title">
          <h1>Pricing</h1>
        </div>
        <div className="text__center">
          <p className="page__text">
            You can kickstart with a <strong>complimentary test project</strong>{" "}
            , without any time constraints, or get a customized plan tailored to
            your needs. No credit card information required!
          </p>
          <p className="page__text">
            * Hard limit means that if you exceed the limit in any given month,
            the service will no longer be accessible until you upgrade to a
            higher tier
          </p>
        </div>
      </section>
      <section className="section--primary">
        <div className="section__container">
          <div className="ternary">
            <div className="ternary__item">
              <div className="ternary__icon">
                <Beaker className="icon" />
              </div>
              <h4 className="ternary__title">Test</h4>
              <p className="ternary__subtitle">
                Up to <strong>500 pageviews</strong>/month
              </p>
              <p className="ternary__list__item">
                <strong>Hard limit *</strong>
              </p>
              <p className="ternary__list__item">
                <Check /> No ads
              </p>
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <div className="space--top-2">
                <p className="ternary__huge">Free</p>
              </div>
            </div>
            <div className="ternary__item">
              <div className="ternary__icon">
                <Bulb className="icon" />
              </div>
              <h4 className="ternary__title">Basic</h4>
              <p className="ternary__subtitle">
                Up to <strong>5,000 pageviews</strong>/month
              </p>
              <p className="ternary__list__item">
                <strong>Hard limit *</strong>
              </p>
              <p className="ternary__list__item">
                <Check /> No ads
              </p>
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <div className="space--top-2">
                <p className="ternary__huge">4€/month</p>
              </div>
              <p className="ternary__hint">billed yearly</p>
            </div>
            <div className="ternary__item">
              <div className="ternary__icon">
                <Case className="icon" />
              </div>
              <h4 className="ternary__title">Business</h4>
              <p className="ternary__subtitle">
                Up to <strong>50,000 pageviews</strong>/month
              </p>
              <p className="ternary__list__item">
                <strong>Hard limit *</strong>
              </p>
              <p className="ternary__list__item">
                <Check /> No ads
              </p>
              <p className="ternary__list__item">
                <Check /> Recaptcha
              </p>
              <p className="ternary__list__item">
                <Check /> Direct Email Support
              </p>
              <p className="ternary__list__item" />
              <p className="ternary__list__item" />
              <div className="space--top-2">
                <p className="ternary__huge">10€/month</p>
                <p className="ternary__hint">billed monthly</p>
                <p className="ternary__huge">100€/year</p>
                <p className="ternary__hint">billed yearly</p>
              </div>
            </div>
            <div className="ternary__item">
              <div className="ternary__icon">
                <Custom className="icon" />
              </div>
              <h4 className="ternary__title">Custom</h4>
              <p className="ternary__subtitle">
                From <strong>50,000 pageviews</strong>/month
              </p>
              <p className="ternary__list__item">
                <strong>
                  <Check /> Soft limit *
                </strong>
              </p>
              <p className="ternary__list__item">
                <Check /> No Ads
              </p>
              <p className="ternary__list__item">
                <Check /> Recaptcha
              </p>
              <p className="ternary__list__item">
                <Check /> Progressive scale discount
              </p>
              <p className="ternary__list__item">
                <Check /> Dedicated Email Support
              </p>
              <div className="space--top-2">
                <p className="ternary__huge">
                  <Link href="/contact">Contact us!</Link>
                </p>
              </div>
            </div>
          </div>
          <RegisterButton />
          <div className="text__left">
            <div className="page__title">
              <h3>Pricing faqs</h3>
            </div>
            <div className="markdown">
              <h6>What is a pageview? </h6>
              <p>
                The pageview constitutes a user visit to a page containing one
                or more buttons. Meaning that your pageviews counter will
                increase each time a user sees your page
              </p>
              <h6>What are the conditions for the free plan? </h6>
              <p>
                The free plan has the hard limit of 500 pageviews for one month,
                and resets the pageviews counter every month. If you never reach
                the limit, the free plan will be free forever. Otherwise, if you
                reach the limit even for one month, you will need to switch to a
                paid plan.
              </p>
            </div>
          </div>
          <h2 className="page__title">What you get</h2>
          <div className="stripes">
            <div className="stripe__item">
              <div className="stripe__left">
                <Thumb className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">
                  Four different button behaviors
                </h6>
                <p className="stripe__text">
                  Lyket offers four types of button behaviors, each with a
                  specific function and aimed at gathering different feedback.
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
                  We are an enthusiastic team, and always ready to help you.
                </p>
              </div>
            </div>
            <div className="stripe__item">
              <div className="stripe__left">
                <Mail className="icon" />
              </div>
              <div className="stripe__container">
                <h6 className="stripe__title">Out of the box buttons</h6>
                <p className="stripe__text">
                  Implementing your first Lyket button on a website takes
                  literally 4 minutes, thanks to our out-of-the-box-integration.
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
                <h6 className="stripe__title">Import data</h6>
                <p className="stripe__text">
                  Easily import your data from Medium or any csv file.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
