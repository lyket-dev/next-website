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
  title: "How to add the Medium clap button to your website with Lyket"
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
        <title>Add the Medium clap button to your website | Lyket</title>
        <meta
          content="With Lyket you can add the iconic Medium clap button to your website and blog"
          name="description"
        />
        <meta
          name="keywords"
          content="Medium clap button, Medium, clap button"
        />
      </Head>

      <div className="page">
        <section className="page__section">
          <h2 className="page__kicker">Medium clap button</h2>
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <ClapButton
              namespace="blog"
              id="medium-button-react"
              component={ClapButton.templates.Medium}
            />
          </div>
           
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              <strong>Medium clap buttons</strong> are simply great. They are{" "}
              <strong>perfect for blogs and portfolios</strong> because content
              writers can get a <strong>flood of positive reinforcement</strong>{" "}
              and visitors can express all their appreciation. Medium uses them
              for every of their blog post and they became quite succesful and
              popular.
            </p>
            <p>
              But if you ever tried to create a <strong>clap button</strong>, I
              am sure you faced some challenges.
            </p>
            <ul>
              <li>
                You need to store claps somewhere otherwise they will be gone
                after a simple page refresh. So you need a{" "}
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
            <p>
              Lyket is the ultimate tool to add{" "}
              <strong>Medium clap buttons to any website</strong> with minimal
              effort!
            </p>
            <h4>Medium clap buttons with HTML</h4>
            <p>
              In this tutorial I will give you a few examples on how you can
              easily create a clap button <strong>using React</strong>.
            </p>
            <p>
              If you are <strong>not using React</strong> you can check out our{" "}
              <Link href="/docs/widget">
                <a>Widget documentation</a>
              </Link>{" "}
              and start creating{" "}
              <strong>Medium clap buttons with simple HTML</strong>.
            </p>
            <h4>Medium clap buttons with React</h4>
            <p>
              Before going into details, be aware that in this tutorial we use a
              test API key, so feel free to{" "}
              <strong>copy and paste the snippets</strong>, but, remember to
              register to Lyket to get your own key!
            </p>
            <p>
              In the first example we create a{" "}
              <strong>
                clap button with id "medium-clap-button" under the
                "my-blog-post" category
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
      id="medium-clap-button"
    />
  </Provider>
`}
            </Code>
            <p>
              Try it out! It will add as many claps as the number of clicks.
              There are no limits and{" "}
              <strong>your fans can really hit it</strong>!
            </p>
            <div className="flex big">
              <h4>Click! →</h4>
              <ClapButton namespace="blog" id="medium-button-react-example" />
            </div>
            <h4>Give your button the Medium clap button style!</h4>
            <p>
              You can change the style by choosing one of the templates you can
              find in the{" "}
              <Link href="/templates">
                <a>templates section</a>
              </Link>
              . For clap buttons we have the Medium template, that emulates the
              <strong>Medium clap button</strong>. Let's try it out!
            </p>
            <Code>
              {`<ClapButton
  namespace="my-blog-post"
  id="medium-clap-button"
  component={ClapButton.templates.Medium}
/>`}
            </Code>
            <p>
              You will get a clap button that looks and behaves just like
              Medium's
            </p>
            <div className="flex big">
              <h4>Click! →</h4>
              <ClapButton
                namespace="blog"
                id="medium-button-react-example-twitter"
                component={ClapButton.templates.Medium}
              />
            </div>
            <h4>Changing colors of the simple clap button</h4>
            <p>
              If you want to have a <strong>clap button</strong> but you want it
              to ghave your website's colors and style you can do it by using
              the default template or any other template that support color
              changing. You can set your own color palette by configuring the
              Provider. It supports rgba, hex, and color names.
            </p>
            <ul>
              <li>
                <strong>background</strong> attribute controls the background
                color of the inactive clap button
              </li>
              <li>
                <strong>primary</strong> attribute will change the background
                color of a clicked clap button
              </li>
              <li>
                <strong>text</strong> attribute changes the font color.
              </li>
            </ul>
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
    id="medium-clap-button"
  />
</Provider>`}
            </Code>
            <div className="flex big">
              <h4>Click! →</h4>
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
                  id="medium-button-react-example-colors"
                />
              </Provider>
            </div>
            <h4>Creating your own button</h4>
            <p>
              You may want to have something{" "}
              <strong>more unique than the Medium clap button</strong> to be
              more consistent with your website, for example using your company
              logo or a clap icon from your own icon set.
            </p>
            <p>
              No problem! Here is an example of using the{" "}
              <strong>clapping hands emoji as a clap button</strong>.
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
            <div className="center">
              <ClapButton
                id="medium-button-react-example-custom"
                namespace="blog"
              >
                {({ handlePress, totalClaps, userClaps, isLoading }) => {
                  return (
                    <>
                      <div className="flex big">
                        <h4>Click! →</h4>
                        <button
                          className="big"
                          onClick={handlePress}
                          disabled={isLoading}
                          style={{ fontSize: "90px" }}
                        >
                          👏
                        </button>
                      </div>
                      <div>Total claps: {totalClaps}</div>
                      <div>You clapped {userClaps} times!</div>
                    </>
                  );
                }}
              </ClapButton>
            </div>
            <h4>Engage your visitors!</h4>
            <p>
              Once a visitor clapped at your content, you know you have their
              full attention, so why not use it as an occasion to{" "}
              <strong>engage further with a call to action</strong>? Maybe you
              can ask your visitors to{" "}
              <strong>subscribe to your newsletter after they clapped</strong>?
              Or ask to leave a more detailed feedback? Nothing easier!
            </p>
            <p>You can use the onPress prop to do something like this:</p>
            <Code>
              {`<ClapButton
  namespace="my-blog-post"
  id="medium-clap-button"
  onPress={openSubscribeModal}
/>`}
            </Code>
            {SubscribeDialog}
            <p>
              Try to click on the button, it will open a dialog asking to
              subscribe!
            </p>
            <div className="flex big">
              <h4>Click! →</h4>
              <ClapButton
                namespace="blog"
                id="medium-button-react-example-onpress"
                onPress={openSubscribeModal}
              />
            </div>
            <h4>Now you can just sit back and watch the numbers grow!</h4>{" "}
            <p>
              Where? <strong>On the dashboard</strong>, of course!
            </p>
            <p>
              Once you are registered you can access your private area and see{" "}
              <strong>statistics on all the buttons</strong> you created. If you
              are already registered,{" "}
              <a href="https://app.lyket.dev/dashboard">
                why don't you take a look now?
              </a>
            </p>
            <p>
              For more{" "}
              <strong>
                details about creating Medium clap buttons with React
              </strong>
              , on how to customize them and style them, you can read our{" "}
              <Link href="/docs/react">
                <a>React documentation</a>
              </Link>
              .
            </p>
            <h4>The other button types</h4>
            <p>
              <strong>
                Medium Clap button is just one of the three kind of buttons
              </strong>{" "}
              that Lyket offers. Each button has a different behaviour and
              provides a different kind af feedback. Check out the other two
              here:
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
