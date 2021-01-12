import React, { useState } from "react";
import { Provider, ClapButton } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";
import Code from "components/Code";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";

export const meta = {
  title: "How to add a clap button to a React website with Lyket"
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
          Thank you so much for liking our post! Subscribe to our newsletter by
          entering your email address here.
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
        <title>Lyket - Add a clap button to your React website</title>
        <meta
          property="og:description"
          content="Your React website could use some loving? Lyket lets you add privacy compliant clap buttons to any React project in a matter of seconds"
          name="description"
        />
      </Head>

      <div className="page">
        <section className="page__section">
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <ClapButton
              namespace="blog"
              id="clap-button-react"
              component={ClapButton.templates.Medium}
            />
          </div>
          <p className="page__text"></p>
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              Clap buttons are simply great. They are{" "}
              <strong>perfect for blogs and portfolios</strong> because content
              writers can get a flood of positive reinforcement and visitors can
              express all their appreciation. Medium uses them for every of
              their blog post and they became quite succesful and popular.
            </p>
            <p>
              But if you ever tried to add a{" "}
              <strong>clap button to your React</strong> project, I am sure you
              encountered some difficulties.
            </p>
            <ul>
              <li>
                Store claps somewhere otherwise they will be gone after a simple
                page refresh. So you need a{" "}
                <strong>database and some architecture</strong>.
              </li>
              <li>
                See <strong>who has already clapped</strong> and how many times,
                so if somebody returns to the page they can still see their
                claps.
              </li>
              <li>
                Decide how to <strong>visualize</strong> and what to do with all
                this appreciation tokens!
              </li>
            </ul>
            <h3>Lyket solves all your problems</h3>
            <p>
              Lyket is the ultimate tool to add GDPR-compliant{" "}
              <strong>
                clap buttons to any React project, including NextJS, Gatsby,
                React Native
              </strong>{" "}
              and any other framework that uses React, and to be always updated
              to what your visitors enjoy the most about your website.
            </p>
            <p>
              I will give you a few examples on how you can easily integrate
              Lyket. Feel free to{" "}
              <strong>copy and paste the snippets using a test API key</strong>,
              but, remember to register to get your own!
            </p>
            <p>
              In the first example we create a{" "}
              <strong>
                clap button with id "applause-react" under the "my-blog-post"
                category
              </strong>
              . To do that we import the Provider component that configures
              Lyket and the ClapButton component where we want our button to be.
              Read more about the Provider component on the{" "}
              <Link href="/docs/react">
                <a>docs</a>
              </Link>
            </p>
            <Code>
              {`import { Provider, ClapButton } from "@lyket/react";

  <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
    <ClapButton
      namespace="my-blog-post"
      id="applause-react"
    />
  </Provider>
`}
            </Code>
            <p>
              Try it out! It will add as many claps as the number of clicks.
              There are no limits so your fans can really hit it!
            </p>
            <div className="center big">
              <ClapButton namespace="blog" id="clap-button-react-example" />
            </div>
            <h3>Changing templates</h3>
            <p>
              You can change the style by choosing one of the templates you can
              find in the{" "}
              <Link href="/templates">
                <a>templates section</a>
              </Link>
              . For clap buttons we have the Medium template, that emulates the
              Medium clap button. Let's try it out!
            </p>
            <Code>
              {`<ClapButton
  namespace="my-blog-post"
  id="applause-react"
  component={ClapButton.templates.Medium}
/>`}
            </Code>
            <p>
              You will get a clap button that looks and behaves just like
              Medium's
            </p>
            <div className="center big">
              <ClapButton
                namespace="blog"
                id="clap-button-react-example-twitter"
                component={ClapButton.templates.Medium}
              />
            </div>
            <h3>Changing colors</h3>
            <p>
              Some templates support color changing, for example the default
              one. You can set your own color palette by configuring the
              Provider.
            </p>
            <p>
              <strong>background</strong> controls the background color of the
              inactive clap button, the <strong>primary</strong> attribute will
              change the background color of a clicked clap button, and the{" "}
              <strong>text</strong> attribute changes the font color. It
              supports rgba, hex, and color names.
            </p>
            <Code>
              {`import { Provider, ClapButton } from "@lyket/react";

<Provider
  apiKey="acc0dbccce8e557db5ebbe6d605aaa"
  theme={{
    colors: {
      background: "#b8fff3",
      text: "violet",
      primary: "rgba(255, 224, 138, 0.4)"
    }
  }}
>
  <ClapButton
    namespace="my-blog-post"
    id="applause-react"
  />
</Provider>`}
            </Code>
            <div className="center big">
              <Provider
                apiKey="Xkp5R0w+6uY+OftTTVEQ2BkiwUw="
                theme={{
                  colors: {
                    background: "#b8fff3",
                    text: "violet",
                    primary: "rgba(255, 224, 138, 0.4)"
                  }
                }}
              >
                <ClapButton
                  namespace="blog"
                  id="clap-button-react-example-colors"
                />
              </Provider>
            </div>
            <h2>Creating your own button</h2>
            <p>
              You may want to <strong>customize your clap button</strong> to be
              more consistent with your website, for example with your company
              logo or an icon from your own icon set.
            </p>
            <p>
              No problem! Here is an example of using the clapping hands emoji
              as a clap button.
            </p>
            <Code>
              {`import { ClapButton } from '@lyket/react';

<ClapButton
  namespace="my-blog"
  id="applause-now"
>
  {({ handlePress, totalClaps, userClaps, isLoading }) => {
    return (
      <div>
        <button
          onClick={handlePress}
          disabled={isLoading}
        >
        👏
        </button>
        <div>Total claps: {totalClaps}</div>
        <div>You clapped {userClaps} times!</div>
      </div>
    )
  }}
</ClapButton>`}
            </Code>
            <div className="center big">
              <ClapButton
                id="clap-button-react-example-custom"
                namespace="blog"
              >
                {({ handlePress, totalClaps, userClaps, isLoading }) => {
                  return (
                    <div>
                      <button
                        className="big"
                        onClick={handlePress}
                        disabled={isLoading}
                      >
                        👏
                      </button>
                      <div>Total claps: {totalClaps}</div>
                      <div>You clapped {userClaps} times!</div>
                    </div>
                  );
                }}
              </ClapButton>
            </div>
            <h3>Engage your visitors!</h3>
            <p>
              Once a visitor liked your content, you know you have their
              attention, so why not use it as an occasion to engage further with
              a call to action? Maybe you can ask your visitors to{" "}
              <strong>subscribe to your newsletter after they clapped</strong>?
              Nothing easier!
            </p>
            <p>You can use the onPress prop to do something like this:</p>
            <Code>
              {`<ClapButton
  namespace="my-blog-post"
  id="applause-react"
  onPress={openSubscribeModal}
/>`}
            </Code>
            {SubscribeDialog}
            <p>
              Try to click on the button, it will open a dialog asking to
              subscribe!
            </p>
            <div className="flex big">
              <h3>Click! →</h3>
              <ClapButton
                namespace="blog"
                id="clap-button-react-example-onpress"
                onPress={openSubscribeModal}
              />
            </div>
            <h3>Now you can just sit back and watch the numbers grow!</h3>{" "}
            <p>Where? On the dashboard, of course!</p>
            <p>
              Once you are registered you can access your private area and see
              statistics on all the buttons you created. If you are already
              registered,{" "}
              <a href="https://app.lyket.dev/dashboard">
                why don't you take a look now?
              </a>
            </p>
            <p>
              For more details about Lyket's React clap button, on how to
              customize it and style it, you can read our{" "}
              <Link href="/docs/react">
                <a>React documentation</a>
              </Link>
              .
            </p>
            <h3>The other button types</h3>
            <p>
              Clap button is just one of the three kind of buttons that Lyket
              offers. Each button has a different behaviour and provides a
              different kind af feedback. Check out the other two here:
            </p>
            <ul>
              <li>
                <Link href="/blog/posts/react-like-button">
                  <a>How to create a React like button</a>
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
