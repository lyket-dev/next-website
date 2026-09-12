import React from "react";
import Head from "next/head";
import Link from "next/link";
import Share from "public/icons/outline/share.svg";
import Hand from "public/icons/outline/hand.svg";

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
						Empower Your Feedback Management with Lyket
					</h2>
				</div>
				<section className="page__section">
					<div className="markdown">
						<p>
							Lyket adds like, clap, rating and like/dislike buttons to any
							website or app through a single API. A first button is{" "}
							<strong>live in about 4 minutes</strong>, visitors never log in
							or hand over personal data to vote, and our infrastructure is{" "}
							<strong>hosted in the EU</strong>.
						</p>
						<p>Let's answer a few frequently asked questions.</p>

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

						<h3>Get started with Lyket for Enterprise</h3>
						<p>
							Four button types, a REST API and dashboard, EU hosting, and
							a first button live in about 4 minutes.{" "}
							<Link href="/reach-out">Get in touch</Link> to talk about a{" "}
							<strong>custom plan</strong> or a <strong>signed DPA</strong>.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
