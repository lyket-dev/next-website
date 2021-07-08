import React, { useEffect, useState } from "react";
import QuickDocsMenu from "components/QuickDocsMenu";
import SwaggerUI from "swagger-ui-react";
import Head from "next/head";
import Anchor from "components/Anchor";
import Ranking from "components/Ranking";
import Code from "components/Code";
import Link from "next/link";

export default function Docs() {
  const [schema, setSchema] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${process.env.apiBaseUrl}/schema`);
      const s = await response.json();
      setSchema(s);
    };

    fetchData();
  }, []);

  return (
    <>
      <Head>
        <title>Lyket ranking API | Lyket</title>
        <meta
          content="Lyket ranking API keeps track of your users likes and dislikes and provides the updated ranking in real-time"
          name="description"
        />
      </Head>
      <div className="page">
        <div className="page__section--gradient" />
        <section className="page__section">
          <div className="docs__title__container">
            <h2 className="page__kicker">like buttons & ranking API</h2>
            <h1 className="docs__title">buttons & ranking API</h1>
            <div className="docs__menu__container">
              <QuickDocsMenu />
            </div>
          </div>
          <div className="docs">
            <div className="markdown">
              <p>
                The API represents Lyket's core, and it is{" "}
                <strong>as simple as powerful</strong>. Here you will find
                information on all the available endpoints to use Lyket at its
                best!
              </p>
              <Anchor slug="buttons-api">
                <h4>Buttons API</h4>
              </Anchor>
              <p>
                First of all, Lyket buttons endpoints will{" "}
                <strong>create a new button if it doesn't exist yet</strong>.
                Let's try to make it clearer! Each time you make a request to
                one of our buttons endpoints, Lyket will look for a button
                according to the type, the ID and the namespace you provided.
              </p>
              <p>So, for example, if you make this request:</p>
              <Code>GET /like-buttons/dinosaurs/t-rex</Code>
              <p>
                Lyket will look for a button that is of type <em>like</em>, has
                been categorized as part of <em>dinosaurs</em>, and has the ID{" "}
                <em>t-rex</em>.
              </p>
              <p>
                If no corresponding button is found, Lyket will create a new
                button with these attributes. In the meantime it will start
                <strong>tracking its score</strong>, the{" "}
                <strong>number of votes</strong> it has received and its{" "}
                <strong>
                  position in different types of{" "}
                  <Link href="#ranking-api">
                    <a>rankings</a>
                  </Link>
                </strong>
                .
              </p>
              <p>
                Lyket provides <strong>three different types of buttons</strong>
                . Each one of them has its own features and behaviors that can
                be used in multiple context according to different needs!
              </p>
              <p>In particular:</p>
              <ul>
                <li>
                  <p>
                    <strong>Like buttons</strong> - behave like{" "}
                    <em>Twitter buttons</em>. Users can only like once and a
                    subsequent call from the same user will remove the user's
                    like.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Like/dislike buttons</strong>, or Updown buttons -
                    behave like <em>Reddit buttons</em>. Visitors can only like
                    or dislike once and a subsequent call from the same visitor
                    will remove the visitor's like or dislike.
                  </p>
                </li>
                <li>
                  <p>
                    <strong>Clap buttons</strong> - behave like{" "}
                    <em>Medium applauses</em>. Users can like multiple times and
                    every other call from the same user will increment the claps
                    number.
                  </p>
                </li>
              </ul>
              <Anchor slug="ranking-api">
                <h3>Ranking API</h3>
              </Anchor>
              <p>
                Lyket specialty and uniqueness is to keep track of votes and to
                return <strong>updated ranking results</strong>. It offers a
                number of endpoints that expose current rankings relative to
                type, namespace and tags.
              </p>
              <p>In particular:</p>
              <ul>
                <li>
                  <Anchor slug="ranking-by-type">
                    <h6>Ranking by type</h6>
                  </Anchor>
                  <p>
                    Returns the current ranking of all buttons with the same
                    type.
                  </p>
                </li>
                <li>
                  <Anchor slug="ranking-by-category">
                    <h6>Ranking by category</h6>
                  </Anchor>
                  <p>
                    Returns the current ranking of all buttons with the same
                    type and category
                  </p>
                </li>
                <li>
                  <Anchor slug="ranking-by-tags">
                    <h6>Ranking by tags</h6>
                  </Anchor>
                  <p>
                    Returns the current ranking of all buttons with the same
                    type and the combination of provided tags
                  </p>
                </li>
              </ul>
              <p>
                For example, let's see wich one of these vintage consoles get
                the most votes!
              </p>
              <Ranking />
              <Anchor slug="schema">
                <h4>Schema</h4>
              </Anchor>
              <p>
                Here is the full documentation on all available endpoints. You
                can try all different endpoints directly from here by
                authorizing calls with your personal public API token.
              </p>
            </div>
          </div>
          <div className="api">{schema && <SwaggerUI spec={schema} />}</div>
        </section>
      </div>
    </>
  );
}
