import React, { useState } from 'react';
import { UpdownButton, Provider } from '@lyket/react';
import Link from 'next/link';
import Head from 'next/head';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Code from 'components/Code';
import { RateButton } from '@lyket/react';

export const meta = {
  title: 'Add star ratings to any React project!',
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
        <title>
          Star Rating React - Add a Star Rating component in a few clicks |
          Lyket
        </title>
        <meta
          content="Implement a star rating React component to any React project and start receiving feedback! With Lyket, it takes no longer than 5 minutes."
          name="description"
        />
        <meta
          name="keywords"
          content="React rating component, star rating React star"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h1 className="page__kicker">Star rating React</h1>
          <h2 className="page__title">{meta.title}</h2>
        </section>
        <section className="page__section">
          <div className="markdown">
            <div className="big center">
              <UpdownButton
                namespace="blog"
                id="rating-component-react"
                component={UpdownButton.templates.Chevron}
              />
            </div>
            <p>
              <strong>Star ratings</strong> or{' '}
              <strong>rating components</strong> in general, are essential for
              blogs or e-commerces that want to receive{' '}
              <strong>feedbacks from its visitors</strong>.
            </p>
            <p>
              At the end of each <strong>article, recipe or showcase</strong>,
              each visitor is able to express their satisfaction by choosing a
              number of stars (or hearts or anything else :D). This{' '}
              <strong>successful user feedback method</strong> is inherited from
              travel portals, where hotels and restaurants can be reviewed.
            </p>
            <p>
              There are a lot of great{' '}
              <strong>Star rating React components</strong> around on Github,
              but <strong>the problems are always the same</strong>. Once you
              add the component, you have to integrate it with an{' '}
              <strong>API that keeps track of votes</strong>,{' '}
              <strong>you have to store ratings in a database</strong>, or
              otherwise you will have no way to{' '}
              <strong>remember which visitor has already voted</strong>. Most of
              the websites around do exactly like that!
            </p>
            <p>
              Don't believe me? I will prove it to you! Try navigating to your
              favourite cooking recipies website, leave a rating, and then
              refresh the page. Are you able to vote again? That is because good
              looking Star rating Reacts are not enough!
            </p>
            <h3>Lyket keeps track of user ratings for you</h3>
            <p>
              This is where Lyket comes to help! It takes care of all the above
              nuisances for you, provides an <strong>easy to install</strong>{' '}
              integration,{' '}
              <strong>beautiful React star rating components</strong>, while
              respecting <strong>GDPR</strong>, for{' '}
              <strong>
                any React project, including NextJS, Gatsby, React Native
              </strong>
              . Moreover, you can see all the ratings{' '}
              <strong>ordered by most voted</strong> on your personal dashboard.
            </p>
            <h3>How Lyket star rating works on React</h3>
            <p>
              Here is an example of how it will work. With just a{' '}
              <strong>few lines of code</strong>, you will get the perfect star
              rating!
            </p>
            <p>
              In this example we{' '}
              <strong>create a Star rating React component</strong> with id
              "my-ramen-recipe" under the "cooking-book" category. To do that we
              import the Provider component and the Rating component where we
              want our button to be. Read more about configuring the Provider
              component on the <Link href="/docs/react">docs</Link>
            </p>
            <Code>
              {`import { Provider, RateButton } from "@lyket/react";

  <Provider apiKey="${process.env.lyketResetApiKey}">
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
            <div className="flex-left big">
              <div className="try">Average rating: </div>
              <div>
                <RateButton
                  namespace="cooking-book"
                  id="my-ramen-recipe"
                  showRating="average"
                />
              </div>
            </div>
            <p />
            <div className="flex-left big">
              <div className="try">Click to rate! →</div>
              <RateButton
                namespace="cooking-book"
                id="my-ramen-recipe"
                showRating="user"
              />
            </div>
            <p />
            <p>
              As you can see we are rendering two star rating React components,
              one with the prop <code>showRating</code> set to{' '}
              <code>average</code> and one set to <code>user</code>. One is
              useful if you want to show the overall rating of your users, the
              other one if you want to let users vote and show what they have
              voted!
            </p>
            <h3>Use different rating icons!</h3>
            <p>
              The most known rating is clearly the star rating! But you can
              change the rating component style by choosing one of the templates
              you can find in the{' '}
              <Link href="/templates">templates section</Link>. If you choose
              the Heart template you will get all hearts instead of stars.
            </p>
            <Code>
              {`<span className="try">Average rating: </span>
<RateButton
	namespace="cooking-book"
	id="my-ramen-recipe"
	showRating="average"
	component={RateButton.templates.Heart}
/>
<span className="try">Click to rate! →</span>
<RateButton
	namespace="cooking-book"
	id="my-ramen-recipe"
	showRating="user"
	component={RateButton.templates.Heart}
/>`}
            </Code>
            <div className="flex-left big">
              <div className="try">Average rating: </div>
              <div>
                <RateButton
                  namespace="cooking-book"
                  id="my-ramen-recipe"
                  showRating="average"
                  component={RateButton.templates.Heart}
                />
              </div>
            </div>
            <p />
            <div className="flex-left big">
              <div className="try">Click to rate! →</div>
              <RateButton
                namespace="cooking-book"
                id="my-ramen-recipe"
                showRating="user"
                component={RateButton.templates.Heart}
              />
            </div>
            <p />
            <h3>Change the star rating colors!</h3>
            <p>
              You can use your website colors to style the React rating
              component. Do that by configuring the Provider component. It
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
  apiKey="${process.env.lyketApiKey}"
  theme={{
    colors: {
			primary: "#ffaa02",
			icon: "lightgrey",
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
                  primary: '#ffaa02',
                  icon: 'lightgrey',
                },
              }}
            >
              <div className="flex-left big">
                <span className="try">Average rating: </span>
                <RateButton
                  namespace="cooking-book"
                  id="my-ramen-recipe"
                  showRating="average"
                />
              </div>

              <div className="flex-left big">
                <span className="try">Click to rate! →</span>
                <RateButton
                  namespace="cooking-book"
                  id="my-ramen-recipe"
                  showRating="user"
                />
              </div>
            </Provider>

            <h3>Create your own star rating button!</h3>
            <p>
              You may want to have a rating component more consistent with your
              website, for example you may want to use pizza as an icon as a
              rating icon!
            </p>
            <p>
              Nothing easier, here is an example of using the pizza emoji as a
              rating component!
            </p>
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

            <RateButton id="custom-button" namespace="pizza">
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
                            type="button"
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
                            type="button"
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

            <h3>Engage your users!</h3>
            <p>
              Once you have your star rating component up and running, you can
              start thinking about how to{' '}
              <strong>put this user-feedback to good use</strong>. Maybe asking
              your visitors to <strong>subscribe to your newsletter</strong>{' '}
              after they rated one of your recipies? Piece of cake!
            </p>
            <p>
              You can use the onPress prop to open a modal that will ask users
              to subscribe:
            </p>
            <Code>
              {`<RateButton
	namespace="cooking-book"
	id="my-ramen-recipe"
	showRating="user"
	onPress={(button) => {
		alert("Thanks for your {button.attributes.userRating} rating! Do you want to subscribe to our newsletter?")
	}
/>`}
            </Code>

            <div className="flex-left big">
              <div className="try">Click to rate! →</div>
              <RateButton
                namespace="cooking-book"
                id="my-ramen-recipe"
                showRating="user"
                onPress={(button) => {
                  alert(
                    `Thanks for your ${button.attributes.userRating} stars rating! Do you want to subscribe to our newsletter?`,
                  );
                }}
              />
            </div>

            <h3>See results</h3>
            <p>
              Now that you have a review counter in your website, you might be
              interested to see statistics on the ratings.
            </p>
            <p>
              Once you are registered you can access your private dashboard and
              take a look on all the buttons you created and all the ratings you
              received. If you are already registered{' '}
              <a href="https://app.lyket.dev/dashboard">take a look now</a>!
            </p>
            <p>
              For more details about Lyket's star rating React, and other type
              of feedback buttons, you can read our{' '}
              <Link href="/docs/react">React documentation</Link>.
            </p>
            <h3>The other button types</h3>
            <p>
              The Star rating React is just one of user-feedback tools that
              Lyket offers. Each button has a different behaviour and can get
              you a different kind af feedback. See also{' '}
            </p>
            <ul>
              <li>
                <Link href="/blog/posts/react-like-button">
                  How to add a React like button to your website
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/clap-button">
                  How to create a React clap button
                </Link>
              </li>
              <li>
                <Link href="/blog/posts/react-like-dislike-button">
                  How to add a React like/dislike button to your website
                </Link>
              </li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
}
