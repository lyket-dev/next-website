import React from "react";
import Head from "next/head";
import Link from "next/link";
import Decorator from "components/Decorator";
import Share from "public/icons/outline/share.svg";
import Hand from "public/icons/outline/hand.svg";
import Globe from "public/icons/outline/globe.svg";
import ScaleIcon from "public/icons/outline/scale.svg";
import Server from "public/icons/outline/server.svg";
import UserGroup from "public/icons/outline/user-group.svg";
import ShieldCheck from "public/icons/outline/shield-check.svg";
import Bolt from "public/icons/outline/lightning-bolt.svg";
import GeHC from "public/icons/logos/ge-logo.svg";
import Heat from "public/icons/logos/heat-logo.svg";
import TedX from "public/icons/logos/tedx-logo.svg";

export default function Enterprise() {
	return (
		<>
			<Head>
				<title>Enterprise Feedback Management | Lyket</title>
				<meta
					content="Lyket is a feedback API for enterprise teams: add like, clap and rating buttons to any website or app, with minimal data collected from visitors and EU-hosted infrastructure."
					name="description"
				/>
			</Head>
			<div className="page">
				<div className="page__section--gradient" />
				<div className="docs__title__container">
					<h1 className="page__kicker">feedback management for enterprise teams</h1>
					<h2 className="docs__title">
						<Decorator
							fulltext="Empower Your Feedback Management with Lyket"
							toDecorate="Feedback Management"
							color="blue"
						/>
					</h2>
					<p className="docs__text">
						A first button is <strong>live in about 4 minutes</strong>,
						visitors never log in to vote, and everything runs on{" "}
						<strong>EU-hosted infrastructure</strong>.
					</p>
					<div className="section--center space--top-2">
						<Link href="/reach-out" className="button--big button--center">
							Talk to sales
						</Link>
					</div>
					<div className="check">
						<p className="check__text">EU-hosted infrastructure</p>
						<p className="check__text">Signed DPA on request</p>
						<p className="check__text">No credit card needed</p>
					</div>
					<div className="list">
						<TedX className="list__logos" alt="tedx" />
						<Heat className="list__logos" alt="heat-mvmnt" />
						<GeHC className="list__logos" alt="ge-hc" />
					</div>
				</div>
				<section className="section--primary">
					<div className="section__container">
						<h2 className="section__title">
							<Decorator
								fulltext="Built for what procurement checks first"
								toDecorate="procurement checks first"
								color="red"
							/>
						</h2>
						<div className="stripes">
							<div className="stripe__item">
								<div className="stripe__left">
									<Globe className="icon" />
								</div>
								<div className="stripe__container">
									<h6 className="stripe__title">EU data residency</h6>
									<p className="stripe__text">
										Our infrastructure is <strong>hosted in the EU</strong>,
										end to end — no data residency surprises to explain to
										legal.
									</p>
								</div>
							</div>
							<div className="stripe__item">
								<div className="stripe__left">
									<ScaleIcon className="icon" />
								</div>
								<div className="stripe__container">
									<h6 className="stripe__title">DPA on request</h6>
									<p className="stripe__text">
										Need a signed <strong>Art. 28 GDPR Data Processing
										Agreement</strong>? Get in touch and we'll provide one.
									</p>
								</div>
							</div>
							<div className="stripe__item">
								<div className="stripe__left">
									<ShieldCheck className="icon" />
								</div>
								<div className="stripe__container">
									<h6 className="stripe__title">No bots allowed</h6>
									<p className="stripe__text">
										Lyket is integrated with{" "}
										<strong>Google reCAPTCHA V3</strong> to keep vote counts
										honest, without ever interrupting real visitors.
									</p>
								</div>
							</div>
							<div className="stripe__item">
								<div className="stripe__left">
									<Server className="icon" />
								</div>
								<div className="stripe__container">
									<h6 className="stripe__title">Built to scale</h6>
									<p className="stripe__text">
										Buttons stay responsive as traffic grows —{" "}
										<strong>without you provisioning a single server</strong>.
									</p>
								</div>
							</div>
							<div className="stripe__item">
								<div className="stripe__left">
									<UserGroup className="icon" />
								</div>
								<div className="stripe__container">
									<h6 className="stripe__title">No visitor login</h6>
									<p className="stripe__text">
										Visitors like, clap or rate without ever creating an
										account or <strong>handing over personal data</strong>.
									</p>
								</div>
							</div>
							<div className="stripe__item">
								<div className="stripe__left">
									<Bolt className="icon" />
								</div>
								<div className="stripe__container">
									<h6 className="stripe__title">Live in ~4 minutes</h6>
									<p className="stripe__text">
										Drop in our <strong>REST API</strong> or{" "}
										<Link href="/docs/react">React component</Link> and your
										first button is live almost immediately.
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section className="page__section">
					<div className="markdown">
						<h3>Shouldn't we build an enterprise feedback tool in-house?</h3>
						<p>
							Building a <strong>feedback management system</strong> that
							survives real traffic means solving storage, spam prevention,
							scaling and analytics — none of which is the problem you're
							actually trying to solve. Lyket does that part, so your team
							doesn't have to.
						</p>

						<div className="block--pink">
							<div className="block__text__container">
								<h4 className="block__title block__title--sm">
									Built to run itself, across every channel
								</h4>
								<p className="block__text">
									The same API and dashboard work on your{" "}
									<strong>website, mobile app, or any other touchpoint</strong>{" "}
									— four button types (like, like/dislike, clap, rating),
									real-time counts, and infrastructure that keeps buttons
									responsive as traffic grows, without you provisioning a
									single server.
								</p>
							</div>
							<div className="block__image block__image--icon">
								<Share />
							</div>
						</div>

						<h3>Shouldn't we use our CMS to manage user feedback?</h3>
						<p>
							Content Management Systems are primarily built for read-only
							content delivery, not for the fast, frequent write operations
							that feedback handling requires. They also lack dedicated
							tools for interpreting feedback data. Lyket offers{" "}
							<strong>real-time vote counts</strong>, a statistics dashboard,
							and CSV/Medium import if you already have data to migrate.
						</p>

						<h3>Is anonymous user feedback that important?</h3>
						<p>
							By integrating Lyket's feedback buttons into your blog,
							website or app, you turn your content into an interactive
							platform. Visitors can express their sentiment through like,
							like/dislike and applause buttons, as well as ratings —{" "}
							<strong>actively participating instead of just reading</strong>.
						</p>
						<p>
							Feedback buttons also give you <strong>data and insights</strong>{" "}
							that help you understand your audience: which content
							resonates, which doesn't, and where to focus next.
						</p>

						<div className="block--green">
							<div className="block__text__container">
								<h4 className="block__title block__title--sm">
									Low effort for visitors, real signal for you
								</h4>
								<p className="block__text">
									A comment box or a survey asks a lot of a visitor. A like,
									clap or rating button asks for{" "}
									<strong>one click</strong> — which is why more visitors
									actually respond, giving you a read on what's working
									without asking anyone to write anything.
								</p>
							</div>
							<div className="block__image block__image--icon">
								<Hand />
							</div>
						</div>

						<h3>Aren't there any issues with GDPR compliance?</h3>
						<p>
							Lyket is built to minimize what it needs to know about your
							visitors: no login, no cookie, and by default just a randomly
							generated ID kept in the visitor's browser to avoid double
							votes — or, if you'd rather nothing be stored on their device
							at all, a hashed IP address only. Our infrastructure is hosted
							in the EU.
						</p>
						<p>
							In practice, this usually means adding one line to your own
							privacy policy naming Lyket as a sub-processor — see our{" "}
							<Link href="/privacy">privacy policy</Link> for the exact
							details. If your compliance process requires a signed Data
							Processing Agreement under Art. 28 GDPR, just get in touch and
							we'll provide one.
						</p>
					</div>
				</section>
				<section className="page__section">
					<div className="block--gradient">
						<div className="block__text__container">
							<h4 className="block__title block__title--sm">
								Get started with Lyket for Enterprise
							</h4>
							<p className="block__text">
								Four button types, a REST API and dashboard, EU hosting, and
								a first button live in about 4 minutes. Let's talk about a{" "}
								<strong>custom plan</strong> or a <strong>signed DPA</strong>.
							</p>
						</div>
						<div className="block__image">
							<Link href="/reach-out" className="button">
								Get in touch
							</Link>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}
