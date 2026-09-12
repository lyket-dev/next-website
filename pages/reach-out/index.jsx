import React from "react";
import Head from "next/head";

export default function Contact() {
	return (
		<div className="page">
			<Head>
				<title>Get in touch | Lyket</title>
				<meta
					content="Talk to the Lyket team about a custom plan, a signed DPA, or any question about adding feedback buttons to your website or app."
					name="description"
				/>
			</Head>
			<section className="page__section space--bottom-5">
				<div className="page__title">
					<h1>Anything on your mind?</h1>
				</div>
				<div className="text__center">
					<p className="page__text">
						Whether you need a <strong>custom plan</strong>, want to{" "}
						<strong>know more about Lyket</strong>, or just have a question
						before you start — drop us a line below.
					</p>
				</div>
				<div className="check space--bottom-5">
					<p className="check__text">Reply within 5 business days</p>
					<p className="check__text">No sales pressure</p>
					<p className="check__text">EU-based team</p>
				</div>
				<div className="contact">
					<div className="contact__info">
						<h2 className="half__kicker">Before you write</h2>
						<p className="half__title">What happens next</p>
						<p className="half__text">
							A real person on our team reads every message and gets back to you
							personally to talk through your use case.
						</p>
					</div>
					<div className="contact__form">
						<div className="contact__panel">
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
								<p className="hidden">
									<label>
										Don’t fill this out if you’re human:{" "}
										<input name="bot-field" type="text" />
									</label>
								</p>

								<div className="form__row">
									<label className="form__label" htmlFor="email">
										Email*:
									</label>
									<input
										id="email"
										type="email"
										name="email"
										required
										placeholder="myemail@mail.com"
									/>
								</div>

								<div className="form__row">
									<label className="form__label" htmlFor="company">
										Company*:
									</label>
									<input id="company" type="text" name="company" required />
								</div>

								<div className="form__row">
									<label className="form__label" htmlFor="role">
										Job Role*:
									</label>
									<input id="role" type="text" name="role" required />
								</div>

								<div className="form__row">
									<label className="form__label" htmlFor="message">
										Message*:
									</label>
									<textarea id="message" name="message" required />
								</div>

								<div data-netlify-recaptcha="true" />

								<button type="submit" className="button">
									Submit
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
