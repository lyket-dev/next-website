import React, { useState } from "react";
import { LikeButton, Provider } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export const meta = {
  title: "How to add a like button to any React website with Lyket"
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
        <title>React like button | Lyket</title>
        <meta
          property="og:description"
          content="Lyket is the ultimate tool to add like buttons to any React project in a matter of seconds"
          name="description"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <LikeButton
              namespace="blog"
              id="like-button-react"
              component={LikeButton.templates.Twitter}
            />
          </div>
          <p className="page__text"></p>
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              If you ever tried to add a <strong>like button to React</strong> I
              am sure you encountered a few obstacles on your way.
            </p>
            <p>
              First, you cannot get away with a{" "}
              <strong>simple toggle function</strong> for changing a like button
              score, you need to store data somewhere so if someone refreshes
              the page their vote is still there. So you need to build some
              stack, with a <strong>DB and some architecture</strong>.
            </p>
            <p>
              Second, you need to be able to{" "}
              <strong>remember visitors interactions</strong>, so if somebody
              returns to the page they can still see their like. And you may be
              worried about how to do it without a signup while avoiding
              malicious use or bot spamming.
            </p>
            <p>
              Third, decide how to visualize and what to do with all this data!
            </p>
            <h3>Lyket in action!</h3>
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
              . Remember! It uses a test API key so remember to register after
              and get your own or you will loose your data!
            </p>
            <p>
              In this example we create a like button with id
              "how-to-beat-me-at-chess" under the "my-blog-post" category. To do
              that we import the Provider component to configure Lyket and the
              LikeButton component where we want our button to be.
            </p>
            <pre>
              <code class="language-javascript">
                {`import { Provider, LikeButton } from "@lyket/react";

  <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
    <LikeButton
      namespace="my-blog-post"
      id="how-to-beat-me-at-chess"
    />
  </Provider>
`}
              </code>
            </pre>
            <p>This code will generate this button.</p>{" "}
            <p>
              Try it out! If you click on it once{" "}
              <strong>it will add one like</strong>. Click on it twice and the
              like will be removed, just like Twitter for example.
            </p>
            <div className="center">
              <LikeButton namespace="blog" id="like-button-react-example" />
            </div>
            <h3>Changing templates</h3>
            <p>
              You can change the style by choosing one of the templates you can
              find{" "}
              <Link href="/templates">
                <a>in the templates section</a>
              </Link>
              . So if you choose the Twitter button
            </p>
            <pre>
              <code class="language-javascript">
                {`<LikeButton
  namespace="my-blog-post"
  id="how-to-beat-me-at-chess"
  component={LikeButton.templates.Twitter}
/>`}
              </code>
            </pre>
            <p>You will get a like button that looks like this</p>
            <div className="center">
              <LikeButton
                namespace="blog"
                id="like-button-react-example-twitter"
                component={LikeButton.templates.Twitter}
              />
            </div>
            <h3>Changing colors</h3>
            <p>
              You can also change colors of the default template by configuring
              the Provider, like this.
            </p>
            <pre>
              <code class="language-javascript">
                {`import { Provider, LikeButton } from "@lyket/react";

<Provider
  apiKey="acc0dbccce8e557db5ebbe6d605aaa"
  theme={{
    colors: {
      background: "aliceblue",
      text: "violet",
      primary: "orange"
    }
  }}
>
  <LikeButton
    namespace="my-blog-post"
    id="how-to-beat-me-at-chess"
  />
</Provider>
  `}
              </code>
            </pre>
            <div className="center">
              <Provider
                apiKey="Xkp5R0w+6uY+OftTTVEQ2BkiwUw="
                theme={{
                  colors: {
                    background: "aliceblue",
                    text: "violet",
                    primary: "orange"
                  }
                }}
              >
                <LikeButton
                  namespace="blog"
                  id="like-button-react-example-colors"
                />
              </Provider>
            </div>
            <h2>Creating your own button</h2>
            <p>
              You may want to give a like button to be more consistent with your
              website, for example use your own logo an icon from your own icon
              set as background for a like button!
            </p>
            <p>
              Nothing easier! Here is an example of using the pizza emoji as a
              like button!
            </p>
            <pre>
              <code class="language-javascript">
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
        <div>Total likes: {totalLikes}</div>
        {userLiked && <div>Thanks for liking pizza!</div>}
      </div>
    )
  }}
</LikeButton>`}
              </code>
            </pre>
            <div className="center">
              <LikeButton
                id="like-button-react-example-custom"
                namespace="blog"
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
                      <div>Total likes: {totalLikes}</div>
                      {userLiked && <div>Great! I like pizza as well!</div>}
                    </div>
                  );
                }}
              </LikeButton>
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
              <Link href="/docs/react">
                <a>React documentation</a>
              </Link>
              .
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
            <p>You can use the onPress prop to do something like this:</p>
            <code>
              <pre>
                {`<LikeButton
  namespace="my-blog-post"
  id="how-to-beat-me-at-chess"
  onPress={openSubscribeModal}
/>`}
              </pre>
            </code>
            {SubscribeDialog}
            <p>
              Try to click on the button! It will open a dialog to ask for a
              subscription!
            </p>
            <div className="flex">
              <h3>Click! →</h3>
              <LikeButton
                namespace="blog"
                id="like-button-react-example-onpress"
                onPress={openSubscribeModal}
              />
            </div>
            <h3>The other button types</h3>
            <p>
              Like button is just one of the three kind of buttons that Lyket
              offers. Each button has a different behaviour and can get you a
              different kind af feedback. See also{" "}
            </p>
            <ul>
              <li>
                <Link href="/blog/posts/react-clap-button">
                  <a>How to create a React clap button</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/react-like-dislike-button">
                  <a>How to create a React like dislike button</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
