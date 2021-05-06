import React, { useState } from "react";
import { UpdownButton, Provider } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Button from "@material-ui/core/Button";
import Code from "components/Code";
import StarRatings from "react-star-ratings";

export const meta = {
  title: "React rating component with Lyket"
};

export default function Post() {
  const [dialogOpen, setDialog] = useState(false);
  const [rating, setRating] = useState(2);

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
          Thank you so much for liking our post on ramen! If you want to know
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
        <title>React rating component | Lyket</title>
        <meta
          content="Add a React rating component and React star rating to your website with Lyket!"
          name="description"
        />
        <meta
          name="keywords"
          content="React rating component, React star rating"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h2 className="page__kicker">React rating component</h2>
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <UpdownButton
              namespace="blog"
              id="rating-component-react"
              component={UpdownButton.templates.Chevron}
            />
          </div>
        </section>
        <section className="page__section">
          <div className="markdown">
            <p>
              <strong>Star ratings</strong> or{" "}
              <strong>rating components</strong> in general, are essential for
              blogs or e-commerces that want to receive{" "}
              <strong>feedbacks from its visitors</strong>.
            </p>
            <p>
              At the end of each <strong>article or showcase</strong>, the
              visitor will be able to express their satisfaction by choosing a
              number of stars (or harts or anything else :D). This{" "}
              <strong>evaluation method</strong> is inherited from travel
              portals where hotels and restaurants can be reviewed.
            </p>
            <p>
              There are a lot of great <strong>React rating components</strong>{" "}
              around on Github, but{" "}
              <strong>the problem is always the same</strong>. Once you add the
              component, you have to integrate it with an{" "}
              <strong>API that keeps track of votes</strong>,{" "}
              <strong>you have to store ratings in a database</strong>, or
              otherwise you will have no way to{" "}
              <strong>remember which visitor has already voted</strong>, like
              most of the websites around do!
            </p>
            <p>
              Don't believe me? I will prove it to you! Try navigating to your
              favourite cooking recipies website, leave a rating, and then
              refresh the page. Are you able to vote again? That is because good
              looking React rating components are not enough! Maybe it didn't
              happen for your favourite website, but I assure you that it
              happens most of the times!
            </p>
            <h3>Lyket keeps track of ratings for you</h3>
            <p>
              This is where Lyket comes to help! It takes care of all the above
              nuisances for you, provides an <strong>easy to install</strong>{" "}
              integration,{" "}
              <strong>beautiful React star rating components</strong>, while
              respecting <strong>GDPR</strong>, for{" "}
              <strong>
                any React project, including NextJS, Gatsby, React Native
              </strong>
              . Moreover it shows you all the ratings{" "}
              <strong>ordered by most voted</strong> on your personal dashboard.
            </p>
            <h4>Important notice</h4>
            <p>
              <strong>
                Lyket React Rating component is not available yet!
              </strong>{" "}
              We are still working on it, but it will be available soon! If you
              want to know an ETA, simply contact us in the contact page :)
            </p>
            <h4>How Lyket React Rating component will work</h4>
            <p>
              Here is an example of how it will work. With just a{" "}
              <strong>few lines of code</strong>, you will get the perfect star
              rating! .
            </p>
            <p>
              In this example we{" "}
              <strong>create a React rating component</strong> with id
              "my-ramen-recipy" under the "cooking-book" category. To do that we
              import the Provider component and the Rating component where we
              want our button to be. Read more about configuring the Provider
              component on the{" "}
              <Link href="/docs/react">
                <a>docs</a>
              </Link>
            </p>
            <Code>
              {`import { Provider, Rating } from "@lyket/react";

  <Provider apiKey="acc0dbccce8e557db5ebbe6d605aaa">
    <Rating
      namespace="cooking-book"
      id="my-ramen-recipy"
    />
  </Provider>
`}
            </Code>
            <div className="flex big">
              <div className="try">Click! →</div>
              <StarRatings
                rating={rating}
                starRatedColor="#ffd700"
                starHoverColor="#ffd700"
                changeRating={setRating}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <h4>Changing templates</h4>
            <p>
              The most known React rating component is clearly the star rating!
              But you can change the rating component style by choosing one of
              the templates you can find in the{" "}
              <Link href="/templates">
                <a>templates section</a>
              </Link>
              . If you choose the Heart template you will get all hearts instead
              of stars.
            </p>
            <Code>
              {`<Rating
  namespace="cooking-book"
  id="my-ramen-recipy"
  component={Rating.templates.Heart}
/>`}
            </Code>
            <h4>Changing colors</h4>
            <p>
              You can use your website colors to style the React rating
              component. Do that by configuring the Provider component, that
              supports rgba, hex, and color names.
            </p>
            <p>
              The <strong>background</strong> attribute changes the background
              color of empty vote.
            </p>
            <p>
              the <strong>primary</strong> attribute will change the color of
              the active vote.
            </p>
            <p>
              The <strong>animation</strong> attribute changes the hover effect
              color.
            </p>
            <Code>
              {`import { Provider, Rating } from "@lyket/react";

<Provider
  apiKey="acc0dbccce8e557db5ebbe6d605aaa"
  theme={{
    colors: {
      background: "#b8fff3",
      animation: "#ffaa02"
      primary: "violet"
    }
  }}
>
  <Rating
    namespace="cooking-book"
    id="my-ramen-recipy"
  />
</Provider>
  `}
            </Code>
            <div className="flex big">
              <div className="try">Click! →</div>
              <StarRatings
                rating={rating}
                starRatedColor="violet"
                starEmptyColor="#b8fff3"
                starHoverColor="#ffaa02"
                changeRating={setRating}
                numberOfStars={5}
                name="rating"
              />
            </div>
            <h4>Creating your own button</h4>
            <p>
              You may want to have a rating component more consistent with your
              website, for example you may want to use pizza as an icon for a
              rating component!
            </p>
            <p>
              Nothing easier, here is an example of using the pizza emoji as a
              rating component!
            </p>
            <Code>
              {`import { Rating } from '@lyket/react';

<Rating
  id="pizza"
  namespace="great-things"
>
  {({ handlePress, totalVotes, userLiked, isLoading }) => {
    return (
      <div>
        <button
          className="big"
          onClick={handlePress}
          disabled={isLoading}
        >
          🍕
        </button>
        <strong>Total votes: {totalVotes}</strong>
        {userLiked && <div>Thanks for liking pizza!</div>}
      </div>
    )
  }}
</Rating>`}
            </Code>
            <div className="flex big">
              <div className="try">Click! →</div>
              <StarRatings
                rating={rating}
                changeRating={setRating}
                svgIconPath="M195.287,16.574C168.741,5.576,140.776,0,112.169,0c-28.493,0-56.4,5.574-82.945,16.566   c-1.838,0.762-3.298,2.223-4.06,4.061c-0.761,1.838-0.761,3.904,0.001,5.742l11.992,28.932c0.001,0.004,0.005,0.008,0.007,0.012   l68.16,164.574c1.168,2.818,3.917,4.625,6.926,4.625c0.218,0,0.437-0.01,0.656-0.029c2.85-0.248,5.271-2.088,6.311-4.682   l68.143-164.49c0.002-0.004,0.004-0.006,0.006-0.01l11.98-28.928C200.93,22.545,199.113,18.158,195.287,16.574z M112.169,15   c24.133,0,47.778,4.264,70.397,12.688l-6.246,15.08c-20.618-7.598-42.157-11.445-64.138-11.445   c-21.896,0-43.382,3.848-63.982,11.443L41.946,27.68C64.554,19.262,88.141,15,112.169,15z M112.254,197.416L53.949,56.643   c18.766-6.846,38.317-10.32,58.232-10.32c20,0,39.605,3.477,58.389,10.324L112.254,197.416z"
                svgIconViewBox="0 0 224.512 224.512"
                numberOfStars={5}
                name="path"
              />
            </div>
            <p>Now you can click on pizza and see your score growing!</p>{" "}
            <p>Where? On the dashboard of course!</p>
            <p>
              Once you are registered you can access your private area and take
              a look on all the buttons you created and all the ratings you
              received. If you are already registered{" "}
              <a href="https://app.lyket.dev/dashboard">take a look now</a>!
            </p>
            <p>
              For more details about Lyket's React rating component you can read
              our{" "}
              <Link href="/docs/react">
                <a>React documentation</a>
              </Link>
              .
            </p>
            <h4>Engage your visitors!</h4>
            <p>
              Once you have your rating components where you want them to be,
              you can start thinking about how to{" "}
              <strong>put this user-feedback to good use</strong>. Maybe asking
              your visitors to <strong>subscribe to your newsletter</strong>{" "}
              after they liked one of your recipies? Piece of cake!
            </p>
            <p>
              You can use the onPress prop to open a modal that will ask users
              to subscribe:
            </p>
            <Code>
              {`<Rating
  namespace="cooking-book"
  id="my-ramen-recipy"
  onPress={openSubscribeModal}
/>`}
            </Code>
            <h4>The other button types</h4>
            <p>
              The React Rating Component is just one of user-feedback tools that
              Lyket offers. Each button has a different behaviour and can get
              you a different kind af feedback. See also{" "}
            </p>
            <ul>
              <li>
                <Link href="/blog/posts/react-like-button">
                  <a>How to add a React like button to your website</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/clap-button">
                  <a>How to create a React clap button</a>
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/react-like-dislike-button">
                  <a>How to add a React like/dislike button to your website</a>
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
