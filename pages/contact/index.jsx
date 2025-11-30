import React, { useRef } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function Contact() {
  const recaptchaRef = useRef(null);
  return (
    <div className="page">
      <section className="page__section space--bottom-5">
        <div className="page__title">
          <h1>Anything on your mind?</h1>
        </div>
        <div className="window">
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            className="form"
          >
            <input type="hidden" name="form-name" value="contact-form" />
            <div className="form__row">
              <label className="form__label">Email*:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="myemail@mail.com"
              />
            </div>
            <div className="form__row">
              <label className="form__label">Company*:</label>
              <input type="company" name="company" required />
            </div>
            <div className="form__row">
              <label className="form__label">Job Role*:</label>
              <input type="role" name="role" required />
            </div>
            <div className="form__row">
              <label className="form__label">Message*:</label>
              <textarea name="message" required />
            </div>
            <div className="form__row">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                data-netlify-recaptcha="true"
              />
            </div>
            <button type="submit" className="button">
              {"Submit"}
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
