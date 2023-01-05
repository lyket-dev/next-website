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
import Arrow from "public/icons/outline/arrow-right.svg";
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
						<strong>grows with your project</strong>. You can start with a{" "}
						<strong>test project for free</strong>,{" "}
						<strong>without time limitation</strong>, and{" "}
						<strong>we will not ask you for a credit card</strong>!
					</p>
					<p className="page__text">
						* Be aware that{" "}
						<strong>
							the free plan is resetting the pageviews counter every month
						</strong>{" "}
						but if one month you reach the limit, it won't be available anymore!
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
								Up to <strong>500 pageviews</strong> per month *
							</p>
							<p className="ternary__huge">Free</p>
						</div>
						<div className="ternary__item">
							<div className="ternary__title">
								<Case className="icon--small" />
								<h4>Basic</h4>
							</div>
							<p className="ternary__text">
								Up to <strong>5,000 pageviews</strong> per month
							</p>
							<p className="ternary__huge">4€/month</p>
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
							<p className="ternary__huge">10€/month</p>
							<p className="ternary__text">billed monthly</p>
							<p className="ternary__huge">100€/year</p>
							<p className="ternary__text">billed yearly</p>
						</div>
					</div>
					<div>
						<div className="text__center">
							<p className="ternary__text">
								<strong>
									Need more pageviews? <Link href="/contact">Contact us!</Link>
								</strong>
							</p>
						</div>
						<div className="ternary__text">
							<a className="button" href={`${process.env.appBaseUrl}/signup`}>
								GET STARTED!
								<Arrow />
							</a>
						</div>
					</div>
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
