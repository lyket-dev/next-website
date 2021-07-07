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
              Lyket wants to give you all the tools to customize and create the
              perfect button for every situation. So we decided that we wanted
              to allow our users to add the famous{" "}
              <strong>Medium clap button on their own blog</strong>! Moreover
              Lyket <strong>doesn't require visitors to sign-up</strong> like
              Medium does, giving a even smoother user-experience.
            </p>

            <h4>Why a clap button?</h4>
            <p>
              <strong>Clap buttons behave differently from like buttons</strong>
              , in fact you can click on a clap button as many time as you want
              and <strong>the counter will keep on increasing</strong>.
            </p>
            <p>
              The thing that a web designer must always keep in mind when
              building a web page or an app is the{" "}
              <strong>
                goal that the user wants to achieve by interacting with your
                product
              </strong>
              . It's the website builder's job then to{" "}
              <strong>
                translate their intentions and actions into buttons
              </strong>
              .
            </p>
            <p>
              Applying a behavior to a button{" "}
              <strong>
                facilitates the interaction between your user and the button
              </strong>{" "}
              itself by returning feedback that allows the user a greater
              understanding of the effectiveness of its action.
            </p>
            <p>
              That is why{" "}
              <strong>
                Medium chose a different behavior for their buttons.
              </strong>
            </p>
            <p>
              Clap buttons <strong>give a different user-experience</strong> and
              they are perfect for blogs in which the more feedback you can get,
              the merrier!
            </p>
            <p>
              Lyket is the ultimate tool to add{" "}
              <strong>Medium clap buttons to any website</strong> with minimal
              effort!
            </p>
            <h4>Medium clap buttons with Lyket</h4>
            <p>
              Lyket took inspiration from Medium to create buttons that would
              <strong>behave exactly like the Medium clap buttons</strong>, and
              also look like them. You can create Medium clap buttons either if
              you{" "}
              <strong>use a website builder, like Wordpress, Webflow</strong> or
              if you develop using{" "}
              <strong>React or any other React based framework</strong>.
            </p>
            <ul>
              <li>
                If you use HTML <strong>or a website builder</strong> you can
                use use our HTML + Javascript widget! Check out the{" "}
                <Link href="/docs/html">
                  <a>HTML widget documentation</a>
                </Link>{" "}
                and start creating{" "}
                <strong>Medium clap buttons with simple HTML</strong>. To have
                the perfect doppleganger you can{" "}
                <strong>choose the Medium template</strong> that replicates
                behavior and animation of the official Medium clap button.
              </li>
              <li>
                <strong>If you use React</strong> you can follow the{" "}
                <Link href="/blog/posts/clap-button">
                  <a>clap button tutorial</a>
                </Link>{" "}
                and, if you want the exact copy, go straight to the{" "}
                <Link href="/blog/posts/clap-button#medium">
                  <a>Medium template button</a>
                </Link>{" "}
                part.
              </li>
            </ul>
            <p>
              Either using HTML or React he result will be this. Let's try it
              out!
            </p>
            <div className="flex-center big">
              <h4>Click! →</h4>
              <ClapButton
                namespace="blog"
                id="medium-button-try"
                component={ClapButton.templates.Medium}
              />
            </div>
            <p>We created this Medium clap button using this React code</p>
            <Code>
              {`<ClapButton
  namespace="my-blog-post"
  id="medium-clap-button"
  component={ClapButton.templates.Medium}
/>`}
            </Code>
            <p>Or in alternative using this HTML code</p>
            <Code>
              {`<div
  data-lyket-type="clap"
  data-lyket-namespace="blog"
  data-lyket-id="medium-clap-button"
  data-lyket-template="medium"
></div>`}
            </Code>
            <h4>Engage engage engage!</h4>
            <p>
              Medium catches the moment in which{" "}
              <strong>a visitor claps to prompt them to sign-up</strong> to
              their platform. Using Lyket does not require your visitors to
              sing-up to Lyket -we are privacy friendly ;)-, but you can{" "}
              <strong>prompt visitors for any action after they clapped</strong>
              ! For example to <strong>subscribe to your newsletter</strong>, or
              ask to leave a comment..
            </p>
            <p>With Lyket you can implement that with the onPress prop:</p>
            <Code>
              {`<ClapButton
  namespace="my-blog-post"
  id="medium-clap-button"
  onPress={openSubscribeModal}
  component={ClapButton.templates.Medium}
/>`}
            </Code>
            {SubscribeDialog}
            <p>
              Try to click on the button, it will open a dialog asking you to
              subscribe!
            </p>
            <div className="flex-center big">
              <h4>Click! →</h4>
              <ClapButton
                namespace="blog"
                id="medium-button-react-example-onpress"
                onPress={openSubscribeModal}
                component={ClapButton.templates.Medium}
              />
            </div>
            <h4>Clap, like and like/dislike!</h4>
            <p>
              We added a <strong>clap button</strong> behavior to the classic
              buttons list, the like and like/dislike buttons, and added a
              template to make it{" "}
              <strong>look exactly like the actual Medium clap button</strong>,
              but we did the same with other button types.
            </p>
            <p>
              If you are curious to see how the other buttons behave and look
              you can check them out:
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
