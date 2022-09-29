import React from "react";

export default function Contact() {
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
            <input type="hidden" name="form-name" value="contact" />
            <div className="form__row">
              <label className="form__label">*Email:</label>
              <input
                type="email"
                name="email"
                required
                placeholder="myemail@mail.com"
              />
            </div>
            <div className="form__row">
              <label className="form__label">*Tech:</label>
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
            </div>
            <div className="form__row">
              <label className="form__label">Message:</label>
              <textarea name="message" />
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
