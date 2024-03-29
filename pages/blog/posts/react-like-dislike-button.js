import React, { useState } from "react";
import Link from "next/link";
import Head from "next/head";
import { UpdownButton, Provider } from "@lyket/react";
import Code from "components/Code";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export const meta = {
	title: "How to add like/dislike buttons to any React website with Lyket",
};

export default function Post() {
	const [dialogOpen, setDialog] = useState(false);

	const openSubscribeModal = () => {
		setTimeout(() => setDialog(true), 500);
	};

	const SubscribeDialog = (
		<Dialog
			open={dialogOpen}
			onClose={() => setDialog(false)}
			className="markdown"
		>
			<DialogTitle id="form-dialog-title">
				Subscribe to our newsletter!
			</DialogTitle>
			<DialogContent>
				<p>Thanks for liking our blog post! Leave us your email for more!</p>
				<TextField
					autoFocus
					margin="dense"
					id="name"
					label="Email Address"
					type="email"
					fullWidth
				/>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => setDialog(false)} color="primary">
					Cancel
				</Button>
				<Button onClick={() => setDialog(false)} color="primary">
					Subscribe
				</Button>
			</DialogActions>
		</Dialog>
	);

	return (
		<>
			<Head>
				<title>React like/dislike button | Lyket</title>
				<meta
					content="Lyket lets you add privacy compliant like dislike buttons to any React project in a matter of seconds"
					name="description"
				/>
				<meta
					name="keywords"
					content="React like dislike button, React, like dislike button"
				/>
			</Head>
			<div className="page">
				<section className="page__section">
					<h1 className="page__kicker">React like/dislike button</h1>
					<h2 className="page__title">{meta.title}</h2>
					<div className="half__reaction">
						<UpdownButton namespace="blog" id="like-dislike-button-react" />
					</div>
				</section>
				<section className="page__section">
					<div className="markdown">
						<p>
							<strong>Like/dislike buttons</strong> are crucial if you want to
							let visitors judge your content. For example, in a documentation
							you want to know if the instructions you are providing to use your
							service are clear enough.
						</p>
						<p>
							In this post I will try to give a few like/dislike button examples
							that you can <strong>copy and paste directly in your code</strong>{" "}
							to see the magic happen.
						</p>
						<h4>What Lyket can do</h4>
						<p>
							If you were trying to implement a feedback system by yourself in
							your React project, you would need to be aware of three main
							things
						</p>
						<ul>
							<li>
								<strong>Storing preferences in a database</strong>. Otherwise
								simply clearing the local storage will result in data loss.
							</li>
							<li>
								<strong>Track visitors interactions</strong>, so if a visitor
								returns to the page their preference is still there.
							</li>
							<li>
								<strong>Visualize</strong> all this information!
							</li>
						</ul>
						<p>
							Lyket is a tool for adding like/dislike buttons to NextJS, Gatsby,
							or React Native website without any of these problems :D
						</p>
						<p>
							It stores every visitor interaction in its database and then
							<strong>you are in complete control of your data</strong>. You can
							visualize it in your private area, import and export anytime.
							Moreover you don't have to worry about privacy because Lyket does
							not store sensible data making it <strong>GDPR-compliant</strong>.
						</p>
						<h4>A simple like/dislike button</h4>
						<p>
							Let's start with the the <strong>minimal configuration</strong>.
							You can copy and paste this snippet into your code or you can see
							the result here. Remember! We are using a test API key so remember
							to register after and get your own or you will loose your data!
						</p>
						<p>
							First you should get an API key be registering to Lyket and use it
							to configure the Provider component. In this example we will use a
							test API key that resets data every day so remember to get your
							own! Read more about configuring the Provider component on the{" "}
							<Link href="/docs/react">docs</Link>
						</p>
						<p>
							Then, we choose an id, in this case it's
							"like-dislike-buttons-api" that belongs to the "my-documentation"
							category. It's all you need to get started!
						</p>
						<Code>
							{`import { Provider, UpdownButton } from "@lyket/react";

<Provider apiKey="${process.env.lyketResetApiKey}">
  <UpdownButton
    namespace="my-documentation"
    id="like-dislike-buttons-api"
  />
</Provider>`}
						</Code>
						<p>
							If you copy and paste this code you will see the following button.
							Try it out! If you click on it once{" "}
							<strong>it will add one like or dislike</strong>. Click on it
							twice and the like/dislike will be removed, just like Reddit.
						</p>
						<div className="center big">
							<UpdownButton
								namespace="blog"
								id="like-dislike-button-react-example"
							/>
						</div>
						<h4>Changing templates</h4>
						<p>
							Speaking about Reddit, you can change the like/dislike button
							style by choosing one of the templates you can find in the{" "}
							<Link href="/templates">templates section</Link>. If you choose
							the Reddit template you will get the famous Reddit arrows, like
							this.
						</p>
						<Code>
							{`<UpdownButton
  namespace="my-documentation"
  id="like-dislike-buttons-api"
  component={UpdownButton.templates.Reddit}
/>`}
						</Code>
						<div className="center big">
							<UpdownButton
								namespace="blog"
								id="like-dislike-button-react-example-reddit"
								component={UpdownButton.templates.Reddit}
							/>
						</div>
						<h4>Changing colors</h4>
						<p>
							Some templates support color changing, for example the default
							one, so you can <strong>use your own color palette</strong>! You
							can do that by configuring the Provider component. Theme supports
							rgba, hex, and color names.
						</p>
						<p>
							The <strong>background</strong> attribute changes the background
							color of inactive like/dislike button.
						</p>
						<p>
							the <strong>primary</strong> attribute will change the background
							color of a clicked like button
						</p>
						<p>
							the <strong>secondary</strong> attribute will change the
							background color of a clicked dislike button
						</p>
						<p>
							The <strong>text</strong> attribute changes the counter font color
							and the icon color.
						</p>
						<pre>
							<Code>
								{`import { Provider, UpdownButton } from "@lyket/react";

<Provider
  apiKey="${process.env.lyketResetApiKey}"
  theme={{
    colors: {
      background: "rgba(255, 224, 138, 0.4)",
      text: "violet",
      primary: "#b8fff3"
      secondary: "rgba(220, 234, 108, 0.6)"
    }
  }}
>
  <UpdownButton
    namespace="my-documentation"
    id="like-dislike-buttons-api"
  />
</Provider>
  `}
							</Code>
						</pre>
						<div className="center big">
							<Provider
								apiKey={process.env.lyketPublicApiKey}
								baseUrl={process.env.apiBaseUrl}
								theme={{
									colors: {
										background: "rgba(255, 224, 138, 0.4)",
										text: "violet",
										primary: "#b8fff3",
										secondary: "rgba(220, 234, 108, 0.6)",
									},
								}}
							>
								<UpdownButton
									namespace="blog"
									id="like-dislike-button-react-example-colors"
								/>
							</Provider>
						</div>
						<h4>Creating your own button</h4>
						<p>
							You may want to give a like/dislike button to be more consistent
							with your website, for example use your own logo an icon from your
							own icon set as background for a like/dislike button!
						</p>
						<p>
							Nothing easier! Here is an example of using the pizza emoji as a
							like button!
						</p>
						<Code>
							{`import { UpdownButton } from '@lyket/react';

<UpdownButton
  id="pizza"
  namespace="great-things"
>
  {({ handlePressUp,handlePressUp, totalScore, userVoteDirection, isLoading }) => {
    return (
      <div>
        <button
          className="big"
          onClick={handlePressUp}
          disabled={isLoading}
        >
          + 🍕
        </button>
        <span> or </span>
        <button
          className="big"
          onClick={handlePressDown}
          disabled={isLoading}
        >
          - 🍕
        </button>
        <div>Total votes: {totalScore}</div>
        {userVoteDirection > 0 ? <div>More pizza!</div> : <div>Less pizza!</div>}
      </div>
    )
  }}
</UpdownButton>`}
						</Code>
						<div className="center big">
							<UpdownButton
								id="like-dislike-button-react-example-custom"
								namespace="blog"
							>
								{({
									handlePressUp,
									handlePressDown,
									totalScore,
									userVoteDirection,
									isLoading,
								}) => {
									return (
										<div>
											<button
												className="big"
												onClick={handlePressUp}
												disabled={isLoading}
											>
												+ 🍕
											</button>
											<span> or </span>
											<button
												className="big"
												onClick={handlePressDown}
												disabled={isLoading}
											>
												- 🍕
											</button>
											<div>Total votes: {totalScore}</div>
											{userVoteDirection > 0 ? (
												<div>More pizza!</div>
											) : (
												<div>Less pizza!</div>
											)}
										</div>
									);
								}}
							</UpdownButton>
						</div>
						<p>Now you can click on pizza and see your score growing!</p>{" "}
						<p>Where? On the dashboard of course!</p>
						<p>
							Once you are registered you can access your private area and take
							a look on all the buttons you created and all the likes that a
							button has received. If you are already registered{" "}
							<a href="https://app.lyket.dev/dashboard">take a look now</a>!
						</p>
						<p>
							For more details about Lyket's React like button you can read our{" "}
							<Link href="/docs/react">React documentation</Link>.
						</p>
						<h3>Engage your visitors!</h3>
						<p>
							Once you have the buttons where you want them to be, for example
							in your blog posts, or in your documentation, you can start
							thinking about how to{" "}
							<strong>put this user-feedback to good use</strong>. Maybe asking
							your visitors to <strong>subscribe to your newsletter</strong>{" "}
							after they liked one of your articles? Piece of cake!
						</p>
						<p>You can use the onPressUp prop to do something like this:</p>
						<Code>
							{`<UpdownButton
  namespace="my-documentation"
  id="like-dislike-buttons-api"
  onPressUp={openSubscribeModal}
/>`}
						</Code>
						{SubscribeDialog}
						<p>
							Try to click on the button! It will open a dialog with the
							subscription form!
						</p>
						<div className="flex-center big">
							<h4>Click! →</h4>
							<UpdownButton
								namespace="blog"
								id="like-dislike-button-react-example-onpress"
								onPressUp={openSubscribeModal}
							/>
						</div>
						<h4>The other button types</h4>
						<p>
							Like/dislike button is just one of the three kind of buttons that
							Lyket offers. Each button has a different behaviour and can get
							you a different kind af feedback. See also{" "}
						</p>
						<ul>
							<li>
								<Link href="/blog/posts/clap-button">
									How to create a React clap button
								</Link>
							</li>
							<li>
								<Link href="/blog/posts/react-like-button">
									How to create a React like button
								</Link>
							</li>
							<li>
								<Link href="/blog/posts/star-rating-react">
									How to create a Star rating component with React
								</Link>
							</li>
						</ul>
					</div>
				</section>
			</div>
		</>
	);
}
