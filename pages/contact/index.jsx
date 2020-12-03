import React from "react";
import Check from "../../public/svg/check.svg";

export default function Privacy() {
  return (
    <div className="page">
      <section className="page__section">
        <h1 className="page__title">Need anything? Drop us a few lines! :D</h1>
      </section>
      <section className="section--small">
        <div className="section__container">
          <div>
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              className="form"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label>
                <span>*Email:</span>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="myemail@mail.com"
                />
              </label>
              <label>
                <span>*Tech:</span>
                <select type="text" name="tech" required>
                  <option value="">Choose one</option>
                  <option value="react">ReactJS</option>
                  <option value="next">Next.js</option>
                  <option value="gatsby">Gatsby</option>
                  <option value="reactStatic">React Static</option>
                  <option value="html">Simple HTML</option>
                  <option value="wordpress">Wordpress</option>
                  <option value="VueJS">VueJS</option>
                  <option value="other">Other - can you specify?</option>
                  <option value="idk">I don't know :)</option>
                </select>
              </label>
              <label>
                <span>Message:</span> <textarea name="message" />
              </label>
              <button type="submit" className="button">
                {"Submit"}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
