import React, { useState } from "react";
import useAsyncEffect from "../../utils/useAsyncEffect";
import ReactMarkdown from "react-markdown";
import QuickDocsMenu from "components/QuickDocsMenu";
import Code from "components/Code";
import Head from "next/head";
import Link from "next/link";

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
        <title>Lyket - Add like, clap and like/dislike buttons to React</title>
        <meta
          property="og:description"
          content="Lyket is a tool to instantly add like, applause and like/dislike on any React project."
          name="description"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <div className="docs__title__container">
            <h2 className="page__kicker">clap & like button on react</h2>
            <h1 className="docs__title">React docs</h1>
            <QuickDocsMenu />
          </div>
          <div className="docs">
            <div className="markdown">
              <p>
                Lyket is the ultimate tool to add like, applause and
                like/dislike buttons, and{" "}
                <strong>it gives its best with React</strong>!
              </p>
              <p>
                The React library allows a{" "}
                <strong>great deal of customization</strong> with just a few
                lines of code and it's{" "}
                <strong>compatible with all React frameworks</strong> like
                NextJS, Gatsby, create-react-app. This is the{" "}
                <strong>full React documentation</strong> that you can also find
                on the official OS repo on{" "}
                <a
                  href="https://github.com/lyket-dev/lyket/tree/master/packages/react"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                .
              </p>
              <p>
                If you want to discover how to use the{" "}
                <strong>React library in detail</strong> you came to the right
                place. If you prefer to learn with examples and ready-made
                snippets to copy and paste, you can visit:
              </p>
              <ul>
                <li>
                  <Link href="/blog/posts/react-like-button">
                    <a>How to add like buttons to a React project</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/posts/react-clap-button">
                    <a>How to add clap buttons to a React project</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/posts/react-like-dislike-button">
                    <a>How to add like dislike buttons to a React project</a>
                  </Link>
                </li>
              </ul>
              <h4>Installation</h4>
              <p>Well, Let's get started! To install the component run</p>
              <Code>yarn add @lyket/react</Code>
              <p>or</p>
              <Code>npm install @lyket/react</Code>
              <h4>Provider</h4>
              <p>
                Add the Provider component top-level and configure it using your
                personal public API key that you can get after registering to
                Lyket
              </p>
              <Code>
                {`import { Provider } from '@lyket/react';

ReactDOM.render(
  <Provider apiKey="[YOUR-API-KEY]">
    <App />
  </Provider>,
  document.getElementById('root')
);`}
              </Code>
              <h6>Required props</h6>
              <ul>
                <li>
                  <strong>apiKey</strong>: <strong>string</strong> - You can get
                  your public API key by registering on{" "}
                  <a href="https://app.lyket.dev">Lyket</a>.
                </li>
              </ul>
              <h6>Optional props</h6>
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
              <h4>The button components</h4>
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
              <h4>Button props</h4>
              <p>All buttons share these required and optional props.</p>
              <h6>Required props</h6>
              <ul>
                <li>
                  <strong>id</strong>: <strong>string</strong> - The API uses
                  the ID to find a button. It should be unique for namespace. It
                  accepts an alphanumeric string with maximum 50 characters.
                </li>
              </ul>
              <h6>Optional props</h6>
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
                    <strong>
                      (buttonData: UpdownButtonData | ClapButtonData |
                      LikeButtonData) =&gt; void
                    </strong>{" "}
                    - This function gets called when the button has finished
                    loading. buttonData has different format depending on the
                    button type.
                  </p>
                </li>
              </ul>
              <h4>Button types</h4>
              <p>The three types of buttons are the following:</p>
              <h4>Like Button</h4>
              <p>Like buttons behave as Twitter "likes".</p>
              <p>
                Users can only like once and a subsequent request from the same
                user will remove the user's like.
              </p>
              <Code>
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
              </Code>
              <h5>Optional props</h5>
              <ul>
                <li>
                  <p>
                    <strong>onPress</strong>:{" "}
                    <strong>(buttonData: LikeButtonData) =&gt; void</strong> -
                    This function gets called whenever a Press action is
                    triggered.
                  </p>
                  <p>
                    <strong>LikeButtonData</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>id</strong>: <strong>string</strong>
                    </li>
                    <li>
                      <strong>type</strong>: <strong>like_button</strong>
                    </li>
                    <li>
                      <strong>attributes</strong>: <strong>Object</strong>
                      <ul>
                        <li>
                          <strong>namespace</strong>: <strong>string</strong>
                        </li>
                        <li>
                          <strong>namespaceRank</strong>:{" "}
                          <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalLikes</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalRank</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalVotes</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>userLiked</strong>: <strong>boolean</strong>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4>Up/down Button</h4>
              <p>Up/down buttons behave as Reddit like/dislike buttons.</p>
              <p>
                Users can only like or dislike once and a subsequent action from
                the same user will remove the user's like or dislike.
              </p>
              <Code>
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
              </Code>
              <h5 id="optional-props-3">Optional props</h5>
              <ul>
                <li>
                  <p>
                    <strong>onPressUp</strong>:{" "}
                    <strong>(buttonData: UpdownButtonData) =&gt; void</strong> -
                    This function gets called whenever a PressUp action is
                    triggered.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>onPressDown</strong>:{" "}
                    <strong>(buttonData: UpdownButtonData) =&gt; void</strong> -
                    This function gets called whenever a PressDown action is
                    triggered.
                  </p>
                  <p>
                    <strong>UpdownButtonData</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>id</strong>: <strong>string</strong>
                    </li>
                    <li>
                      <strong>type</strong>: <strong>updown_button</strong>
                    </li>
                    <li>
                      <strong>attributes</strong>: <strong>Object</strong>
                      <ul>
                        <li>
                          <strong>namespace</strong>: <strong>string</strong>
                        </li>
                        <li>
                          <strong>namespaceRank</strong>:{" "}
                          <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalScore</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalRank</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalVotes</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>userVoteDirection</strong>:{" "}
                          <strong>-1 | 0 | 1</strong>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>

              <h4>Clap Button</h4>
              <p>
                Clap buttons behave like Medium applauses. Users can like
                multiple times and every other call from the same user will
                increment the claps number.
              </p>
              <Code>
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
              </Code>
              <h5 id="optional-props-4">Optional props</h5>
              <ul>
                <li>
                  <p>
                    <strong>onPress</strong>:{" "}
                    <strong>(buttonData: ClapButtonData) =&gt; void</strong> -
                    This function gets called whenever a Press action is
                    triggered.
                  </p>
                  <p>
                    <strong>ClapButtonData</strong>
                  </p>
                  <ul>
                    <li>
                      <strong>id</strong>: <strong>string</strong>
                    </li>
                    <li>
                      <strong>type</strong>: <strong>clap_button</strong>
                    </li>
                    <li>
                      <strong>attributes</strong>: <strong>Object</strong>
                      <ul>
                        <li>
                          <strong>namespace</strong>: <strong>string</strong>
                        </li>
                        <li>
                          <strong>namespaceRank</strong>:{" "}
                          <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalClaps</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>totalRank</strong>: <strong>number</strong>
                        </li>
                        <li>
                          <strong>userClaps</strong>: <strong>number</strong>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4>Button Templates</h4>
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
              <Code>
                {`import { LikeButton } from '@lyket/react';

export StandingOvation = () => {
  return (
    <>
      <h4>Do you like pizza?</h4>
      <LikeButton
        id="do-you-like-pizza"
        component={ClapButton.templates.Twitter}
      />
    </>
  );
};`}
              </Code>
              <h4>Custom Buttons</h4>
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
              <Code>
                {`import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4>Do you like pizza?</h4>
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
              </Code>
              <p>
                <strong>Custom ClapButton</strong>
              </p>
              <Code>
                {`import { ClapButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4>Do you like pizza?</h4>
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
              </Code>
              <p>
                <strong>Custom UpdownButton</strong>
              </p>
              <Code>
                {`import { UpdownButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4>Do you like pizza?</h4>
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
};`}
              </Code>
              <h4>Styling buttons</h4>
              <h4>Resizing</h4>
              <p>
                All buttons can be resized by wrapping them in a container and
                changing the font-size.
              </p>
              <h4>Apply your color scheme and fonts</h4>
              <p>
                Lyket uses the <a href="https://theme-ui.com/home">theme-ui</a>{" "}
                library, allowing you to provide your own theme to the buttons
                through the <strong>theme</strong> prop in the provider. Colors
                support rgba, hex, and color names.
              </p>
              <ul>
                <li>
                  <strong>primary</strong> - Changes the background color of the
                  "like" button, when user has liked.
                </li>
                <li>
                  <strong>secondary</strong> - Changes the background color of
                  the "dislike" button, when user has disliked.
                </li>
                <li>
                  <strong>background</strong> - Changes the background color of
                  the inactive button.
                </li>
                <li>
                  <strong>text</strong> - Changes the counter's text and the
                  icon's color.
                </li>
                <li>
                  <strong>highlight</strong> - Changes the animation color.
                </li>
              </ul>
              <p>These are the default values:</p>
              <Code>
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
  },
  fontWeights: {
    body: 400,
    bold: 700,
  },
};`}
              </Code>
              <p>
                The Provider component makes a deep merge, so you can overwrite
                the theme object totally or partially.
              </p>
              <p>
                Not all the templates support theming. Read the templates detail
                to know which ones.
              </p>
              <h4>reCAPTCHA</h4>
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
