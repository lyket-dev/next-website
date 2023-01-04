import React from "react";
import { ClapButton } from "@lyket/react";
import Head from "next/head";

export const meta = {
	title: "Stop using the Facebook like button for your website, own your data!",
};

export default function Post() {
	return (
		<>
			<Head>
				<title>
					Lyket - Stop using the Facebook like button, own your data!
				</title>
				<meta
					content="Why is there even a Facebook like button on your website? Our API collects no personal information and don't sell it to any big corp. With Lyket you are the owner of your website data."
					name="description"
				/>
				<meta
					name="keywords"
					content="Facebook like button, Facebook, like button"
				/>
			</Head>
			<div className="page">
				<section className="page__section">
					<h1 className="page__kicker">Facebook like button</h1>
					<h2 className="page__title">{meta.title}</h2>
					<div className="half__reaction">
						<ClapButton
							namespace="blog"
							id="facebook-like-button"
							component={ClapButton.templates.Medium}
						/>
					</div>
				</section>
				<div className="avatar" />
				<section className="page__section">
					<div className="markdown">
						<h3>The social dilemma</h3>
						<p>
							I was watching the Social Dilemma recently and open the privacy
							discussion within my circle of friends. Most of them aren't really
							into IT, let alone privacy or security so it is normal for them to
							think Facebook is a great tool to gather feedback from the outside
							world.
						</p>
						<p>I personally disagree.</p>
						<h3>Facebook is not free</h3>
						<p>
							Although Facebook doesn’t cost you money every month, it’s
							definitely not free. Facebook doesn’t give you access to their
							services software because they’re nice or altruistic. Giving you
							access to this service means that they have access to your
							visitors’ personal data. And because they’re a profit-driven
							advertising company, if they aren’t charging you for their
							product, they’re monetizing on your data.
						</p>
						<p>
							Most websites have a blog session or need to be aware of how
							visitors perceive their content, but instead of integrating a
							feedback system on their own they rely on the well-known Facebook
							like button to gather data.
						</p>
						<p>
							This is why we created Lyket. Our API collects zero personal or
							personally identifiable information from website visitors. We
							charge for our product, so we don’t need to sell information or
							data. With Lyket you are the owner of your own data. You can
							delete it anytime and be sure that they are gone! I would like to
							see you doing the same with Facebook without a bunch of lawyers
						</p>
						<h3>No GDPR, CCPA or PECR notices required</h3>
						<p>
							We don’t collect any personal or invasive data about your website
							visitors, and we use session ids rather than cookies to check if a
							user liked your content, so you don’t have to show annoying
							pop-ups that visitors hate.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
