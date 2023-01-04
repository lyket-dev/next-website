import React, { useState } from "react";
import { QuickReactDocsMenu } from "components/QuickDocsMenu";
import Code from "components/Code";
import Head from "next/head";
import Link from "next/link";
import { LikeButton, Provider } from "@lyket/react";
import HomeSandbox from "components/HomeSandbox";

export default function Docs() {
	return (
		<>
			<Head>
				<title>Instantly implement like buttons on React | Lyket</title>
				<meta
					content="Lyket is the ultimate tool to add, manage and track like buttons on any React project."
					name="description"
				/>
			</Head>
			<div className="page">
				<div className="page__section--gradient" />
				<div className="docs__title__container">
					<h1 className="page__kicker">like button React</h1>
					<h2 className="docs__title">Lyket like button documentation</h2>
					<div className="docs__menu__container">
						<QuickReactDocsMenu />
					</div>
				</div>
				<section className="page__section">
					<div className="docs">
						<div className="markdown docs__menu__right">
							<p>
								Lyket is the ultimate tool to add like buttons to your React
								project! The library allows a{" "}
								<strong>great deal of customization</strong> with just a few
								lines of code and it's{" "}
								<strong>compatible with all React frameworks</strong> like
								NextJS, Gatsby, create-react-app.
							</p>

							<section>
								<HomeSandbox
									selectedTab="like"
									selectedTech="react"
									showMenu={false}
								/>
							</section>

							<p>
								If you want to find out how to use the{" "}
								<strong>React library in detail</strong> you came to the right
								place. If you prefer to{" "}
								<strong>learn with examples and ready-made snippets</strong> to
								copy and paste, you can visit:
							</p>
							<ul>
								<li>
									<Link href="/blog/posts/react-like-button">
										How to add like buttons to a React project
									</Link>
								</li>
							</ul>

							<section>
								<h3 id="how-buttons-work">How Lyket like buttons work</h3>
								<p>
									All Lyket buttons share these{" "}
									<strong>basic behaviors and features:</strong>
								</p>
								<ul>
									<li>
										<p>
											As soon as a button component is mounted, a fetch request
											is made to retrieve info on the button that{" "}
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
											<strong>
												Lyket will flag that the visitor has voted
											</strong>
											. Lyket uses an unique random ID stored in the visitor's
											browser localStorage to identify the visitor, with no need
											to signup or to use any third party service. To disable
											the session ID, and therefore use only the IP address to
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
											using your personal API key. If left empty Lyket will
											accept requests coming from all domains.
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
									configure it using your personal public API key that you can
									get after registering to Lyket
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
										<strong>apiKey</strong>: <strong>string</strong> - You can
										get your public API key by registering on{" "}
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
											- Allows you to change the default buttons colors and
											fonts. It doesn't apply to all templates. Read more about
											it in the <Link href="#styling">Styling buttons</Link>{" "}
											section at the end of this document.
										</p>
									</li>
									<li>
										<p>
											<strong>recaptchaSiteKey: string</strong> - If you enabled
											reCAPTCHA in the private area's user settings, you need to
											provide your reCAPTCHA public key, otherwise your buttons
											will result as unauthorized. Read more in the{" "}
											<Link href="#recaptcha">reCAPTCHA</Link> section at the
											end of this document.
										</p>
									</li>
									<li>
										<p>
											<strong>disableSessionId: boolean</strong>{" "}
											<strong>Default: false</strong> - If set to <em>true</em>{" "}
											Lyket won't store a unique session ID for your visitors
											making them anonymous. Lyket will then discriminate
											visitors (to tell if they already liked a button or not)
											only based on the IP address. Disabling the session ID can
											be useful if you don't want Lyket to result in your cookie
											detection software.
										</p>
									</li>
								</ul>
							</section>

							<section>
								<h4 id="buttons">Configuring like buttons</h4>
								<p>
									Once you configured the Provider you can start adding like
									buttons anywhere in your app.
								</p>
								<p>
									Like buttons behave like Twitter like buttons.
									<strong>Visitors can only like once</strong> and a subsequent
									request from the same visitor will remove the visitor's like.
								</p>
								<Code>
									{`import { LikeButton } from '@lyket/react';

export BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <LikeButton
        id="how-to-reduce-footprint"
        namespace="post"
      />
      {content}
    </div>
    );
  };`}
								</Code>
								<div className="flex-center big">
									<div className="try">Try it! →</div>
									<LikeButton namespace="react-docs" id="react-like-button" />
								</div>
								<h6>Required props</h6>
								<ul>
									<li>
										<strong>id</strong>: <strong>string</strong> - The API uses
										the ID to find a button. It should be unique for namespace.
										It accepts an alphanumeric string with maximum 50
										characters.
									</li>
								</ul>
								<h6>Optional props</h6>
								<ul>
									<li>
										<p>
											<strong>namespace</strong>: <strong>string</strong> -
											Giving a namespace is useful to keep buttons organised,
											and can be used to fetch statistics. Check the API docs
											for more information.
										</p>
									</li>
									<li>
										<p>
											<strong>hideCounterIfLessThan</strong>:{" "}
											<strong>number</strong> - You may want to hide the counter
											if you are not getting enough feedback. Specify the number
											of votes/claps/likes you want to receive before showing
											the counter.
										</p>
									</li>
									<li>
										<p>
											<strong>component</strong>:{" "}
											<strong>React.ReactNode</strong> - If this prop is not
											provided you will see <strong>the Simple template</strong>
											. To change the aspect of your buttons you can either
											choose one of the{" "}
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
												LikeButtonData) =&gt; void
											</strong>{" "}
											- This function gets called when the button has finished
											loading. buttonData has different format depending on the
											button type.
										</p>
									</li>
									<li>
										<p>
											<strong>onPress</strong>:{" "}
											<em>(buttonData: LikeButtonData) =&gt; void</em> - This
											function gets called whenever a Press action is triggered.
										</p>
									</li>
								</ul>
							</section>

							<section>
								<h4 id="templates">Like button Templates</h4>
								<p>
									Lyket provides a set of{" "}
									<strong>out-of-the-box templates</strong>. You can see all the
									available templates in{" "}
									<Link href="/templates">the templates page</Link>
								</p>
								<p>
									By default, ie. if you don't specify any template or custom
									component, Lyket will show the Simple Template.
								</p>
								<ul>
									<li>
										<strong>Simple (default)</strong> - supports custom theme
									</li>
									<li>
										<strong>Twitter</strong>: Twitter style
									</li>
									<li>
										<strong>Chevron</strong>: Chevron style - supports custom
										theme
									</li>
									<li>
										<strong>Heart</strong>: Heart style - supports custom theme
									</li>
								</ul>
								<p>
									Import templates directly from the button. Here is an example
									of using the Twitter template on a LikeButton.
								</p>
								<Code>
									{`import { LikeButton } from '@lyket/react';

export StandingOvation = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
      <LikeButton
        id="do-you-like-pizza"
        component={LikeButton.templates.Twitter}
      />
    </>
  );
};`}
								</Code>
							</section>

							<h3 id="custom-button">Custom like buttons</h3>
							<p>
								You may want to give a different flavour to your like button,{" "}
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
									<strong>totalScore</strong>: <em>number</em>
								</li>
								<li>
									<strong>userLiked</strong>: <em>boolean</em>
								</li>
								<li>
									<strong>isLoading</strong>: <em>boolean</em>
								</li>
								<li>
									<strong>isCounterVisible</strong>: <em>boolean</em>
								</li>
							</ul>
							<Code>
								{`import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
      <LikeButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={1}
      >
        {({
          handlePress,
          totalLikes,
          userLiked,
          isLoading,
          isCounterVisible
        }) => (
          <>
            <button onClick={handlePress} disabled={isLoading}>
              🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>Great! I like pizza as well!</div>}
          </>
        )}
      </LikeButton>
    </>
  )
};`}
							</Code>
							<LikeButton
								namespace="react-docs"
								id="like-button-react-example-custom"
							>
								{({ handlePress, totalLikes, userLiked, isLoading }) => {
									return (
										<div className="center">
											<div className="flex-center big">
												<div className="try">Try! →</div>
												<button
													className="huge"
													onClick={handlePress}
													disabled={isLoading}
												>
													🍕
												</button>
											</div>
											<strong>Total likes: {totalLikes}</strong>
											{userLiked && <div>Great! I like pizza as well!</div>}
										</div>
									);
								}}
							</LikeButton>

							<section>
								<h3 id="styling">
									Apply custom styling to like button templates
								</h3>
								<h5>Resizing</h5>
								<p>
									All button templates can be resized by wrapping them in a
									container and <strong>changing the font-size</strong>.
								</p>
								<h5>Apply your color scheme and fonts</h5>
								<p>
									Lyket uses the{" "}
									<a href="https://theme-ui.com/home">theme-ui</a> library,
									allowing you to provide{" "}
									<strong>your own color palette</strong> to the buttons through
									the <strong>theme</strong> prop in the provider. Colors
									support rgba, hex, and color names.
								</p>
								<Code>
									{`import { Provider, LikeButton } from "@lyket/react";

<Provider
	apiKey="${process.env.lyketResetApiKey}"
	theme={{
		colors: {
			background: "#b8fff3",
			text: "violet",
			primary: "rgba(255, 224, 138, 0.4)"
		}
	}}
>
	<LikeButton
		namespace="my-blog-post"
		id="how-to-beat-me-at-chess"
	/>
</Provider>
	`}
								</Code>
								<div className="flex-center big">
									<div className="try">Click! →</div>
									<Provider
										apiKey={process.env.lyketPublicApiKey}
										baseUrl={process.env.apiBaseUrl}
										theme={{
											colors: {
												background: "#b8fff3",
												text: "violet",
												primary: "rgba(255, 224, 138, 0.4)",
											},
										}}
									>
										<LikeButton
											namespace="blog"
											id="like-button-react-example-colors"
										/>
									</Provider>
								</div>
								<h6>Button colors</h6>
								<ul>
									<li>
										<strong>primary</strong> - Changes the background color of
										the "like" button, when user has liked.
									</li>
									<li>
										<strong>secondary</strong> - Changes the background color of
										the "dislike" button, when user has disliked.
									</li>
									<li>
										<strong>background</strong> - Changes the background color
										of the inactive button.
									</li>
									<li>
										<strong>text</strong> - Changes the counter text color.
									</li>
									<li>
										<strong>icon</strong> - Changes the icon's color.
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
									Lyket is integrated with Google reCAPTCHA V3 to handle
									malicious use without interrupting <em>human</em> users. To
									enable it you need to provide your Google reCAPTCHA secret key
									in the user settings in the private area and add your
									recaptcha site key through the recaptchaSiteKey prop in the
									Provider. The key will be encrypted.
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
					</div>
				</section>
			</div>
		</>
	);
}
