import React, { useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import Code from "components/Code";
import Head from "next/head";
import Link from "next/link";
import { LikeButton, ClapButton, UpdownButton } from "@lyket/react";

const menu = [
  {
    id: "how-buttons-work",
    label: "How the buttons work",
  },
  {
    id: "installation",
    label: "Installation",
  },
  {
    id: "buttons",
    label: "Configuring the buttons",
  },
  {
    id: "templates",
    label: "Button Templates",
  },
  {
    id: "like-button",
    label: "Configuring a Like Button",
  },
  {
    id: "updown-button",
    label: "Configuring a Like/Dislike Button",
  },
  {
    id: "clap-button",
    label: "Configuring a Clap Button",
  },
  {
    id: "custom-button",
    label: "Create a custom button",
  },
  {
    id: "styling",
    label: "Applying custom style to button templates",
  },
];

export default function Docs() {
  return (
    <>
      <Head>
        <title>Add like, clap and like/dislike buttons to React | Lyket</title>
        <meta
          content="Lyket is a tool to instantly add like, applause and like/dislike on any React project."
          name="description"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <div className="docs__title__container">
          <h2 className="page__kicker">clap & like button on React</h2>
          <h1 className="docs__title">React docs</h1>
          <div className="docs__menu__container">
            <QuickDocsMenu />
          </div>
        </div>
        <section className="page__section">
          <div className="docs">
            <ul className="docs__menu">
              TOPICS
              {menu.map((item) => {
                return (
                  <li key={item.id}>
                    <Link href={`#${item.id}`}>{item.label}</Link>
                  </li>
                );
              })}
            </ul>
            <div className="markdown docs__menu__right">
              <p>
                Lyket is the ultimate tool to add like buttons, applause buttons
                and like/dislike buttons to your React app! The library allows a{" "}
                <strong>great deal of customization</strong> with just a few
                lines of code and it's{" "}
                <strong>compatible with all React frameworks</strong> like
                NextJS, Gatsby, create-react-app.
              </p>
              <p>
                If you want to find out how to use the{" "}
                <strong>React library in detail</strong> you came to the right
                place. If you prefer to{" "}
                <strong>learn with examples and ready-made snippets</strong> to
                copy and paste, you can visit:
              </p>
              <ul>
                <li>
                  <Link href="/blog/posts/react-like-button">
                    <a>How to add like buttons to a React project</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/posts/clap-button">
                    <a>How to add clap buttons to a React project</a>
                  </Link>
                </li>
                <li>
                  <Link href="/blog/posts/react-like-dislike-button">
                    <a>How to add like dislike buttons to a React project</a>
                  </Link>
                </li>
              </ul>
              <h4 id="how-buttons-work">How the buttons work</h4>
              <p>
                All Lyket buttons share these{" "}
                <strong>basic behaviors and features:</strong>
              </p>
              <ul>
                <li>
                  <p>
                    As soon as a button component is mounted, a fetch request is
                    made to retrieve info on the button that{" "}
                    <strong>identifies with the ID and namespace</strong> that
                    you provided.{" "}
                    <strong>
                      If no button is found, a new one will be created
                    </strong>{" "}
                    using the ID/namespace identifier.
                  </p>
                </li>
                <li>
                  <p>
                    Notice that{" "}
                    <strong>
                      the server will create a new button for every different
                      and unique identifier
                    </strong>
                    , so if you change ID or namespace or type the new button
                    won’t inherit the votes.
                  </p>
                </li>
                <li>
                  <p>
                    Every time a visitor interacts with a button, the button
                    counter will update and{" "}
                    <strong>Lyket will flag that the visitor has voted</strong>.
                    Lyket uses an unique random ID stored in the visitor's
                    browser localStorage to identify the visitor, with no need
                    to signup or to use any third party service. To disable the
                    session ID, and therefore use only the IP address to
                    identify a user, set the disableSessionId prop to{" "}
                    <em>true</em> in the Provider component.
                  </p>
                </li>
                <li>
                  <p>
                    Lyket enforces a{" "}
                    <strong>maximum number of sessions IDs per IP</strong>
                    address to avoid receiving too many requests or DDoS
                    attacks. The default is 3 sessions per IP. You can change
                    this number by logging into your private area and edit the
                    user settings.
                  </p>
                </li>
                <li>
                  <p>
                    In the user settings you can also specify{" "}
                    <strong>
                      from which domains Lyket should accept requests
                    </strong>{" "}
                    using your personal API key. If left empty Lyket will accept
                    requests coming from all domains.
                  </p>
                </li>
              </ul>
              <h4 id="installation">Installation</h4>
              <p>Well, Let's get started! To install the component run</p>
              <Code>yarn add @lyket/react</Code>
              <p>or</p>
              <Code>npm install @lyket/react</Code>
              <h5 id="provider">Add Lyket to your app</h5>
              <p>
                Add <strong>the Provider component top-level</strong> and
                configure it using your personal public API key that you can get
                after registering to Lyket
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
                    <strong>
                      theme: Record&lt;'colors' | 'fonts' , Record&lt;string,
                      string&gt;&gt;
                    </strong>{" "}
                    - Allows you to change the default buttons colors and fonts.
                    It doesn't apply to all templates. Read more about it in the{" "}
                    <Link href="#styling">Styling buttons</Link> section at the
                    end of this document.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>recaptchaSiteKey: string</strong> - If you enabled
                    reCAPTCHA in the private area's user settings, you need to
                    provide your reCAPTCHA public key, otherwise your buttons
                    will result as unauthorized. Read more in the{" "}
                    <Link href="#recaptcha">reCAPTCHA</Link> section at the end
                    of this document.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>disableSessionId: boolean</strong>{" "}
                    <strong>Default: false</strong> - If set to <em>true</em>{" "}
                    Lyket won't store a unique session ID for your visitors
                    making them anonymous. Lyket will then discriminate visitors
                    (to tell if they already liked a button or not) only based
                    on the IP address. Disabling the session ID can be useful if
                    you don't want Lyket to result in your cookie detection
                    software.
                  </p>
                </li>
              </ul>
              <div>
                <h4 id="buttons">Configuring the buttons</h4>
                <p>
                  Once you configured the Provider you can start adding buttons
                  anywhere in your app. You can choose among{" "}
                  <strong>three different button types</strong> that have
                  different behaviors and purposes, but all share these required
                  and optional props:
                </p>
                <h6>Required props</h6>
                <ul>
                  <li>
                    <strong>id</strong>: <strong>string</strong> - The API uses
                    the ID to find a button. It should be unique for namespace.
                    It accepts an alphanumeric string with maximum 50
                    characters.
                  </li>
                </ul>
                <h6>Optional props</h6>
                <ul>
                  <li>
                    <p>
                      <strong>namespace</strong>: <strong>string</strong> -
                      Giving a namespace is useful to keep buttons organised,
                      and can be used to fetch statistics. Check the API docs
                      for more information.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>hideCounterIfLessThan</strong>:{" "}
                      <strong>number</strong> - You may want to hide the counter
                      if you are not getting enough feedback. Specify the number
                      of votes/claps/likes you want to receive before showing
                      the counter.
                    </p>
                  </li>
                  <li>
                    <p>
                      <strong>component</strong>:{" "}
                      <strong>React.ReactNode</strong> - If this prop is not
                      provided you will see <strong>the Simple template</strong>
                      . To change the aspect of your buttons you can either
                      choose one of the{" "}
                      <Link href="#templates">ready-made templates</Link> or a{" "}
                      <Link href="#custom">custom component</Link> and pass it
                      through the component attribute.
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
                <h4 id="Button types">Button types</h4>
                <p>
                  The <strong>three types of buttons</strong> are the following:
                </p>
                <ul>
                  <li>
                    <Link href="#like-button">Like Button</Link>
                  </li>
                  <li>
                    <Link href="#updown-button">Updown Button</Link>
                  </li>
                  <li>
                    <Link href="#clap-button">Clap Button</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h4 id="templates">Button Templates</h4>
                <p>
                  Lyket provides a set of{" "}
                  <strong>out-of-the-box templates</strong>. You can see all the
                  available templates in{" "}
                  <Link href="/templates">
                    <a>the templates page</a>
                  </Link>
                </p>
                <p>
                  By default, ie. if you don't specify any template or custom
                  component, Lyket will show the Simple Template.
                </p>
                <h6 id="like-templates">LikeButton Templates</h6>
                <ul>
                  <li>
                    <strong>Simple (default)</strong> - supports custom theme
                  </li>
                  <li>
                    <strong>Twitter</strong>: Twitter style
                  </li>
                  <li>
                    <strong>Chevron</strong>: Chevron style - supports custom
                    theme
                  </li>
                </ul>
                <h6 id="updown-templates">UpdownButton Templates</h6>
                <ul>
                  <li>
                    <strong>Simple (default)</strong> - supports custom theme
                  </li>
                  <li>
                    <strong>Reddit</strong>: Reddit style
                  </li>
                  <li>
                    <strong>Chevron</strong>: Chevron style - supports custom
                    theme
                  </li>
                </ul>
                <h6 id="clap-templates">ClapButton Templates</h6>
                <ul>
                  <li>
                    <strong>Simple (default)</strong> - supports custom theme
                  </li>
                  <li>
                    <strong>Medium</strong>: Medium style
                  </li>
                  <li>
                    <strong>Heart</strong>: Heart style - supports custom theme
                  </li>
                </ul>
                <p>
                  Import templates directly from the button. Here is an example
                  of using the Twitter template on a LikeButton.
                </p>
                <Code>
                  {`import { LikeButton } from '@lyket/react';

export StandingOvation = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
      <LikeButton
        id="do-you-like-pizza"
        component={ClapButton.templates.Twitter}
      />
    </>
  );
};`}
                </Code>
              </div>
              <h5 id="like-button">Like Button</h5>
              <p>Like buttons behave like Twitter like buttons.</p>
              <p>
                <strong>Visitors can only like once</strong> and a subsequent
                request from the same visitor will remove the visitor's like.
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
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <LikeButton namespace="docs" id="react-like-button" />
              </div>
              <h6>Optional props</h6>
              <ul>
                <li>
                  <p>
                    <strong>onPress</strong>:{" "}
                    <em>(buttonData: LikeButtonData) =&gt; void</em> - This
                    function gets called whenever a Press action is triggered.
                  </p>
                </li>
              </ul>
              <p>
                <em>LikeButtonData</em>
              </p>
              <ul>
                <li>
                  <strong>id</strong>: <em>string</em>
                </li>
                <li>
                  <strong>type</strong>: <em>"like_button"</em>
                </li>
                <li>
                  <strong>attributes</strong>: <em>Object</em>
                  <ul>
                    <li>
                      <strong>namespace</strong>: <em>string</em>
                    </li>
                    <li>
                      <strong>namespaceRank</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalLikes</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalRank</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalVotes</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>userLiked</strong>: <em>boolean</em>
                    </li>
                  </ul>
                </li>
              </ul>
              <h5 id="updown-button">Like/Dislike Button</h5>
              <p>Up/down buttons behave like Reddit like/dislike buttons.</p>
              <p>
                Visitors <strong>can only like or dislike once</strong> and a
                subsequent action from the visitor will remove the visitor's
                like or dislike.
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
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <UpdownButton namespace="docs" id="react-updown-button" />
              </div>
              <h6>Optional props</h6>
              <ul>
                <li>
                  <p>
                    <strong>onPressUp</strong>:{" "}
                    <em>(buttonData: UpdownButtonData) =&gt; void</em> - This
                    function gets called whenever a PressUp action is triggered.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>onPressDown</strong>:{" "}
                    <em>(buttonData: UpdownButtonData) =&gt; void</em> - This
                    function gets called whenever a PressDown action is
                    triggered.
                  </p>
                </li>
              </ul>
              <p>
                <em>UpdownButtonData</em>:
              </p>
              <ul>
                <li>
                  <strong>id</strong>: <em>string</em>
                </li>
                <li>
                  <strong>type</strong>: <em>"updown_button"</em>
                </li>
                <li>
                  <strong>attributes</strong>: <em>Object</em>
                  <ul>
                    <li>
                      <strong>namespace</strong>: <em>string</em>
                    </li>
                    <li>
                      <strong>namespaceRank</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalScore</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalRank</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalVotes</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>userVoteDirection</strong>: <em>-1 | 0 | 1</em>
                    </li>
                  </ul>
                </li>
              </ul>
              <h5 id="clap-button">Clap Button</h5>
              <p>Clap buttons behave like Medium applauses.</p>
              <p>
                <strong>Visitors can like multiple times</strong> and every
                other call from the same visitor will increment the claps number
                indefinitely.
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
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <ClapButton namespace="docs" id="react-clap-button" />
              </div>
              <h6 id="optional-props-4">Optional props</h6>
              <ul>
                <li>
                  <p>
                    <strong>onPress</strong>:{" "}
                    <em>(buttonData: ClapButtonData) =&gt; void</em> - This
                    function gets called whenever a Press action is triggered.
                  </p>
                </li>
              </ul>
              <p>
                <em>ClapButtonData</em>:
              </p>
              <ul>
                <li>
                  <strong>id</strong>: <em>string</em>
                </li>
                <li>
                  <strong>type</strong>: <em>"clap_button"</em>
                </li>
                <li>
                  <strong>attributes</strong>: <em>Object</em>
                  <ul>
                    <li>
                      <strong>namespace</strong>: <em>string</em>
                    </li>
                    <li>
                      <strong>namespaceRank</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalClaps</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>totalRank</strong>: <em>number</em>
                    </li>
                    <li>
                      <strong>userClaps</strong>: <em>number</em>
                    </li>
                  </ul>
                </li>
              </ul>
              <h4 id="custom-button">Custom Buttons</h4>
              <p>
                You may want to give a different flavour to a button,{" "}
                <strong>for example using your company logo as the icon</strong>
                . You can do that by{" "}
                <strong>creating your own custom button</strong>!
              </p>
              <p>
                Here is an example for each button type of using a custom
                component by passing it as <strong>"children"</strong>. You can
                pass a custom component also{" "}
                <strong>through the component prop</strong>.
              </p>
              <h6>Custom Like Button</h6>
              <p>
                The clap button component allows you to customize the look and
                feel of your button, like changing the icon, show or hide the
                counter and so on. These are the available props:
              </p>
              <Code>
                {`import { LikeButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
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
              🍕
            </button>
            {isCounterVisible && <div>Total: {totalLikes}</div>}
            {userLiked && <div>Great! I like pizza as well!</div>}
          </>
        )}
      </LikeButton>
    </>
  )
};`}
              </Code>
              <LikeButton
                namespace="docs"
                id="like-button-react-example-custom"
              >
                {({ handlePress, totalLikes, userLiked, isLoading }) => {
                  return (
                    <div className="center">
                      <div className="flex-center big">
                        <div className="try">Try! →</div>
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
              <p>
                <strong>Custom ClapButton</strong>
              </p>
              <p>
                The clap button component allows you to customize the look and
                feel of your button, like changing the icon, show or hide the
                counter and so on. These are the available props:
              </p>
              <ul>
                <li>
                  <strong>handlePress</strong>:{" "}
                  <em>(buttonData: ClapButtonData) =&gt; void</em>
                </li>
                <li>
                  <strong>totalClaps</strong>: <em>number</em>
                </li>
                <li>
                  <strong>userClaps</strong>: <em>number</em>
                </li>
                <li>
                  <strong>isLoading</strong>: <em>boolean</em>
                </li>
                <li>
                  <strong>isCounterVisible</strong>: <em>boolean</em>
                </li>
              </ul>
              <Code>
                {`import { ClapButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
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
              👏
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
              <ClapButton
                namespace="docs"
                id="clap-button-react-example-custom"
              >
                {({ handlePress, totalClaps, userClaps, isLoading }) => {
                  return (
                    <div className="center">
                      <div className="flex-center big">
                        <div className="try">Try! →</div>
                        <button
                          className="huge"
                          onClick={handlePress}
                          disabled={isLoading}
                        >
                          👏
                        </button>
                      </div>
                      <div>Total claps: {totalClaps}</div>
                      <div>You clapped {userClaps} times!</div>
                    </div>
                  );
                }}
              </ClapButton>
              <p>
                <strong>Custom Like/Dislike Button</strong>
              </p>
              <p>
                Like/dislike component allows you to customize the look and feel
                of your button, like changing the icon, show or hide the counter
                and so on. These are the available props:
              </p>
              <ul>
                <li>
                  <strong>handlePressUp</strong>:{" "}
                  <em>(buttonData: ClapButtonData) =&gt; void</em>
                </li>
                <li>
                  <strong>handlePressDown</strong>:{" "}
                  <em>(buttonData: ClapButtonData) =&gt; void</em>
                </li>
                <li>
                  <strong>totalClaps</strong>: <em>number</em>
                </li>
                <li>
                  <strong>userClaps</strong>: <em>number</em>
                </li>
                <li>
                  <strong>isLoading</strong>: <em>boolean</em>
                </li>
                <li>
                  <strong>isCounterVisible</strong>: <em>boolean</em>
                </li>
              </ul>
              <Code>
                {`import { UpdownButton } from '@lyket/react';

export Faq = () => {
  return (
    <>
      <h4 id="Do you like pizza?">Do you like pizza?</h4>
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
              + 🍕
            </button>
            <button onClick={handlePressDown} disabled={isLoading}>
              - 🍕
            </button>
            <div>Total votes: {totalScore}</div>
            <div>
              {
                userVoteDirection > 0
                ? ":D"
                : userVoteDirection === 0
                ? "waiting for vote..."
                : ":("
              }
            </div>
          </>
        )}
      </UpdownButton>
    </>
  );
};`}
              </Code>
              <UpdownButton
                namespace="docs"
                id="like-dislike-button-react-example-custom"
              >
                {({
                  handlePressUp,
                  handlePressDown,
                  totalScore,
                  userVoteDirection,
                  isLoading,
                }) => {
                  return (
                    <div className="center">
                      <div className="flex-center big">
                        <div className="try">Try! →</div>
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
                      </div>
                      <div>Total votes: {totalScore}</div>
                      <div>
                        {userVoteDirection > 0
                          ? ":D"
                          : userVoteDirection === 0
                          ? "waiting for vote..."
                          : ":("}
                      </div>
                    </div>
                  );
                }}
              </UpdownButton>
              <h4 id="styling">Apply custom styling to the button templates</h4>
              <h5>Resizing</h5>
              <p>
                All button templates can be resized by wrapping them in a
                container and <strong>changing the font-size</strong>.
              </p>
              <h5>Apply your color scheme and fonts</h5>
              <p>
                Lyket uses the <a href="https://theme-ui.com/home">theme-ui</a>{" "}
                library, allowing you to provide{" "}
                <strong>your own color palette</strong> to the buttons through
                the <strong>theme</strong> prop in the provider. Colors support
                rgba, hex, and color names.
              </p>
              <h6>Button colors</h6>
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
                  <strong>text</strong> - Changes the counter text color.
                </li>
                <li>
                  <strong>icon</strong> - Changes the icon's color.
                </li>
                <li>
                  <strong>highlight</strong> - Changes the animation color.
                </li>
              </ul>
              <h6>Button fonts</h6>
              <ul>
                <li>
                  <strong>body</strong> - Changes counter font.
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
    icon: '#292929',
  },
  fonts: {
    body: 'inherit',
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
              <h4 id="recaptcha">reCAPTCHA</h4>
              <p>
                Lyket is integrated with Google reCAPTCHA V3 to handle malicious
                use without interrupting <em>human</em> users. To enable it you
                need to provide your Google reCAPTCHA secret key in the user
                settings in the private area and add your recaptcha site key
                through the recaptchaSiteKey prop in the Provider. The key will
                be encrypted.
              </p>
              <p>
                In this way each time a user interacts with a button an
                "invisible" reCAPTCHA check will be performed, keeping your
                website safe.
              </p>
              <p>
                Be aware that if you only set reCAPTCHA secret key in the user
                settings while not passing the reCAPTCHA site key in your
                Provider, the buttons won't work.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
