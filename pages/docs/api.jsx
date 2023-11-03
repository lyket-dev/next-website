import React from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import SwaggerUI from "swagger-ui-react";
import Head from "next/head";
import Anchor from "components/Anchor";
import Ranking from "components/Ranking";
import Code from "components/Code";
import Link from "next/link";

Docs.getInitialProps = async (_ctx) => {
	const response = await fetch(`${process.env.apiBaseUrl}/schema`);
	const json = await response.json();
	return { schema: json };
};

export default function Docs({ schema }) {
	return (
		<>
			<Head>
				<title>Lyket ranking API | Lyket</title>
				<meta
					content="Lyket ranking API keeps track of your users likes and dislikes and provides the updated ranking in real-time"
					name="description"
				/>
				<meta name="keywords" content="ranking API, votes API" />
			</Head>
			<div className="page">
				<div className="page__section--gradient" />
				<section className="page__section">
					<div className="docs__title__container">
						<h1 className="page__kicker">like buttons & ranking API</h1>
						<h2 className="docs__title">Buttons & ranking API</h2>
						<div className="docs__menu__container">
							<QuickDocsMenu />
						</div>
					</div>
					<div className="docs">
						<div className="markdown">
							<p>
								The API represents Lyket's core, and it is{" "}
								<strong>as simple as powerful</strong>. Here you will find
								information on all the available endpoints to use Lyket at its
								best!
							</p>
							<Anchor slug="authentication">
								<h4>Authentication</h4>
							</Anchor>
							<p>
								Lyket endpoints are accessible to all who have access to the
								public API key. Simply{" "}
								<strong>
									use your personal public API key in the HTTP Authorization
									request header
								</strong>{" "}
								to authenticate your requests.
							</p>
							<Code>
								{`curl
\ -X 'GET' 'http://api.lyket.dev/v1/like-buttons/shirts/model-123'
\ -H 'accept: application/json'
\ -H 'Authorization: Bearer xxx'`}
							</Code>
							<p>
								Be aware that{" "}
								<strong>
									not all endpoints are accessible with the public key
								</strong>
								. For write actions, like adding tags, you need to{" "}
								<strong>
									provide your secret key that you shall never share or expose
									publicly
								</strong>
								.
							</p>
							<Anchor slug="buttons-api">
								<h4>Buttons API</h4>
							</Anchor>
							<p>
								First of all, Lyket buttons endpoints will{" "}
								<strong>create a new button if it doesn't exist yet</strong>.
								Let's try to make it clearer! Each time you make a request to
								one of our buttons endpoints, Lyket will look for a button
								according to the type, the ID and the namespace you provided.
							</p>
							<p>So, for example, if you make this request:</p>
							<Code>GET /v1/like-buttons/dinosaurs/t-rex</Code>
							<p>
								Lyket will look for a button that is of type <em>like</em>, has
								been categorized as part of <em>dinosaurs</em>, and has the ID{" "}
								<em>t-rex</em>.
							</p>
							<p>
								If no corresponding button is found, Lyket will create a new
								button with these attributes. In the meantime it will start{" "}
								<strong>tracking its score</strong>, the{" "}
								<strong>number of votes</strong> it receives and its{" "}
								<strong>
									position in different types of rankings.{" "}
									<Link href="#ranking-api">Read more about rankings</Link>
								</strong>
								.
							</p>
							<p>
								Lyket provides <strong>three different types of buttons</strong>
								. Each one of them has its own features and behaviors that can
								be used in multiple context according to different needs!
							</p>
							<p>In particular:</p>
							<ul>
								<li>
									<p>
										<strong>Like buttons</strong> - behave like{" "}
										<em>Twitter buttons</em>. Users can only like once and a
										subsequent call from the same user will remove the user's
										like.
									</p>
								</li>
								<li>
									<p>
										<strong>Like/dislike buttons</strong>, or Updown buttons -
										behave like <em>Reddit buttons</em>. Visitors can only like
										or dislike once and a subsequent call from the same visitor
										will remove the visitor's like or dislike.
									</p>
								</li>
								<li>
									<p>
										<strong>Clap buttons</strong> - behave like{" "}
										<em>Medium applauses</em>. Users can like multiple times and
										every other call from the same user will increment the claps
										number.
									</p>
								</li>
							</ul>
							<Anchor slug="categorization">
								<h4>Categorization</h4>
							</Anchor>
							<p>
								Lyket allows you to categorize and organize buttons in{" "}
								<strong>two ways</strong>.
							</p>
							<ul>
								<li>
									<p>
										The first one is by providing a main and broad category for
										your buttons, <strong>the namespace</strong>. The namespace
										was envisioned to be the{" "}
										<strong>main container of a group of buttons</strong>.
									</p>
									<p>
										For example if you are using Lyket for your e-commerce, and
										you want to track user feedback for your shirts, you can
										choose the <em>shirts</em> namespace, and the hat model as
										ID. In this way you will be able to see all your shirt
										products <strong>grouped in your dashboard</strong>, and get
										the{" "}
										<strong>
											shirts ranking ordered by the most voted models
										</strong>
										.{" "}
									</p>
								</li>
								<li>
									<p>
										The second one is by{" "}
										<strong>attaching tags to your buttons</strong>. Tags are
										useful if you want to{" "}
										<strong>
											give more specific attributes to your buttons
										</strong>{" "}
										and work very well in combination with namespace.
									</p>{" "}
									<p>
										For example if you want to be more descriptive with your
										shirts, you can attach a brand and color tag to your shirts.
										By doing that you can then get the current{" "}
										<strong>shirts ranking filtered by tags</strong> - ie.
										ranking of the most voted shirts that are <em>red</em> and{" "}
										<em>long</em>
									</p>
									<p>
										<strong>Important! </strong>Since adding tags is a write
										action, <strong>you cannot use your public API key</strong>{" "}
										to call the <em>add-tags</em> endpoint. Use your secret key
										instead!- the one starting with <em>st_</em>.
									</p>
								</li>
							</ul>

							<Anchor slug="ranking-api">
								<h3>Ranking API</h3>
							</Anchor>
							<p>
								Lyket specialty and uniqueness is to keep track of votes and to
								return <strong>updated ranking results</strong>. It offers a
								number of endpoints that expose current rankings relative to
								type, namespace and tags.
							</p>
							<p>In particular:</p>
							<ul>
								<li>
									<Anchor slug="ranking-by-type">
										<h6>Ranking by type</h6>
									</Anchor>
									<p>
										Returns the current ranking of all buttons with the same
										type.
									</p>
									<Code>GET /v1/rank/like-buttons</Code>
								</li>
								<li>
									<Anchor slug="ranking-by-category">
										<h6>Ranking by category</h6>
									</Anchor>
									<p>
										Returns the current ranking of all buttons with the same
										type and category
									</p>
									<Code>GET /v1/rank/like-buttons/shirts</Code>
								</li>
								<li>
									<Anchor slug="ranking-by-tags">
										<h6>Ranking by tags</h6>
									</Anchor>
									<p>
										Returns the current ranking of all buttons with the same
										type and the combination of provided tags
									</p>
									<Code>GET /v1/rank/like-buttons/shirts?tags=red,long</Code>
								</li>
							</ul>
							<p>
								For example, let's see wich one of these vintage consoles get
								the most votes!
							</p>
							<Ranking />
							<Anchor slug="schema">
								<h4>Schema</h4>
							</Anchor>
							<p>
								Here is the full documentation on all available endpoints. You
								can try all different endpoints directly from here by
								authorizing calls with your personal public API token.
							</p>
						</div>
					</div>
					<div className="api">{schema && <SwaggerUI url={`${process.env.apiBaseUrl}/schema`} />}</div>
				</section>
			</div>
		</>
	);
}
