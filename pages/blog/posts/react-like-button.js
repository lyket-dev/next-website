import React, { useState } from "react";
import { LikeButton, Provider } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Code from "components/Code";
import HomeSandbox from "components/HomeSandbox";

export const meta = {
	title: "How to add a like button to your React project",
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
				<p>
					Thank you so much for liking our post on Chess! If you want to know
					more about table top games subscribe to our newsletter by entering
					your email address here.
				</p>
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
				<title>
					React like button - How to add a like button to your React project |
					Lyket
				</title>
				<meta
					content="Whether you have a blog or an ecommerce in React, instant feedback is crucial. Lyket lets you add a like button to React in a matter of seconds!"
					name="description"
				/>
				<meta name="keywords" content="React like button, React, like button" />
			</Head>
			<div className="page">
				<section className="page__section">
					<h1 className="page__kicker">React like button</h1>
					<h2 className="page__title">{meta.title}</h2>
					<div className="half__reaction">
						<LikeButton
							namespace="blog"
							id="like-button-react"
							component={LikeButton.templates.Twitter}
						/>
					</div>
				</section>
				<div className="markdown">
					<section className="page__section">
						<p>
							If you ever tried to add a <strong>like button to React</strong> I
							am sure you encountered a few obstacles on your way.
						</p>
						<ul>
							<li>
								First, you cannot get away with a{" "}
								<strong>simple toggle function</strong> for changing a like
								button score, you need to store data somewhere so if you refresh
								the page the like is still there.
							</li>
							<li>
								Second, you need to{" "}
								<strong>remember visitors interactions</strong>, so if somebody
								returns to the page they can still see their like. And you may
								be worried about how to do it without a signup while avoiding
								malicious use or bot spamming.
							</li>
							<li>
								Third, decide how to <strong>visualize</strong> and what to do
								with all this data!
							</li>
						</ul>
						<p>
							Choose a button, then copy & paste the code to see how easy it is
						</p>
						<HomeSandbox selectedTab="like" selectedTech="react" />
						<h4>Lyket in action!</h4>
						<p>
							Lyket takes care of all these nuisances for you! It lets you add
							GDPR-compliant{" "}
							<strong>
								like buttons on any React project, including NextJS, Gatsby,
								React Native
							</strong>{" "}
							and any other framework that uses React, and see the scores on
							your personal dashboard.
						</p>
						<p>
							Here is a{" "}
							<strong>
								simple snippet that you can copy and paste to try it out
							</strong>
							. Remember! We are using a test API key so remember to register
							after and get your own or you will loose your data!
						</p>
						<p>
							In this example we <strong>create a like button</strong> with id
							"how-to-beat-me-at-chess" under the "my-blog-post" category. To do
							that we import the Provider component and the LikeButton component
							where we want our button to be. Read more about configuring the
							Provider component on the <Link href="/docs/react">docs</Link>
						</p>
						<Code>
							{`import { Provider, LikeButton } from "@lyket/react";

  <Provider apiKey="${process.env.lyketResetApiKey}">
    <LikeButton
      namespace="my-blog-post"
      id="how-to-beat-me-at-chess"
    />
  </Provider>
`}
						</Code>
						<p>
							If you copy and paste this code you will see the following button.
							Try it out! If you click on it once{" "}
							<strong>it will add one like</strong>. Click on it twice and the
							like will be removed, just like the Twitter heart.
						</p>
						<div className="flex-center big">
							<div className="try">Click! →</div>
							<LikeButton namespace="blog" id="like-button-react-example" />
						</div>
						<h4>Changing templates</h4>
						<p>
							Speaking about Twitter, you can change the like button style by
							choosing one of the templates you can find in the{" "}
							<Link href="/templates">templates section</Link>. If you choose
							the Twitter template you will get the famous Twitter heart
						</p>
						<Code>
							{`<LikeButton
  namespace="my-blog-post"
  id="how-to-beat-me-at-chess"
  component={LikeButton.templates.Twitter}
/>`}
						</Code>
						<div className="flex-center big">
							<div className="try">Click! →</div>
							<LikeButton
								namespace="blog"
								id="like-button-react-example-twitter"
								component={LikeButton.templates.Twitter}
							/>
						</div>
						<h4>Changing like buttons colors</h4>
						<p>
							Some templates support color changing, for example the default
							one, so you can use your own color palette! You can do that by
							configuring the Provider component. Theme supports rgba, hex, and
							color names.
						</p>
						<p>
							The <strong>background</strong> attribute changes the background
							color of inactive like button.
						</p>
						<p>
							the <strong>primary</strong> attribute will change the background
							color of a clicked like button
						</p>
						<p>
							The <strong>text</strong> attribute changes the counter font color
							and the icon color.
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
						<h4>Creating your own button</h4>
						<p>
							You may want to give a like button to be more consistent with your
							website, for example use your own logo an icon from your own icon
							set as background for a like button!
						</p>
						<p>
							Nothing easier! Here is an example of using the pizza emoji as a
							like button!
						</p>
						<Code>
							{`import { LikeButton } from '@lyket/react';

<LikeButton
  id="pizza"
  namespace="great-things"
>
  {({ handlePress, totalLikes, userLiked, isLoading }) => {
    return (
      <div>
        <button
          className="big"
          onClick={handlePress}
          disabled={isLoading}
        >
          🍕
        </button>
        <strong>Total likes: {totalLikes}</strong>
        {userLiked && <div>Thanks for liking pizza!</div>}
      </div>
    )
  }}
</LikeButton>`}
						</Code>
						<LikeButton id="like-button-react-example-custom" namespace="blog">
							{({ handlePress, totalLikes, userLiked, isLoading }) => {
								return (
									<div className="center">
										<div className="flex-center big">
											<div className="try">Click! →</div>
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
						<h4>Engage your visitors!</h4>
						<p>
							Once you have the buttons where you want them to be, for example
							in your blog posts, or in your documentation, you can start
							thinking about how to{" "}
							<strong>put this user-feedback to good use</strong>. Maybe asking
							your visitors to <strong>subscribe to your newsletter</strong>{" "}
							after they liked one of your articles? Piece of cake!
						</p>
						<p>You can use the onPress prop to do something like this:</p>
						<Code>
							{`<LikeButton
  namespace="my-blog-post"
  id="how-to-beat-me-at-chess"
  onPress={openSubscribeModal}
/>`}
						</Code>
						{SubscribeDialog}
						<p>
							Try to click on the button! It will open a dialog with the
							subscription form!
						</p>
						<div className="flex-center big">
							<div className="try">Click! →</div>
							<LikeButton
								namespace="blog"
								id="like-button-react-example-onpress"
								onPress={openSubscribeModal}
							/>
						</div>
						<h4>The other button types</h4>
						<p>
							Like button is just one of the three kind of buttons that Lyket
							offers. Each button has a different behaviour and can get you a
							different kind af feedback. See also{" "}
						</p>
						<ul>
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
							<li>
								<Link href="/blog/posts/star-rating-react">
									How to create a Star rating component with React
								</Link>
							</li>
						</ul>
					</section>
				</div>
			</div>
		</>
	);
}
