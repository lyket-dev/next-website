import React from "react";
import Check from "../../public/svg/check.svg";

export default function Privacy() {
  return (
    <div className="page">
      <section className="page__section">
        <h1 className="page__title">Pricing</h1>
        <p className="page__text">
          We want to offer a simple pricing model that grows with your website
          with a free tier that lets you experiment with Lyket and a flat one
          for more professional use.
        </p>
      </section>
      <section className="section--primary">
        <div className="section__container">
          <div className="ternary">
            <div className="ternary__item">
              <h4 className="ternary__title">FREE</h4>
              <div className="shbox">
                <p className="ternary__text">
                  up to <strong>1,000</strong> pageviews
                </p>
                <p className="ternary__huge">0$</p>
              </div>
            </div>
            <div className="ternary__item">
              <h4 className="ternary__title">PRO</h4>
              <div className="shbox">
                <p className="ternary__text">
                  up to <strong>50,000</strong> pageviews
                </p>
                <p className="ternary__huge">60$/year</p>
              </div>
            </div>
            <div className="ternary__item">
              <h4 className="ternary__title">CUSTOM</h4>
              <div className="shbox">
                <p className="ternary__text">
                  up to <strong>custom amount</strong>
                </p>
                <p className="ternary__huge">contact us</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h1 className="page__title">What you get</h1>
          <div className="box__container">
            <div className="box">
              <ul className="list">
                <li className="list__item">
                  <div className="list__item__icon">
                    <Check />
                  </div>
                  <p className="list__item__title">
                    Three buttons with different behaviours
                  </p>
                </li>
                <li className="list__item">
                  <div className="list__item__icon">
                    <Check />
                  </div>
                  <p className="list__item__title">Statistics dashboard</p>
                </li>
                <li className="list__item">
                  <div className="list__item__icon">
                    <Check />
                  </div>
                  <p className="list__item__title">Support</p>
                </li>
                <li className="list__item">
                  <div className="list__item__icon">
                    <Check />
                  </div>
                  <p className="list__item__title">Email notifications</p>
                </li>
                <li className="list__item">
                  <div className="list__item__icon">
                    <Check />
                  </div>
                  <p className="list__item__title">Import-export data</p>
                </li>
                <li className="list__item">
                  <div className="list__item__icon">
                    <Check />
                  </div>
                  <p className="list__item__title">Privacy compliancy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
