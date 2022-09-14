import React from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import Code from "components/Code";
import Link from "next/link";
import Head from "next/head";
import {
  ApplauseSandbox,
  LikeSandbox,
  UpdownSandbox,
} from "components/ButtonBox";

import { LikeButton, ClapButton, UpdownButton, Provider } from "@lyket/react";

export default function Docs() {
  return (
    <>
      <Head>
        <title>Wordpress like button plugin | Lyket</title>
        <meta
          content="Create beautiful Wordpress like buttons, clap buttons or like/dislike buttons with Lyket like buttons plugin!"
          name="description"
        />
        <meta
          name="keywords"
          content="Wordpress like button plugin, like button plugin Wordpress"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <div className="docs__title__container">
            <h1 className="page__kicker">Wordpress like button plugin</h1>
            <h2 className="docs__title">Wordpress plugin docs</h2>
            <div className="docs__menu__container">
              <QuickDocsMenu />
            </div>
          </div>
          <div className="docs">
            <div className="markdown">
              <p>
                <strong>Lyket Wordpress like button plugin</strong> lets you
                create beautiful like buttons on your <strong>Wordpress</strong>{" "}
                website!
              </p>
              <div className="center">
                <a
                  className="button"
                  href="https://wordpress.org/plugins/lyket-like-buttons"
                  target="_blank"
                >
                  See it now on Wordpress!
                </a>
              </div>
              <LikeSandbox />
              <UpdownSandbox />
              <ApplauseSandbox />
              <h4 id="features">Lyket plugin features</h4>
              <p>
                One of the <strong>biggest perks</strong> of using Lyket is that
                while your website <strong>users don't need to login</strong> to
                leave a "like", Lyket is still able to detect if a user has
                already liked your content.
              </p>
              <p>
                This is both great for user experience and for{" "}
                <strong>privacy reasons</strong>, because your visitors don't
                have to identify, their data is not stored anywhere and not sold
                to third parts!
              </p>
              <p>
                To learn more about how we value privacy, how visitors are
                recognized and how you can change the privacy settings, read our{" "}
                <Link href="/docs/html" title="Like button HTML">
                  <a>documentation.</a>
                </Link>
              </p>
              <p>
                On the other hand, Lyket gives you everything you need to
                <strong>monitor user feedback</strong>! In your private area you
                can see all buttons statistics, and manage user settings.
              </p>
              <p>
                You can find Lyket like buttons official Lyket plugin in the{" "}
                <a
                  href="https://wordpress.org/plugins/search/lyket"
                  target="_blank"
                >
                  Wordpress plugin directory
                </a>
                . Since you are there don't forget to...
              </p>
              <div className="center">
                <a
                  className="button"
                  href="https://wordpress.org/plugins/lyket-like-buttons/#reviews"
                  target="_blank"
                >
                  Leave us a review ♥
                </a>
              </div>
              <h4 id="get-lyket-like-buttons-plugin">
                Get Lyket on Wordpress!
              </h4>
              <p>
                Implementing Lyket is quite simple. Let's go through all the
                steps!
              </p>
              <h4 id="installation">1. Install the plugin</h4>
              <p>
                First install the like button plugin from the{" "}
                <a
                  href="https://wordpress.org/plugins/search/lyket"
                  target="_blank"
                >
                  Wordpress plugin directory
                </a>
                or search for <strong>keyword "Lyket"</strong>, or{" "}
                <strong>"like button" tag</strong> in the "Add new" search form.
              </p>
              <img
                src="/assets/wp/wordpress-like-button-search.png"
                alt="wordpress-like-button-search"
              />
              <p>
                When installed you will see the settings menu on your Wordpress
                sidebar.
              </p>
              <h4 id="registration">2. Register on Lyket</h4>
              <p>
                To register, navigate to{" "}
                <a href="https://app.lyket.dev" target="_blank">
                  Lyket registration page
                </a>{" "}
                and copy the alpha-numeric key that you will get after
                registration, <strong>the API key</strong>.
              </p>
              <img
                src="/assets/wp/wordpress-like-button-api-key.png"
                alt="wordpress-like-button-api-key"
              />
              <h4 id="authorize">3. Authorize Lyket</h4>
              <p>
                If you click on the menu button in the Wordpress sidebar you
                will see the user settings page. This is where you need to
                insert the API key you copied in the settings page
              </p>
              <img
                src="/assets/wp/wordpress-like-button-registration.png"
                alt="wordpress-like-button-registration"
              />
              <h4 id="buttons">4. Choose a button type</h4>
              <p>
                With our like button plugin you can create{" "}
                <strong>like, clap and like/dislike</strong> buttons for pages
                and posts. Remember to enable buttons to see them in your pages
                and posts!
              </p>
              <div className="flex-center">
                <div>
                  <img
                    className="flex-center__item"
                    src="/assets/wp/wordpress-like-button-enable-buttons.png"
                    alt="wordpress-like-button-enable-buttons"
                  />
                </div>
                <div>
                  <img
                    className="flex-center__item"
                    src="/assets/wp/wordpress-like-button-type-buttons.png"
                    alt="wordpress-like-button-type-buttons"
                  />
                </div>
              </div>
              <p>
                Each button type has different behaviors, styles and
                out-of-the-box templates, let's have a look at them, one by one!
              </p>
              <h3>Like button</h3>
              <p>
                Like buttons behave like Twitter buttons. Users can only like
                once and a subsequent call from the same user will remove the
                user's like.
              </p>
              <ul>
                <li>
                  <strong>Simple: </strong>
                  <span className="inline-buttons h-space">
                    <LikeButton namespace="docs" id="inline-simple" />
                  </span>
                </li>
                <li>
                  <strong>Twitter: </strong>
                  <span className="inline-buttons h-space">
                    <LikeButton
                      namespace="docs"
                      id="inline-twitter"
                      component={LikeButton.templates.Twitter}
                    />
                  </span>
                </li>
                <li>
                  <strong>Chevron: </strong>
                  <span className="inline-buttons h-space">
                    <LikeButton
                      namespace="docs"
                      id="inline-chevron"
                      component={LikeButton.templates.Chevron}
                    />
                  </span>
                </li>
              </ul>
              <h3 id="updown-button">Like/dislike button</h3>
              <p>
                Like/dislike buttons, or Updown buttons, behave like Reddit
                buttons. Visitors can only like or dislike once and a subsequent
                call from the same visitor will remove the visitor's vote or
                unvote.
              </p>
              <h6 id="updown-templates">UpdownButton Templates</h6>
              <ul>
                <li>
                  <strong>Simple:</strong>{" "}
                  <span className="inline-buttons h-space">
                    <UpdownButton namespace="docs" id="inline-simple" />
                  </span>
                </li>
                <li display="flex-center">
                  <strong>Reddit:</strong>{" "}
                  <span className="inline-buttons h-space">
                    <UpdownButton
                      namespace="docs"
                      id="inline-reddit"
                      component={UpdownButton.templates.Reddit}
                    />
                  </span>
                </li>
                <li>
                  <strong>Chevron</strong>{" "}
                  <span className="inline-buttons h-space">
                    <UpdownButton
                      namespace="docs"
                      id="inline-chevron"
                      component={UpdownButton.templates.Chevron}
                    />
                  </span>
                </li>
              </ul>

              <h3 id="clap-button">Clap button</h3>
              <p>
                Clap buttons behave like Medium applause buttons. Users can like
                multiple times and every other call from the same user will
                increment the claps number.
              </p>
              <h6 id="clap-templates">ClapButton Templates</h6>
              <ul>
                <li>
                  <strong>Simple:</strong>{" "}
                  <ClapButton namespace="docs" id="inline-simple" />
                </li>
                <li>
                  <strong>Medium:</strong>
                  <span className="inline-buttons h-space">
                    <ClapButton
                      namespace="docs"
                      id="inline-medium"
                      component={ClapButton.templates.Medium}
                    />
                  </span>
                </li>
                <li>
                  <strong>Heart:</strong>{" "}
                  <span className="inline-buttons h-space">
                    <ClapButton
                      namespace="docs"
                      id="inline-heart"
                      component={ClapButton.templates.Heart}
                    />
                  </span>
                </li>
              </ul>
              <h4 id="styling-the-buttons">Style the buttons</h4>
              <p>
                You can change the default colors for{" "}
                <strong>page and posts</strong> separately, and see the live
                preview of your changes before saving in the{" "}
                <strong>preview window</strong> on top!
              </p>
              <img
                src="/assets/wp/wordpress-like-button-page-buttons.png"
                alt="wordpress-like-button-page-buttons"
              />
              <ul>
                <li>
                  <strong>Pressed like button color</strong> - Changes the color
                  of the "like" button, when user has liked.
                </li>
                <li>
                  <strong>Pressed dislike button color</strong> - Changes the
                  color of the "dislike" button, when user has disliked.
                </li>
                <li>
                  <strong>Inactive button color</strong> - Changes the
                  background color of the inactive button.
                </li>
                <li>
                  <strong>Counter font color</strong> - Changes the counter's
                  text color.
                </li>
                <li>
                  <strong>Icon color</strong> - Changes the icon's color.
                </li>
                <li>
                  <strong>Animation color</strong> - Changes the animation's
                  color.
                </li>
              </ul>
              <p>Let's see an example for a like/dislike button</p>
              <div className="flex-center big">
                <div className="try">Try it! →</div>
                <Provider
                  apiKey={process.env.lyketPublicApiKey}
                  theme={{
                    colors: {
                      primary: "#b8fff3",
                      secondary: "rgba(220, 234, 108, 0.6)",
                      background: "rgba(255, 224, 138, 0.4)",
                      text: "black",
                      icon: "violet",
                      highlight: "#ff00c3",
                    },
                  }}
                >
                  <UpdownButton namespace="docs" id="plugin-like-colors" />
                </Provider>
              </div>
              <h5 id="clap-button">Leave us a review</h5>
              <p>
                Lyket is rather new and still needs some support! Be sure to
                leave us a review if you liked our plugin
              </p>
              <div className="center">
                <a
                  className="button"
                  href="https://wordpress.org/plugins/lyket-like-buttons/#reviews"
                  target="_blank"
                >
                  Leave us a review!
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
