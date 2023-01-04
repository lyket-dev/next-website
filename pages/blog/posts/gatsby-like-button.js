import React from "react";
import { LikeButton } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";
import Code from "components/Code";

export const meta = {
	title: "How to add a like button to any Gatsby website with Lyket",
};

export default function Post() {
	return (
		<>
			<Head>
				<title>Add a like button to your Gatsby website | Lyket</title>
				<meta
					name="description"
					content="Your Gatsby website could use some loving? Lyket lets you add privacy compliant like buttons to any Gatsby project in a matter of seconds"
				/>
				<meta
					name="keywords"
					content="Gatsby like button, Gatsby, like button"
				/>
			</Head>
			<div className="page">
				<section className="page__section">
					<h2 className="page__kicker">Gatsby like button</h2>
					<h1 className="page__title">{meta.title}</h1>
					<div className="half__reaction">
						<LikeButton
							namespace="blog"
							id="like-button-gatsby"
							component={LikeButton.templates.Twitter}
						/>
					</div>
				</section>
				<div className="avatar" />
				<section className="page__section">
					<div className="markdown">
						<p>
							Lyket is the ultimate tool to quickly implement GDPR-compliant
							<strong>like buttons on Gatsby</strong>. From the moment you
							create the button our server will keep track of every visitor
							interaction without storing their personal data.
						</p>
						<h4>What is Gatsby?</h4>
						<p>
							Gatsby JS is an open source framework that is used for the
							creation of highly performing websites through the React language.
							We can therefore consider Gatsby a real "platform" able to help us
							create any type of website through several very interesting
							features:
						</p>
						<ul>
							<li>
								uses constantly updated and supporting technologies (React and
								webpack) manages data through Graphql, a query-based API service
								generates static files that can also be loaded onto a CDN
							</li>
							<li>
								uses the JAMstack approach, the approach that therefore combines
								Java Script, API and markup for the development of websites
								(this is an effective return to static sites).
							</li>
							<li>
								the sites generated are also PWAs (progressive Web App) offers
								fast browsing using dns-prefetch, prefetch and preload.
							</li>
						</ul>
						<p>
							Using Gatsby JS to create very fast websites is very simple, it
							can in fact read data from any source (CMS; static files etc),
							analyze them and redirect them as static files that are managed by
							React and placed on the server. The JAM Stack language is the real
							added value of this platform because it allows the site to be
							approached in a “split” and independent rather than centralized
							way. As mentioned, JAM is an acronym that stands for Javascript,
							API, Markup where Java represents the dynamic part that runs in
							the client, the API the data read by Java and Markup the html
							files that must be created during the development of the site.{" "}
						</p>
						<p>
							Gatsby can integrate the main plugins that those who have already
							had, for example, experience in Wordpress, surely know: Analytics,
							Seo, Utilities etc.
						</p>
						<h4>Start a project with GatsbyJS</h4>
						<p>
							The Gatsbyjs.org website is very intuitive and guides anyone who
							wants to approach this innovative coding language step by step.{" "}
						</p>
						<p>
							There are two ways to get started with Gatsby: either by following
							the{" "}
							<strong>
								step-by-step instructions to prepare for those with no Gatsby
								experience or development
							</strong>
							, or via the <p>quick start</p> (for more experienced audience).
							The tutorials found within the site are very descriptive and can
							put anyone in a position to set up a high-performance site without
							having a strong programming knowledge.
						</p>
						<p>
							Finally, the site also hosts a very in-depth blog through to
							become more familiar with the framework.
						</p>
						<h4>Add like buttons to your GatsbyJS website</h4>
						<p>
							<strong>Gatsby is based on React</strong> so it integrates
							perfectly with Lyket!
						</p>
						<p>
							Everything is explained in the{" "}
							<Link href="/docs/react">React documentation</Link> and everything
							applies smoothly to GatsbyJS without having to make any change at
							all. T
							<strong>hat's the magic of developing in React</strong> :D
						</p>
						<p>
							You can customize your Gatsby buttons in the same way you can do
							it for the React ones
						</p>
						Í<p>Check out these in-depth tutorials:</p>Í
						<ul>
							<li>
								<Link href="/blog/posts/react-like-button">
									How to create a React like button
								</Link>
							</li>
							<li>
								<Link href="/blog/posts/clap-button">
									How to create a React clap button
								</Link>
							</li>
							<li>
								<Link href="/blog/posts/react-like-dislike-button">
									How to create a React like dislike button
								</Link>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</>
	);
}
