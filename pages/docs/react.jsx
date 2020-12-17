import React, { useState } from "react";
import useAsyncEffect from "../../utils/useAsyncEffect";
import ReactMarkdown from "react-markdown";
import QuickDocsMenu from "components/QuickDocsMenu";
import Head from "next/head";

export default function Docs() {
  const [markdown, markdownSet] = useState(null);
  //
  // useAsyncEffect(() => {
  //   fetch(
  //     "https://raw.githubusercontent.com/lyket-dev/lyket/master/packages/react/README.md"
  //   )
  //     .then(response => response.text())
  //     .then(text => markdownSet(text));
  // }, []);
  // <ReactMarkdown source={markdown} className="markdown" />

  return (
    <>
      <Head>
        <title>
          Lyket ReactJS docs - like, applause and like/dislike buttons on React
        </title>
        <meta
          property="og:description"
          content="Instantly add like, applause and like/dislike on any React, Gatsby, NextJS project. Read our documentation to see how easy it is!"
          name="description"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <QuickDocsMenu />
        </section>
        <section className="page__section">
          <h1 className="page__title">React docs</h1>
          <div class="docs">
            <div class="markdown">
              <p>
                Lyket is compatible with any React framework. You can use it
                with Gatsby, NextJS, create-react-app, and so on!
              </p>
              <p>You can find here all the info to tame the buttons!</p>
              <h2>Installation</h2>
              <p>To install the component run</p>
              <pre>
                <code class="language-javascript">yarn add @lyket/react</code>
              </pre>
              <p>or</p>
              <pre>
                <code class="language-javascript">
                  npm install @lyket/react
                </code>
              </pre>
              <h2>Configuration: The Provider component</h2>
              <p>
                Add the Provider component top-level and configure it using your
                personal public API key that you can get after registering to
                Lyket
              </p>
              <pre>
                <code class="language-javascript">
                  {`import { Provider } from '@lyket/react';

ReactDOM.render(
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
                  <strong>apiKey</strong>: <strong>string</strong> - You can get
                  your public API key by registering on{" "}
                  <a href="https://app.lyket.dev">Lyket</a>.
                </li>
              </ul>
              <h5>Optional props</h5>
              <ul>
                <li>
                  <p>
                    <strong>theme</strong>:{" "}
                    <strong>
                      Record&lt;'colors' | 'fonts' | 'fontWeights',
                      Record&lt;string, string&gt;&gt;
                    </strong>{" "}
                    - Allows you to change the default buttons color scheme and
                    font/fontWeights. It doesn't apply to all templates. Read
                    more about it in the <em>Styling buttons</em> section at the
                    end of this document.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>recaptchaSiteKey</strong>: <strong>string</strong> -
                    If you enabled reCAPTCHA you need to provide your public
                    key. Read more in the <em>ReCAPTCHA</em> section at the end
                    of this document.
                  </p>
                </li>
              </ul>
              <h2>The button components</h2>
              <p>
                Once you configured the Provider you can start adding buttons
                anywhere in your app.
              </p>
              <p>
                You can choose among three different button types that have
                different behaviours and purposes, but they all share these
                basic features and props:
              </p>
              <ul>
                <li>
                  <p>
                    As soon as a button component is mounted, a fetch request is
                    made to retrieve info on the button that identifies with id
                    and namespace that you provided. If no button is found, a
                    new one will be created using the id/namespace identifier.
                  </p>
                </li>
                <li>
                  <p>
                    Notice that the server will create a new button for every
                    different and unique identifier, so if you change id or
                    namespace or type the new button won’t inherit the votes.
                  </p>
                </li>
                <li>
                  <p>
                    Every time a user interacts with a button, the button
                    counter will update and flag that the user has already
                    voted. There is no need to signup or to use any third party
                    service.
                  </p>
                </li>
              </ul>
              <h3>Button props</h3>
              <p>All buttons share these required and optional props.</p>
              <h5>Required props</h5>
              <ul>
                <li>
                  <strong>id</strong>: <strong>string</strong> - The API uses
                  the ID to find a button. It should be unique for namespace. It
                  accepts an alphanumeric string with maximum 50 characters.
                </li>
              </ul>
              <h5>Optional props</h5>
              <ul>
                <li>
                  <p>
                    <strong>namespace</strong>: <strong>string</strong> - Giving
                    a namespace is useful to keep buttons organised, and can be
                    used to fetch statistics. Check the API docs for more
                    information.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>hideCounterIfLessThan</strong>:{" "}
                    <strong>number</strong> - You may want to hide the counter
                    if you are not getting enough feedback. Specify the number
                    of votes/claps/likes you want to receive before showing the
                    counter.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>component</strong>: <strong>React.ReactNode</strong>{" "}
                    - If this prop is not provided you will see the Simple
                    template. To change the aspect from the default you can
                    either choose one of the ready-made{" "}
                    <strong>templates</strong> that Lyket provides or a{" "}
                    <strong>custom component</strong> in the component
                    attribute.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>onLoad</strong>:{" "}
                    <strong>(buttonData) =&gt; void</strong> - This function
                    gets called when the button has finished loading
                  </p>
                </li>
              </ul>
              <h2>Button types</h2>
              <p>The three types of buttons are the following:</p>
              <h3>Like Button</h3>
              <p>Like buttons behave as Twitter "likes".</p>
              <p>
                Users can only like once and a subsequent request from the same
                user will remove the user's like.
              </p>
              <pre>
                <code class="language-javascript">
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
                </code>
              </pre>
              <h5>Optional props</h5>
              <ul>
                <li>
                  <strong>onPress</strong>:{" "}
                  <strong>(buttonData) =&gt; void</strong> - This function gets
                  called whenever a Press action is triggered.
                </li>
              </ul>
              <h3>Up/down Button</h3>
              <p>Up/down buttons behave as Reddit like/dislike buttons.</p>
              <p>
                Users can only like or dislike once and a subsequent action from
                the same user will remove the user's like or dislike.
              </p>
              <pre>
                <code class="language-javascript">
                  {`import { UpdownButton } from '@lyket/react';

export BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <UpdownButton
        id="how-i-joined-the-raiders-of-the-lost-ark"
        namespace="post"
      />
      {content}
    </div>
  );
};`}
                </code>
              </pre>
              <h5>Optional props</h5>
              <ul>
                <li>
                  <p>
                    <strong>onPressUp</strong>:{" "}
                    <strong>(buttonData) =&gt; void</strong> - This function
                    gets called whenever a PressUp action is triggered.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>onPressDown</strong>:{" "}
                    <strong>(buttonData) =&gt; void</strong> - This function
                    gets called whenever a PressDown action is triggered.
                  </p>
                </li>
              </ul>
              <h3>Clap Button</h3>
              <p>
                Clap buttons behave like Medium applauses. Users can like
                multiple times and every other call from the same user will
                increment the claps number.
              </p>
              <pre>
                <code class="language-javascript">
                  {`import { ClapButton } from '@lyket/react';

export BlogPost = ({ title, content }) => {
  return (
    <div>
      {title}
      <ClapButton id="diy-fish-holder" namespace="post" />
      {content}
    </div>
  );
};`}
                </code>
              </pre>
              <h5>Optional props</h5>
              <ul>
                <li>
                  <strong>onPress</strong>:{" "}
                  <strong>(buttonData) =&gt; void</strong> - This function gets
                  called whenever a Press action is triggered.
                </li>
              </ul>
              <h2>Button Templates</h2>
              <p>
                Lyket provides a set of out-of-the-box templates. You can see
                all the available templates on{" "}
                <a href="https://lyket.dev/templates">lyket.dev/templates</a>
              </p>
              <p>
                By default, ie. if you don't specify any template or custom
                component, Lyket will show the Simple Template.
              </p>
              <ul>
                <li>
                  <strong>Simple</strong>: default LikeButton - supports custom
                  theme
                </li>
                <li>
                  <strong>Twitter</strong>: Twitter style LikeButton
                </li>
                <li>
                  <strong>Simple</strong>: default UpdownButton - supports
                  custom theme
                </li>
                <li>
                  <strong>Reddit</strong>: Reddit style UpdownButton
                </li>
                <li>
                  <strong>Simple</strong>: default ClapButton - supports custom
                  theme
                </li>
                <li>
                  <strong>Medium</strong>: Medium style ClapButton
                </li>
              </ul>
              <p>
                Import templates directly from the button. Here is an example of
                using the Twitter template on a LikeButton.
              </p>
              <pre>
                <code class="language-javascript">
                  {`import { LikeButton } from '@lyket/react';

export StandingOvation = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <LikeButton
        id="do-you-like-pizza"
        component={ClapButton.templates.Twitter}
      />
    </>
  );
};`}
                </code>
              </pre>
              <h2>Custom Buttons</h2>
              <p>
                You may want to give a different flavour to a button, for
                example using your logo as icon. You can do that by creating
                your own component!
              </p>
              <p>
                Here is an example for each button type of passing a custom
                component through children. You can pass a custom component also
                through the component prop.
              </p>
              <p>
                <strong>Custom LikeButton</strong>
              </p>
              <pre>
                <code class="language-javascript">
                  {`import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
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
              Of course! 🍕🍕🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>Thanks for your vote!</div>}
          </>
        )}
      </LikeButton>
    </>
  )
};`}
                </code>
              </pre>
              <p>
                <strong>Custom ClapButton</strong>
              </p>
              <pre>
                <code class="language-javascript">
                  {`import { ClapButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <ClapButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={3}
      >
        {({
          handlePress,
          totalClaps,
          userClaps,
          isLoading,
          isCounterVisible,
        }) => (
          <>
            <button onClick={handlePress} disabled={isLoading}>
              Of course! 🍕🍕🍕
            </button>
            {isCounterVisible && <div>Total: {totalClaps}</div>}
            <div>You clapped {userClaps} times</div>
          </>
        )}
      </ClapButton>
    </>
  );
};`}
                </code>
              </pre>
              <p>
                <strong>Custom UpdownButton</strong>
              </p>
              <pre>
                <code class="language-javascript">
                  {`
  import { UpdownButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h2>Do you like pizza?</h2>
      <UpdownButton
        id="do-you-like-pizza"
        namespace="faq"
        hideCounterIfLessThan={1}
      >
        {({
          handlePressUp,
          handlePressDown,
          totalScore,
          userVoteDirection,
          isCounterVisible,
          isLoading,
        }) => (
          <>
            <button onClick={handlePressUp} disabled={isLoading}>
              Of course! 🍕🍕🍕
            </button>
            <button onClick={handlePressDown} disabled={isLoading}>
              I am a bad person
            </button>
            {isCounterVisible && <p>Total: {totalScore}</p>}
            <p>Your vote: {userVoteDirection}</p>
          </>
        )}
      </UpdownButton>
    </>
  );
};
  `}
                </code>
              </pre>
              <h2>Styling buttons</h2>
              <h3>Resizing</h3>
              <p>
                All buttons can be resized by wrapping them in a container and
                changing the font-size.
              </p>
              <h3>Apply your color scheme and fonts</h3>
              <p>
                Lyket uses the <a href="https://theme-ui.com/home">theme-ui</a>{" "}
                library, allowing you to provide your own theme to the buttons
                through the <strong>theme</strong> prop in the provider.
              </p>
              <ul>
                <li>
                  <strong>primary</strong> - Changes the color of the "like"
                  button, when user has liked.
                </li>
                <li>
                  <strong>secondary</strong> - Changes the color of the
                  "dislike" button, when user has disliked.
                </li>
                <li>
                  <strong>background</strong> - Changes the background color of
                  the inactive button.
                </li>
                <li>
                  <strong>text</strong> - Changes the counter's text and the
                  inactive icon's color.
                </li>
                <li>
                  <strong>highlight</strong> - Changes the animation color.
                </li>
              </ul>
              <p>These are the default values:</p>
              <pre>
                <code class="language-js">
                  {`const defaultTheme = {
  colors: {
    primary: '#22c1c3',
    secondary: '#ff00c3',
    background: 'transparent',
    text: '#292929',
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
                Not all the templates support theming. Read the templates detail
                to know which ones.
              </p>
              <h2>reCAPTCHA</h2>
              <p>
                Lyket is integrated with Google reCAPTCHA V3 to handle malicious
                use without interrupting <em>human</em> users. To enable it you
                need to provide your Google reCAPTCHA secret key in the user
                settings in the private area and add your recaptcha site key
                through the recaptchaSiteKey prop in the Provider. The key will
                be encrypted.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
