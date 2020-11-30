import React from "react";
import { UpdownButton } from "@lyket/react";
import Head from "next/head";

export const meta = {
  title: "How to embed a like button on Notion with Lyket"
};

export default function Post() {
  return (
    <>
      <Head>
        <title>Lyket - Add a like button to Notion</title>
        <meta
          property="og:description"
          content="Lyket lets you add privacy compliant clap and like buttons in any Notion project in a matter of seconds"
          name="description"
        />
      </Head>
      <div className="page">
        <section className="page__section">
          <h1 className="page__title">{meta.title}</h1>
          <div className="half__reaction">
            <UpdownButton namespace="blog" id="embed-on-notion" />
          </div>
          <p className="page__text"></p>
        </section>
        <div className="avatar"></div>
        <section className="page__section">
          <div className="markdown">
            <p>
              Lyket is the ultimate tool to quickly implement GDPR-compliant
              like, clap or vote buttons on any Notion project. From the moment
              you create the button our server will keep track of every visitor
              interaction without storing their personal data.
            </p>
            <p>
              To get started you just need to{" "}
              <a href={`${process.env.appBaseUrl}/signup`}>register</a> to Lyket
              and get your personal public API key.
            </p>
            <h2>How to embed a widget on Notion</h2>
            <p>
              If you’re using Notion then you probably know that you can’t embed
              HTML widgets directly into it and there is not a clean/nice way to
              achieve that. But do not dispair! There are at least 3 workarounds
              to do so at the moment. I will briefly describe the first 2
            </p>
            <ul>
              <li>
                <a href="https://www.notion.so/Welcome-to-the-Potion-Shop-ee919c15f8e6410f9c20e3c6af486430">
                  The potion shop
                </a>{" "}
                It's very easy but you have to create an account.
              </li>
              <li>
                <a href="https://www.notion.so/Welcome-to-the-Potion-Shop-ee919c15f8e6410f9c20e3c6af486430">
                  Github pages
                </a>{" "}
                which is also great and has no limits on the number of widgets
                but adds an ad link to your widgets that just bugged me!
              </li>
              <li>
                <a href="https://htmlsave.com/">htmlsave</a> which is great tool
                but only gives you one widget for free and you have to subscribe
                to add more{" "}
              </li>
            </ul>
            <h2>The Potion Shop</h2>
            <p>
              This is very easy, you have to register on Potion to receive a
              link on which you can load your html. Follow all steps in{" "}
              <a
                href="https://www.notion.so/Create-a-widget-in-5-minutes-865211938cfb4ef2aad53d67da476736"
                target="_blank"
              >
                this tutorial
              </a>
            </p>
            <p>Here is the video on how to do it:</p>
            <video
              playsInline
              controls
              src="/assets/potion-notion.mov"
              type="video/mov"
            ></video>
            <p>
              In the html part you have to paste something similar, depending on
              which button you want to create:
            </p>

            <pre>
              <code class="language-javascript">
                {`<html style="height: 100%;background-color: white;">
  <body>
    <div
      data-lyket-type="like"
      data-lyket-id="notion-test"
      data-lyket-template="twitter"
      style="text-align: center;"
    ></div>

    <script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]></script>
  </body>
</html>`}
              </code>
            </pre>
            <h2>Use Github pages</h2>
            <p>
              Basically the rationale behind embedding in Notion is to host your
              own html containing the Lyket code and copy the link to that page
              to Notion, so you can actually do it using Github pages.
            </p>
            <p>
              Start by creating a new public repo containing as many html files
              as the buttons you want to see on Notion. Each html file should
              contain code something similar to this:
            </p>
            <pre>
              <code class="language-javascript">
                {`<html style="height: 100%;background-color: white;">
  <body>
    <div
      data-lyket-type="like"
      data-lyket-id="notion-test"
      data-lyket-template="twitter"
      style="text-align: center;"
    ></div>

    <script src="https://unpkg.com/@lyket/widget@latest/dist/lyket.js?apiKey=[YOUR-API-KEY]></script>
  </body>
</html>`}
              </code>
            </pre>
            <p>
              Do not remove the style otherwise you will see the default Notion
              background color
            </p>
            <video
              playsInline
              controls
              src="/assets/github-notion-pt1.mov"
              type="video/mov"
            ></video>
            <p>
              You can then tell Github to serve the html pages you just created
              through Github Page by going into Settings -> Select Branch main
              -> select base root -> hit Save
            </p>
            <p>
              Wait a few seconds for Github to publish the content and then you
              will be able to see your buttons on the link that Github provides.
            </p>
            <p>
              For every html file you created Github pages will generate an
              endpoint with the same name. So for example if you have a
              my-button.html you can use the link
              https://my-github-username.github.io/my-repo/my-button to embed in
              Notion
            </p>
            <p>
              After you have a link to your button you can paste it into Notion
              and select embed. And the game is done!
            </p>
            <video
              playsInline
              controls
              src="/assets/github-notion-pt2.mov"
              type="video/mov"
            ></video>
          </div>
        </section>
      </div>
    </>
  );
}
