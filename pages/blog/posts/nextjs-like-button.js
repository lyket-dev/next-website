import React from "react";
import { LikeButton } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";

export const meta = {
	title: "Add a like button to your NextJS website with Lyket",
};

export default function Post() {
	return (
		<>
			<Head>
				<title>Add a like button to your NextJS website | Lyket</title>
				<meta
					content="Lyket lets you add privacy compliant like buttons to any NextJS project in a matter of seconds"
					name="description"
					keywords="nextjs, like button, nextjs like button"
				/>
			</Head>
			<div className="page">
				<section className="page__section">
					<h1 className="page__kicker">NextJS like button</h1>
					<h2 className="page__title">{meta.title}</h2>
					<div className="half__reaction">
						<LikeButton
							namespace="blog"
							id="like-button-nextjs"
							component={LikeButton.templates.Twitter}
						/>
					</div>
				</section>
				<div className="avatar" />
				<section className="page__section">
					<div className="markdown">
						<p>
							With Lyket you can easily add like buttons on any NextJS project,
							and they <strong>work with Server Side Rendering</strong>! In fact
							if you disable Javascript on your NextJS page you are still be
							able to see Lyket like buttons
						</p>
						<p>
							Create buttons just be adding an ID and a button type and we will
							keep track of every visitor interaction without saving personal
							data.
						</p>

						<h4>Why NextJS</h4>
						<p>
							Next.js is a back-end JavaScript framework for React applications,
							and allows for server side rendering (SSR), making the life of
							every <strong>JAMstack developer better</strong>. With it's{" "}
							<strong>Server Side Rendering technology</strong> it has disrupted
							the way React based static website are created.
						</p>
						<p>
							With Next.js you can develop web applications, mobile apps,
							desktops and progressive web apps: it is built according to the
							principle of “Build once, run anywhere“.
						</p>
						<p>
							It is a framework that does not require any setup - it uses the
							filesystem as an API. It also has built-in{" "}
							<strong>support for TypeScript</strong>, which makes use of Babel.
							Other features of Next.js are automatic code splitting, automatic
							routing, <strong>hot reloading</strong> (only the modified code is
							reloaded) and <strong>static export</strong> (with a single
							command it can export a static site).
						</p>
						<p>
							This created a new challenge for Saas developers, like Lyket, that
							have to adapt to this new technology.
						</p>
						<h4>Installation using NextJS</h4>
						<p>
							First, signup to Lyket and{" "}
							<strong>get your public API key</strong> that Lyket uses to make
							every call to their servers
						</p>
						<p>
							Then you can easily follow the steps in the official{" "}
							<Link href="/docs/react">React documentation</Link>
						</p>
						<p>Start receiving feedback on your NextJS website, now!</p>
					</div>
				</section>
			</div>
		</>
	);
}
