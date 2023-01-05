import React from "react";
import { QuickReactDocsMenu } from "components/QuickDocsMenu";
import Code from "components/Code";
import Head from "next/head";
import Link from "next/link";
import { RateButton, Provider } from "@lyket/react";
import HomeSandbox from "components/HomeSandbox";

export default function Docs() {
	return (
		<>
			<Head>
				<title>How to implement a rating component in React | Lyket</title>
				<meta
					content="Lyket is a tool to instantly add a rating component to any React project. Start receiving feedback, now!"
					name="description"
				/>
			</Head>
			<div className="page">
				<div className="page__section--gradient" />
				<div className="docs__title__container">
					<h1 className="page__kicker">Rating component React</h1>
					<h2 className="docs__title">
						How to implement a rating component in React
					</h2>
					<div className="docs__menu__container">
						<QuickReactDocsMenu />
					</div>
				</div>
				<section className="page__section">
					<div className="docs">
						<div className="markdown docs__menu__right">
							<p>
								Lyket is the ultimate tool to add rating components to any React
								app! Lyket library allows a{" "}
								<strong>great deal of customization</strong> with just a few
								lines of code and it's{" "}
								<strong>compatible with all React frameworks</strong> like
								NextJS, Gatsby, create-react-app.
							</p>
						</div>
					</div>
				</section>

				<section className="section">
					<div className="section__container">
						<HomeSandbox
							selectedTab="rate"
							selectedTech="react"
							showMenu={false}
						/>
					</div>
				</section>

				<section className="page__section">
					<div className="docs markdown">
						<section>
							<p>
								If you want to find out how to use the{" "}
								<strong>React library in detail</strong> you came to the right
								place. If you prefer to{" "}
								<strong>learn with examples and ready-made snippets</strong> to
								copy and paste, you can visit:
							</p>
							<ul>
								<li>
									<Link href="/blog/posts/star-rating-react">
										Add a star rating component to your React app
									</Link>
								</li>
							</ul>
						</section>

						<section>
							<h3 id="how-buttons-work">How Lyket rating component works</h3>
							<p>
								All Lyket buttons share these{" "}
								<strong>basic behaviors and features:</strong>
							</p>
							<ul>
								<li>
									<p>
										As soon as a button component is mounted, a fetch request is
										made to retrieve info on the button that{" "}
										<strong>identifies with the ID and namespace</strong> that
										you provided.{" "}
										<strong>
											If no button is found, a new one will be created
										</strong>{" "}
										using the ID/namespace identifier.
									</p>
								</li>
								<li>
									<p>
										Notice that{" "}
										<strong>
											the server will create a new button for every different
											and unique identifier
										</strong>
										, so if you change ID or namespace or type the new button
										won’t inherit the votes.
									</p>
								</li>
								<li>
									<p>
										Every time a visitor interacts with a button, the button
										counter will update and{" "}
										<strong>Lyket will flag that the visitor has voted</strong>.
										Lyket uses an unique random ID stored in the visitor's
										browser localStorage to identify the visitor, with no need
										to signup or to use any third party service. To disable the
										session ID, and therefore use only the IP address to
										identify a user, set the disableSessionId prop to{" "}
										<em>true</em> in the Provider component.
									</p>
								</li>
								<li>
									<p>
										Lyket enforces a{" "}
										<strong>maximum number of sessions IDs per IP</strong>
										address to avoid receiving too many requests or DDoS
										attacks. The default is 3 sessions per IP. You can change
										this number by logging into your private area and edit the
										user settings.
									</p>
								</li>
								<li>
									<p>
										In the user settings you can also specify{" "}
										<strong>
											from which domains Lyket should accept requests
										</strong>{" "}
										using your personal API key. If left empty Lyket will accept
										requests coming from all domains.
									</p>
								</li>
							</ul>
						</section>

						<section>
							<h4 id="installation">Install Lyket</h4>
							<p>Well, Let's get started! To install the component run</p>
							<Code>yarn add @lyket/react</Code>
							<p>or</p>
							<Code>npm install @lyket/react</Code>
							<h5 id="provider">Add Lyket to your app</h5>
							<p>
								Add <strong>the Provider component top-level</strong> and
								configure it using your personal public API key that you can get
								after registering to Lyket
							</p>
							<Code>
								{`import { Provider } from '@lyket/react';
								
ReactDOM.render(
	<Provider apiKey="[YOUR-API-KEY]">
		<App />
	</Provider>,
	document.getElementById('root')
);`}
							</Code>
							<h6>Required props</h6>
							<ul>
								<li>
									<strong>apiKey</strong>: <strong>string</strong> - You can get
									your public API key by registering on{" "}
									<a href="https://app.lyket.dev">Lyket</a>.
								</li>
							</ul>
							<h6>Optional props</h6>
							<ul>
								<li>
									<p>
										<strong>
											theme: Record&lt;'colors' | 'fonts' , Record&lt;string,
											string&gt;&gt;
										</strong>{" "}
										- Allows you to change the default buttons colors and fonts.
										It doesn't apply to all templates. Read more about it in the{" "}
										<Link href="#styling">Styling buttons</Link> section at the
										end of this document.
									</p>
								</li>
								<li>
									<p>
										<strong>recaptchaSiteKey: string</strong> - If you enabled
										reCAPTCHA in the private area's user settings, you need to
										provide your reCAPTCHA public key, otherwise your buttons
										will result as unauthorized. Read more in the{" "}
										<Link href="#recaptcha">reCAPTCHA</Link> section at the end
										of this document.
									</p>
								</li>
								<li>
									<p>
										<strong>disableSessionId: boolean</strong>{" "}
										<strong>Default: false</strong> - If set to <em>true</em>{" "}
										Lyket won't store a unique session ID for your visitors
										making them anonymous. Lyket will then discriminate visitors
										(to tell if they already liked a button or not) only based
										on the IP address. Disabling the session ID can be useful if
										you don't want Lyket to result in your cookie detection
										software.
									</p>
								</li>
							</ul>
						</section>

						<section>
							<h4 id="buttons">Configuring the rating component</h4>
							<p>
								Once you configured the Provider you can add rating components
								anywhere in your app.
							</p>
							<p>
								Lyket rating component behaves like Trip Advisor rating
								component.
								<strong>Users can only vote once</strong> and a subsequent click
								on the same component from the same visitor will remove the
								user's vote.
							</p>
							<p>
								Rating components have two interfaces. Given the same button,
								ie. with same id-namespace combination, you may want to show two
								types of information: the average rating for that button, and an
								interface in which the user can click to leave their rating. You
								can select which interface you want to show, with the attribute{" "}
								<code>showRating</code>
							</p>
							<Code>
								{`import { RateButton } from '@lyket/react';

export Restaurant = () => {
  return (
    <div>
      <h1>My Restaurant</h1>
		<p>Average ratings for My Restaurant</p>
      <RateButton
        id="my-restaurant"
        namespace="restaurants"
				showRating="average"
      />
		<p>Rate My Restaurant</p>
      <RateButton
        id="my-restaurant"
        namespace="restaurants"
				showRating="user"
      />
      {content}
    </div>
    );
  };`}
							</Code>
							<div className="flex-left big">
								<div className="try">Average rating: </div>
								<div>
									<RateButton
										namespace="react-docs"
										id="star-rating"
										showRating="average"
									/>
								</div>
							</div>
							<p />
							<div className="flex-left big">
								<div className="try">Click to rate! →</div>
								<RateButton
									namespace="react-docs"
									id="star-rating"
									showRating="user"
								/>
							</div>
							<p />
							<h6>Required props</h6>
							<ul>
								<li>
									<strong>id</strong>: <strong>string</strong> - The API uses
									the ID to find a button. It should be unique for namespace. It
									accepts an alphanumeric string with maximum 50 characters.
								</li>
								<li>
									<strong>showRating</strong>:{" "}
									<strong>"user" | "average"</strong> - You need to specify
									whether you want to display the average users rating or the
									current user rating. Only the user rating can be clicked.
								</li>
							</ul>
							<h6>Optional props</h6>
							<ul>
								<li>
									<p>
										<strong>namespace</strong>: <strong>string</strong> - Giving
										a namespace is useful to keep buttons organised, and can be
										used to fetch statistics. Check the API docs for more
										information.
									</p>
								</li>
								<li>
									<p>
										<strong>hideCounterIfLessThan</strong>:{" "}
										<strong>number</strong> - You may want to hide the counter
										if you are not getting enough feedback. Specify the number
										of votes/claps/likes you want to receive before showing the
										counter.
									</p>
								</li>
								<li>
									<p>
										<strong>totalReviewsLabel</strong>: <strong>string</strong>{" "}
										- Default is "reviews". Customize the label that shows after
										the average rating total number of ratings
									</p>
								</li>
								<li>
									<p>
										<strong>component</strong>: <strong>React.ReactNode</strong>{" "}
										- If this prop is not provided you will see{" "}
										<strong>the Star template</strong>. To change the aspect of
										your buttons you can either choose one of the{" "}
										<Link href="#templates">ready-made templates</Link> or a{" "}
										<Link href="#custom">custom component</Link> and pass it
										through the component attribute.
									</p>
								</li>
								<li>
									<p>
										<strong>onLoad</strong>:{" "}
										<strong>
											(buttonData: UpdownButtonData | ClapButtonData |
											RateButtonData) =&gt; void
										</strong>{" "}
										- This function gets called when the button has finished
										loading. buttonData has different format depending on the
										button type.
									</p>
								</li>
								<li>
									<p>
										<strong>onPress</strong>:{" "}
										<em>(buttonData: RateButtonData) =&gt; void</em> - This
										function gets called whenever a Press action is triggered.
									</p>
								</li>
							</ul>
						</section>

						<section>
							<h4 id="templates">React rate component Templates</h4>
							<p>
								Lyket provides a set of{" "}
								<strong>out-of-the-box templates</strong>. You can see all the
								available templates in{" "}
								<Link href="/templates">the templates page</Link>
							</p>
							<p>
								By default, ie. if you don't specify any template or custom
								component, Lyket will show the Star Template.
							</p>
							<ul>
								<li>
									<strong>Star (default)</strong> - supports custom theme
								</li>
								<li>
									<strong>Heart</strong>: Heart style - supports custom theme
								</li>
							</ul>
							<p>
								Import templates directly from the button. Here is an example of
								using the Heart template on a RateButton.
							</p>
							<Code>
								{`import { RateButton } from '@lyket/react';

export StandingOvation = () => {
  return (
    <>
      <h4 id="How much do you like pizza?">Do you like pizza?</h4>
      <RateButton
        id="do-you-like-pizza"
        component={RateButton.templates.Heart}
      />
    </>
  );
};`}
							</Code>
						</section>

						<section>
							<h3 id="custom-button">Custom rate component</h3>
							<p>
								You may want to give a different flavour to your rating
								component,{" "}
								<strong>for example using your company logo as the icon</strong>
								. You can do that by{" "}
								<strong>creating your own custom button</strong>!
							</p>
							<p>These are the available props:</p>
							<ul>
								<li>
									<strong>handlePressUp</strong>:{" "}
									<em>(buttonData: ClapButtonData) =&gt; void</em>
								</li>
								<li>
									<strong>totalVotes</strong>: <em>number</em>
								</li>
								<li>
									<strong>averageRating</strong>: <em>number</em>
								</li>
								<li>
									<strong>userRating</strong>: <em>number</em>
								</li>
								<li>
									<strong>isLoading</strong>: <em>boolean</em>
								</li>
								<li>
									<strong>isCounterVisible</strong>: <em>boolean</em>
								</li>
							</ul>
							<Code>
								{`import { RateButton } from '@lyket/react';

<RateButton
	id="custom-button"
	namespace="pizza"
	onLoad={onLoad}
	onPress={onPress}
>
	{({
		handlePress,
		averageRating,
		userRating,
		isLoading,
		totalVotes,
	}) => (
		<>
			{Array.from(Array(5).keys()).map((index) => {
				if (userRating > index) {
					return (
						<button
							key={index}
							onClick={() => handlePress(index + 1)}
							disabled={isLoading}
						>
							🍕
						</button>
					);
				} else {
					return (
						<button
							onClick={() => handlePress(index + 1)}
							disabled={isLoading}
						>
							💔
						</button>
					);
				}
			})}
			<div>Your rating: {userRating}</div>
			<div>Average rating: {averageRating} stars out of 5</div>
			<div>Total votes: {totalVotes}</div>
		</>
	)}
</RateButton>`}
							</Code>

							<RateButton id="custom-rating" namespace="react-docs">
								{({
									handlePress,
									averageRating,
									userRating,
									isLoading,
									totalVotes,
								}) => (
									<>
										<div className="space--bottom-2">
											{Array.from(Array(5).keys()).map((index) => {
												if (averageRating > index) {
													return (
														<button
															key={`button-${index}`}
															className="big"
															onClick={() => handlePress(index + 1)}
															disabled={isLoading}
														>
															🍕
														</button>
													);
												} else {
													return (
														<button
															className="big"
															onClick={() => handlePress(index + 1)}
															disabled={isLoading}
														>
															💔
														</button>
													);
												}
											})}
										</div>
										<div className="space--bottom-1 bold">
											Your rating: {userRating}
										</div>
										<div className="space--bottom-1 bold">
											Average rating: {averageRating} stars out of 5
										</div>
										<div className="space--bottom-1 bold">
											Total votes: {totalVotes}
										</div>
									</>
								)}
							</RateButton>
						</section>

						<section>
							<h3 id="styling">Style your rating component templates</h3>
							<h5>Resizing</h5>
							<p>
								All button templates can be resized by wrapping them in a
								container and <strong>changing the font-size</strong>.
							</p>
							<h5>Apply your color scheme and fonts</h5>
							<p>
								Lyket uses the <a href="https://theme-ui.com/home">theme-ui</a>{" "}
								library, allowing you to provide{" "}
								<strong>your own color palette</strong> to the buttons through
								the <strong>theme</strong> prop in the provider. Colors support
								rgba, hex, and color names.
							</p>
							<Code>
								{`import { Provider, Rating } from "@lyket/react";

<Provider
  apiKey="${process.env.lyketApiKey}"
  theme={{
    colors: {
			primary: "#ffaa02",
			icon: "lightgrey",
			text: "purple",
    }
  }}
>
	<span className="try">Average rating: </span>
	<RateButton
		namespace="cooking-book"
		id="my-ramen-recipe"
		showRating="average"
	/>
	<span className="try">Click to rate! →</span>
	<RateButton
		namespace="cooking-book"
		id="my-ramen-recipe"
		showRating="user"
	/>
</Provider>
  `}
							</Code>
							<Provider
								apiKey={process.env.lyketResetApiKey}
								baseUrl={process.env.apiBaseUrl}
								theme={{
									colors: {
										primary: "#ffaa02",
										icon: "lightgrey",
										text: "purple",
									},
								}}
							>
								<div className="flex-left big">
									<span className="try">Average rating: </span>
									<RateButton
										namespace="react-docs"
										id="custom-style"
										showRating="average"
									/>
								</div>

								<div className="flex-left big">
									<span className="try">Click to rate! →</span>
									<RateButton
										namespace="react-docs"
										id="custom-style"
										showRating="user"
									/>
								</div>
							</Provider>
							<h6>Button colors</h6>
							<ul>
								<li>
									<strong>primary</strong> - Changes the color of the icon that
									shows the rating.
								</li>
								<li>
									<strong>icon</strong> - Changes the color of the inactive
									icon.
								</li>
								<li>
									<strong>text</strong> - Changes the counter text color.
								</li>
								<li>
									<strong>highlight</strong> - Changes the animation color.
								</li>
							</ul>
							<h6>Button fonts</h6>
							<ul>
								<li>
									<strong>body</strong> - Changes counter font.
								</li>
							</ul>
							<p>These are the default values:</p>
							<Code>
								{`const defaultTheme = {
	colors: {
		primary: '#22c1c3',
		secondary: '#ff00c3',
		background: 'transparent',
		text: '#292929',
		highlight: '#e095ed',
		icon: '#292929',
	},
	fonts: {
		body: 'inherit',
	},
};`}
							</Code>
						</section>

						<section>
							<h4 id="recaptcha">reCAPTCHA</h4>
							<p>
								Lyket is integrated with Google reCAPTCHA V3 to handle malicious
								use without interrupting <em>human</em> users. To enable it you
								need to provide your Google reCAPTCHA secret key in the user
								settings in the private area and add your recaptcha site key
								through the recaptchaSiteKey prop in the Provider. The key will
								be encrypted.
							</p>
							<p>
								In this way each time a user interacts with a button an
								"invisible" reCAPTCHA check will be performed, keeping your
								website safe.
							</p>
							<p>
								Be aware that if you only set reCAPTCHA secret key in the user
								settings while not passing the reCAPTCHA site key in your
								Provider, the buttons won't work.
							</p>
						</section>
					</div>
				</section>
			</div>
		</>
	);
}
