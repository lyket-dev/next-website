import React from "react";
import { UpdownButton } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";

export const meta = {
	title: "How to add a like/dislike button to any NextJS website with Lyket",
};

export default function Post() {
	return (
		<>
			<Head>
				<title>Lyket - Add a like/dislike button to a NextJS website</title>
				<meta
					property="og:description"
					content="Lyket lets you add privacy compliant like/dislike buttons to any NextJS project in a matter of seconds"
					name="description"
				/>
			</Head>
			<div className="page">
				<section className="page__section">
					<h2 className="page__title">{meta.title}</h2>
					<div className="half__reaction">
						<UpdownButton
							namespace="blog"
							id="like-button-gatsby"
							component={UpdownButton.templates.Reddit}
						/>
					</div>
				</section>
				<div className="avatar" />
				<section className="page__section">
					<div className="markdown">
						<p>
							Lyket is the ultimate tool to quickly implement GDPR-compliant
							like/dislike buttons on NextJS. From the moment you create the
							button our server will keep track of every visitor interaction
							without storing their personal data.
						</p>
						<p>
							To get started you just need to signup to Lyket and get your
							personal public API key. It is just a matter of seconds then to
							start receiving feedback on your website!
						</p>

						<h2>Installation using NextJS</h2>

						<p>To install the NextJS component run</p>
						<pre>
							<code className="language-javascript">yarn add @lyket/react</code>
						</pre>
						<p>or</p>
						<pre>
							<code className="language-javascript">
								npm install @lyket/react
							</code>
						</pre>
						<h2>Configuration</h2>

						<h3>Set up the provider</h3>
						<p>
							The provider is in charge of loading the client that will be used
							to make requests to Lyket's server using your personal public API
							key.
						</p>

						<pre>
							<code className="language-javascript">
								{`import {Provider} from '@lyket/react';

NextJSDOM.render(
  <Provider apiKey="[YOUR-API-KEY]">
    <App />
  </Provider>,
  document.getElementById('root')
);`}
							</code>
						</pre>

						<h5>Required props</h5>
						<ul>
							<li>
								<strong>apiKey</strong>: you can get your public API key by
								registering on{" "}
								<a href={`${process.env.appBaseUrl}/signup`}>lyket.dev</a>
							</li>
						</ul>
						<h5>Optional props</h5>
						<ul>
							<li>
								<p>
									<strong>theme</strong>: This prop allows you to provide your
									own style to the default theme. Read more about it in the{" "}
									<em>Styling like/dislike buttons</em> section at the end of
									this article
								</p>
							</li>
							<li>
								<p>
									<strong>recaptchaSiteKey</strong>: if you enabled reCAPTCHA
									you need to provide your public key. Read more at the end of
									this document
								</p>
							</li>
						</ul>
						<h3>Create a like/dislike button</h3>
						<p>
							When the NextJS component is mounted, a fetch request is made to
							retrieve info about the like/dislike button with that certain id
							and namespace. If no button is found, a new resource is created
							with the id/namespace identifier.
						</p>
						<p>
							Notice that the server will create a new resource for every
							different and unique identifier, so if you change id or namespace
							the new button won’t inherit the votes.
						</p>
						<p>
							Every time a user clicks on a button, the NextJS component will
							update the likes counter and flag that the user has already voted.
							Visitors don't have to signup to any third party service.
						</p>
						<p>
							Updown buttons behave like Reddit buttons. Users can only like or
							dislike once and a subsequent call from the same user will remove
							the user's like/dislike. Here is an example of a like/dislike
							button with id "how-to-beat-me-at-chess", namespace "post" and a
							Reddit-like template.
						</p>
						<pre>
							<code className="language-javascript">
								{`import { UpdownButton } from '@lyket/react';

export default BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <UpdownButton
        id="how-to-beat-me-at-chess"
        namespace="post"
        component={UpdownButton.templates.Reddit}
      />
      {content}
    </div>
  );
};`}
							</code>
						</pre>
						<h5>Required like/dislike button props</h5>
						<ul>
							<li>
								<strong>id</strong>: The API uses the ID to determine which
								resource you want to interact with. It should be unique. It
								accepts an alphanumeric string with maximum 50 characters.
							</li>
						</ul>
						<h5>Optional props</h5>
						<ul>
							<li>
								<p>
									<strong>namespace</strong>: Giving a namespace is useful to
									keep buttons organized, and can be used to fetch statistics on
									your buttons filtering by namespace. Check the API docs for
									more information.
								</p>
							</li>
							<li>
								<p>
									<strong>hideCounterIfLessThan</strong>: You may not want to
									show a counter if you are not getting enough feedback. Specify
									the number of likes you want to receive before showing the
									counter.
								</p>
							</li>
							<li>
								<p>
									<strong>component</strong>: To change the aspect of the
									default button you can either provide one of the ready-made{" "}
									<strong>templates</strong> that Lyket provides or a{" "}
									<strong>custom React component</strong> in the component
									attribute. Let's go deeper on this crucial prop.
								</p>
							</li>
						</ul>
						<h4>Templates</h4>
						<p>
							A number of like/dislike button templates are provided to use
							Lyket out-of-the-box. You can see all the available options on{" "}
							<Link href="/templates">the templates section</Link>
						</p>
						<ul>
							<li>
								<strong>Simple</strong>: default UpdownButton - supports themes
								prop
							</li>
							<li>
								<strong>Reddit</strong>: Reddit style UpdownButton
							</li>
						</ul>
						<p>
							Import templates directly from the button component. Here is an
							example of using templates.
						</p>
						<pre>
							<code className="language-javascript">
								{`import { UpdownButton } from '@lyket/react';

export default StandingOvation = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <UpdownButton
        id="do-you-like-pizza"
        component={UpdownButton.templates.Reddit}
      />
    </>
  );
};`}
							</code>
						</pre>
						<h4>Children or custom component</h4>
						<p>
							You may want to give a different aspect to a button, for example
							using your logo as icon or add a callback after a user clicks. You
							can do that by providing your own component!
						</p>
						<p>
							Here are a few examples of using children for each button type.
							You can pass a component also through the component prop. Here is
							an example
						</p>
						<pre>
							<code className="language-javascript">
								{`import { UpdownButton } from '@lyket/react';

export default Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <UpdownButton id="do-you-like-pizza" namespace="faq" hideCounterIfLessThan={1}>
        ({
          handlePressUp,
          handlePressDown,
          totalScore,
          userVoteDirection,
          isLoading,
          isCounterVisible
        }) => {
          return (
            <>
              <button onClick={handlePressUp} disabled={isLoading}>Of course! 🍕🍕🍕</button>
              <button onClick={handlePressDown} disabled={isLoading}>Naaah</button>
              {isCounterVisible && <div>Total: {totalScore}</div>}
              {userVoteDirection > 0 && <div>I knew you were a good person!</div>}
              {userVoteDirection < 0 && <div>I express my disgust</div>}
            </>
          )
        }
      </UpdownButton>
    </>
  )
};`}
							</code>
						</pre>

						<h2>Styling buttons</h2>
						<h3>Resizing</h3>
						<p>
							UpdownButtons can be resized by wrapping them in a container and
							changing the font-size.
						</p>
						<h3>Applying your own theme to the default template</h3>
						<p>
							Lyket uses the <a href="https://theme-ui.com/home">theme-ui</a>{" "}
							library, allowing you to provide your own theme to the buttons
							through the <strong>theme</strong> prop in the provider.
						</p>
						<p>
							These are the default values, you can change any of these
							parameters by passing your own object:
						</p>
						<pre>
							<code className="language-js">
								{`const defaultTheme = {
  colors: {
    background: '#e0e0e0',
    text: '#292929',
    primary: '#22c1c3',
    secondary: '#ff00c3',
    highlight: '#e095ed',
  },
  fonts: {
    body: 'inherit',
    heading: 'inherit',
    monospace: 'inherit',
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
};`}
							</code>
						</pre>
						<p>
							The Provider component makes a deep merge, so you can overwrite
							the theme object totally or partially.
						</p>
						<p>
							There are a few templates that support theming. Read the templates
							detail to know which ones.
						</p>
						<h2>reCAPTCHA</h2>
						<p>
							Lyket is integrated with Google reCAPTCHA V3 to handle malicious
							use without interrupting <em>human</em> users. To enable it you
							need to provide your Google reCAPTCHA secret key in the user
							settings in the private area and add your recaptcha site key
							through the recaptchaSiteKey prop in the Provider. The key will be
							encrypted.
						</p>
					</div>
				</section>
			</div>
		</>
	);
}
