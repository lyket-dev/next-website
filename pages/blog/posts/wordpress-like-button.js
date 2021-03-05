import React from "react";
import { UpdownButton, LikeButton, ClapButton, Provider } from "@lyket/react";
import Head from "next/head";
import Link from "next/link";
import Code from "components/Code";
import TryIt from "components/TryIt";

export const meta = {
  title: "Add a Wordpress like button in a matter of seconds"
};

export default function Post() {
  return (
    <>
      <Head>
        <title>Wordpress Like button | Lyket</title>
        <meta
          name="description"
          content="Add a stylish and privacy-friendly Wordpress like button in a matter of seconds"
        />
        <meta
          name="keywords"
          content="Wordpress like button, Wordpress, like button"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h2 className="page__kicker">Wordpress like button</h2>
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <UpdownButton namespace="blog" id="wordpress-video-tutorial" />
          </div>
          <p className="page__text"></p>
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              You have just finished an article on Wordpress and you need a nice{" "}
              <strong>like button to draw attention</strong> and start getting
              feedback?{" "}
            </p>
            <p>
              Lyket let's you{" "}
              <strong>create and style like buttons in Wordpress</strong> in
              just a few seconds! There is no need to be an expert in HTML or
              CSS, or to install any plugin, just{" "}
              <strong>copy and paste a few lines of code</strong> and you'll
              have all that you need to make your website interactive!
            </p>
            <p>
              Lyket let's you can create and customize the size and colors of
              your new buttons and choose among the most famous templates on the
              web, like the <strong>heart like button</strong>
              {"  "}
              <span className="inline-buttons">
                <LikeButton
                  namespace="blog"
                  id="inline-little-heart"
                  hideCounterIfLessThan={9999}
                  component={LikeButton.templates.Twitter}
                />
              </span>
              {"  "}
              or, if you are a fan of Medium, their famous{" "}
              <strong>clap button.</strong>
              {"  "}
              <span className="inline-buttons">
                <ClapButton
                  namespace="blog"
                  id="inline-medium"
                  hideCounterIfLessThan={9999}
                  component={ClapButton.templates.Medium}
                />
              </span>
            </p>
            <p>
              You can then see the buttons statistics on your private area, in
              your own <strong>dashboard</strong>
            </p>
            <h3 id="wordpress-like-button-withut-login">
              Wordpress like button without login
            </h3>
            <p>
              One of the <strong>biggest perks</strong> of using Lyket is that
              your <strong>visitors don't need to login</strong> to leave a
              token of appreciation, still Lyket is able to detect if a visitor
              has already liked your content.
            </p>
            <p>
              This is both great for user experience and for{" "}
              <strong>privacy concerns</strong>, because your visitors don't
              have to identify and their data remain in their own hands!
            </p>
            <p>
              To learn more about how we value privacy, how visitors are
              recognized and how you can change the privacy settings, read our{" "}
              <Link href="/docs/widget">
                <a>documentation.</a>
              </Link>
            </p>
            <h4 id="wordpress-like-button-tutorial">Step-by-step tutorial</h4>
            <p>
              Lets's start with a video that explains how to add a Wordpress
              like button without having to install a plugin
            </p>
            <iframe
              width="100%"
              height="400"
              src="https://www.youtube.com/embed/LHcYHsY8ICM"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
            <p>
              You can easily integrate a like button into your Wordpress blog
              article by following this really easy steps.
            </p>
            <h5 id="wordpress-like-button-script">1. Load Lyket's script</h5>
            <p>
              First thing we do here is copying this code in our footer to make
              Lyket available all around our <strong>Wordpress site</strong>.
            </p>
            <Code>
              {`<script
    src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=acc0dbccce8e557db5ebbe6d605aaa"
/>`}
            </Code>
            <p>
              Be aware that this code uses a test API key that resets all the
              counters every day so, like I am suggesting in the video, you
              should <strong>register to Lyket</strong> to get your own.
            </p>
            <p>
              To do that just navigate to the{" "}
              <a href={`${process.env.appBaseUrl}/signup`}>registration page</a>
              , and your personal public API key, copy it and then replace the
              test one with your own,{" "}
              <strong>after the "apiKey=" query parameter</strong>
            </p>
            <p>
              Once you register you will also be able to visit your dashboard
              where you can see which of your buttons were the most upvoted!
            </p>
            <p>Lets'move on!</p>
            <h5 id="wordpress-like-button">
              2. Create like clap and like/dislike buttons
            </h5>
            <p>
              To <strong>create a Wordpress like button</strong> you need to
              specify the type of button you want to create -{" "}
              <strong>like, clap or like/dislike</strong> - using the{" "}
              <strong>data-lyket-type</strong> attribute.
            </p>
            <p>
              Then choose an unique identifier to create a unique button. Use
              the <strong>data-lyket-id</strong> attribute to specify the name
              of the button. For example in Wordpress you can choose the title
              of your blog post.
            </p>
            <p>
              <strong>data-lyket-namespace</strong> is useful to tag or
              categorize your buttons, and to organize your private dashboard.
              For example if you are creating{" "}
              <strong>like buttons for your Wordpress blog</strong> you can
              choose the namespace "my-wordpress-blog".
            </p>
            <p>In the video we use this code to create a clap button</p>
            <Code>
              {`<div
    data-lyket-type="like"
    data-lyket-namespace="my-wordpress-blog"
    data-lyket-id="my-first-blog-post"
></div>`}
            </Code>
            <p>
              This code will generate this like button on you Wordpress website
            </p>
            <TryIt>
              <LikeButton namespace="blog" id="wordpress-first-example" />
            </TryIt>
            <h5 id="wordpress-customize-button">3. Customize your buttons</h5>
            <p>
              Once you have the hang of how to create a basic like button you
              can <strong>start customizing</strong>! The default template can
              be fully customized choosing your website palette!
            </p>
            <p>Let's see how</p>
            <p>
              Say you want to change the{" "}
              <strong>background color of your button</strong> to a light blue
              shade, the color of the <strong>icon to a violet</strong>, and
              change the active button color to a light orange. Change the
              colors by adding the relative data-lyket attributes.
            </p>

            <Code>
              {`<div
    data-lyket-type="like"
    data-lyket-namespace="my-wordpress-blog"
    data-lyket-id="wordpress-heart-like-button"
    data-lyket-color-background="b8fff3"
    data-lyket-color-text="violet"
    data-lyket-color-primary="rgba(255, 224, 138, 0.4)"
></div>`}
            </Code>
            <TryIt>
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
                <LikeButton namespace="blog" id="wordpress-example-colors" />
              </Provider>
            </TryIt>
            <p>
              You can read more on how to customize the buttons in the{" "}
              <Link href="/docs/widget">
                <a>widget documentation.</a>
              </Link>
            </p>
            <h3 id="wordpress-heart-like-button">
              Wordpress heart like button{" "}
            </h3>
            <p>
              Say you want to create a Twitter-like{" "}
              <strong>heart like button</strong>, nothing easier!
            </p>
            <p>Simply add the template name to the code we wrote earlier</p>
            <Code>
              {`<div
    data-lyket-type="like"
    data-lyket-namespace="my-wordpress-blog"
    data-lyket-id="wordpress-heart-like-button"
    data-lyket-template="twitter"
></div>`}
            </Code>
            <p>
              This code will generate the famous
              <strong> heart shaped like button</strong> on you Wordpress
              website!
            </p>
            <TryIt>
              <LikeButton
                namespace="blog"
                id="wordpress-first-example"
                component={LikeButton.templates.Twitter}
              />
            </TryIt>
            <h5>What if my Wordpress theme does not support HTML widgets?</h5>
            <p>
              <strong>Some themes do not support custom HTML widgets</strong>,
              like the one we use in the video tutorial. To fix that you can
              install a plugin like{" "}
              <a
                href="https://wordpress.org/plugins/insert-headers-and-footers/"
                target="_blank"
                rel="noopener noreferrer"
              >
                this one
              </a>
              , called <em>Insert headers</em> and footers and then follow the
              instructions!
            </p>
            <p>
              Even if you don't want to install the plugin you can still use
              Lyket! Because of the way Lyket is built{" "}
              <strong>
                you can also directly paste Lyket's script together with each
                button
              </strong>{" "}
              without impacting your pageviews count or performance!
            </p>
            <h5>More on the Wordpress like buttons</h5>
            <p>
              To choose and customize the buttons follow the{" "}
              <Link href="/docs/widget">
                <a>widget documentation.</a>
              </Link>
            </p>
            <p>
              P.S.: If you’re using Wordpress you are probably accustomed to
              plugins. We are developing a{" "}
              <strong>Lyket Wordpress plugin</strong>, write to us if you are
              interested!
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
