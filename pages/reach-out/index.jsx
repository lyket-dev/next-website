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
						action="/thanks"
						className="form"
						netlify-honeypot="bot-field"
						data-netlify-recaptcha="true"
					>
						<input type="hidden" name="form-name" value="contact" />
						<p class="hidden">
							<label>
								Don’t fill this out if you’re human:{" "}
								<input name="bot-field" type="text" />
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

						<div data-netlify-recaptcha="true" />

						<button type="submit" className="button">
							Submit
						</button>
					</form>
				</div>
			</section>
		</div>
	);
}
