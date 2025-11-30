import React, { useRef } from "react";

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
						action="/thanks"
						className="form"
						data-netlify-honeypot="bot-field"
					>
						{/* richiesti da Netlify */}
						<input type="hidden" name="form-name" value="contact" />
						<p hidden>
							<label>
								Non compilare: <input name="bot-field" />
							</label>
						</p>

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
							<input type="text" name="company" required />
						</div>

						<div className="form__row">
							<label className="form__label">Job Role*:</label>
							<input type="text" name="role" required />
						</div>

						<div className="form__row">
							<label className="form__label">Message*:</label>
							<textarea name="message" required />
						</div>

						{/* reCAPTCHA gestito da Netlify */}
						<div data-netlify-recaptcha="true"></div>

						<button type="submit" className="button">
							Submit
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
