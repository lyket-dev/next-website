import React from "react";
import { UpdownButton } from "@lyket/react";
import Head from "next/head";

export const meta = {
	title: "Create a e-commerce in 3 minutes with Gatsby, DatoCMS and Lyket",
};

export default function Post() {
	return (
		<>
			<Head>
				<title>Create a e-commerce with Gatsby + DatoCMS + Lyket</title>
				<meta
					property="og:description"
					content="A 3 minutes tutorial on how to create a next-generation e-commerce from scratch"
					name="description"
				/>
			</Head>
			<div className="page">
				<section className="page__section">
					<h2 className="page__title">{meta.title}</h2>
					<div className="half__reaction">
						<UpdownButton namespace="e-commerce" id="gatsby-e-commerce" />
					</div>
				</section>
				<section className="page__section">
					<div className="markdown">
						<p>
							Yes, I am not joking. You can set your clock now and make it run.
							At 3 minutes sharp you will have your new generation e-commerce.
							For free, beautiful.
						</p>
						<p>But, wait. A few words first.</p>
						<h3>Next generation? What does it mean?</h3>
						<p>
							80% of e-commerces on the web are made by using an{" "}
							<strong>old monolithic web approach</strong>, with a single origin
							of content and a single point of failure. Now with the JAMstack
							approach we can build more secure and independent websites
							choosing the services we love the most.
						</p>
						<h3>Free? How?</h3>
						<p>
							Wordpress is not the only free platform on the web. For small
							projects you can use more sophisticated tools completely for free,
							unless your e-commerce is super successful!
						</p>
						<h3>TLDR</h3>
						<ul>
							<li>You need </li>
						</ul>
						<h3>Start the timer now</h3>
						<p>If you don't already have</p>
					</div>
				</section>
			</div>
		</>
	);
}
