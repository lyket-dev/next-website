import React from "react";
import Arrow from "public/icons/outline/arrow-right.svg";
import { ClapButton } from "@lyket/react";
import Link from "next/link";
import Head from "next/head";
import Code from "components/Code";

export const meta = {
  title: "Lyket Count API: Simplifying Counting with an Intuitive API",
};

export default function Post() {
  return (
    <>
      <Head>
        <title>
          Lyket Count API - Simplifying Counting with an Intuitive API
        </title>
        <meta
          content="Lyket Count API is a versatile and user-friendly solution for counting interactions, ranging
              from tracking website hits to monitoring user actions"
          name="description"
        />
        <meta name="keywords" content="Count API, counter, counting, API" />
      </Head>

      <div className="page">
        <section className="page__section">
          <h1 className="page__kicker">Count API</h1>
          <h2 className="page__title">{meta.title}</h2>
        </section>
        <section className="page__section">
          <div className="markdown">
            <div className="center big">
              <ClapButton namespace="blog" id="count-api" />
            </div>
            <p>
              Counting is a fundamental operation in many applications, ranging
              from tracking website hits to monitoring user interactions. With
              the advent of APIs, developers can now leverage powerful tools to
              simplify and streamline their counting needs. One such API, Lyket
              count API, stands out as a versatile and user-friendly solution.
              In this article, we will explore the capabilities of our count API
              and how it can be used to effortlessly count anything.
            </p>
            <h2>Getting Started</h2>
            <p>
              To ensure the security and integrity of your counters, Lyket
              requires identity verification. As a result, you need to provide a
              unique alphanumeric value known as the public API key that belongs
              only to you. Obtaining the public API key involves registering
              with Lyket. Once you have completed the registration process, you
              will receive the necessary API key to authenticate your website
              and enable Lyket functionality.
            </p>
            <div className="center">
              <a className="button" href={`${process.env.appBaseUrl}/signup`}>
                Register now to get your own API key
                <Arrow />
              </a>
            </div>
            <h2>Create a Counter</h2>
            <p>
              To begin using the Count API, you need to create a new counter, in
              Lyket they are called buttons, because they trigger on user
              interaction. Each button can increment, decrement, and retrieve
              the current value of any event. All counters are accessible using
              a label, that is constitued by a unique key within a namespace.
              Within each namespace, you can generate as many counters as
              necessary to suit your counting requirements. To create a counter,
              simply make any request to the Lyket API using the unique
              namespace/id combination.
            </p>
            <p>
              For example, making a request to{" "}
              <code>
                https://api.lyket.dev/v1/clap-buttons/user-visits/my-first-blog-post
              </code>{" "}
              will automatically create a counter with ID
              "user-visits/my-first-blog-post".
            </p>
            <h2>Choose Counter Behaviour</h2>
            <p>
              Depending on the metric you want to track and count, you may need
              different type of counting behaviour. Lyket count API provides
              four different style of counting.
            </p>
            <ul>
              <li>
                Clap counters: the same user can increment the counter multiple
                times. This is useful to track user visits to your webpages.
              </li>

              <li>
                Like/dislike counters, also known as Updown counters: users can
                either add or subtract one to the counter total, once. This is
                useful to count unique visits, or to track scores that can also
                have negative value.
              </li>
              <li>
                Rating counters: users can add any value to the counter total,
                once. This is useful to weight your scores, according to a
                custom logic.
              </li>
              <li>
                Like counters: users can only increment each counter by one. It
                allows also to rollback and remove the user plus one. This is
                useful to count unique visits or to track votes.
              </li>
            </ul>
            <p>
              To read the list of all the possible actions that our API offers,
              please visit our{" "}
              <Link href="/docs/api#schema">API documentation page</Link>
            </p>
            <h2>Getting Current Value of a Counter</h2>
            <p>
              Upon making a request to the endpoint{" "}
              <code>
                https://api.lyket.dev/v1/clap-buttons/user-visits/my-first-blog-post
              </code>{" "}
              , you will receive a response indicating the current value of the
              counter. This information can be utilized to display real-time
              statistics or provide valuable insights into user engagement.
            </p>
            <Code>
              {`<!DOCTYPE html>
<html>
<head>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const counterUrl = "https://api.lyket.dev/v1/clap-buttons/my-page/my-button"; // Replace with your counter ID
      const apiKey = "YOUR_API_KEY"; // Replace with the API key you got from registration

      const options = {
        headers: {
          "Authorization": \`Bearer \${apiKey}\`
        }
      };

      fetch(counterUrl, options)
        .then(response => response.json())
        .then(({ data }) => {
          const counter = document.getElementById("counter");
          counter.innerHTML = \`Counter: \${data.attributes.total_claps}\`;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  </script>
</head>
<body>
  <div id="counter"></div>
</body>
</html>
`}
            </Code>
            <h2>Incrementing Counters Using Buttons</h2>
            <p>
              One of the most common use cases for a count API is counting each
              time a user has clicked a button or interacted with some element
              in your webpage. We can use the clap behaviour to track everytime
              a user hits a button and increment the total counter by one, like
              in this example:
            </p>
            <Code>
              {`<!DOCTYPE html>
<html>
<head>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const counterUrl = "https://api.lyket.dev/v1/clap-buttons/my-page/my-button/press";  // Replace /my-page/my-button with your counter ID
      const apiKey = "YOUR_API_KEY"; // Replace with the API key you got from registration

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer \${apiKey}\`
        }
      };

      const button = document.getElementById("counterButton");

      button.addEventListener("click", function() {
        fetch(counterUrl, options)
          .then(response => response.json())
          .then(({ data }) => {
            console.log("API response:", data);
            const counterContainer = document.getElementById("counter");
            counterContainer.innerHTML = \`Counter: \${data.attributes.total_claps}\`;
          })
          .catch(error => {
            console.error("Error:", error);
          });
      });
    });
  </script>
</head>
<body>
  <button id="counterButton">Increment Counter</button>
  <div id="counter"></div>
</body>
</html>
`}
            </Code>
            <p>
              If you want to use our out-of-the-box Lyket buttons, checkout our{" "}
              <Link href="/html">HTML widget</Link> that provides also a nice
              looks to your counter buttons.
            </p>
            <h2>Track User Visits</h2>
            <p>
              Anothe common use cases for a Count API is incrementing a counter
              to track the occurrence of visits to a webpage. Even if Lyket
              count API is made to track button clicks, the API could also
              easily be used as a straightforward endpoint for incrementing any
              counter. Each time this endpoint is requested, the corresponding
              counter will increase by one. For example, to track the number of
              hits a page receives, you can use the behaviour associated to the
              clap button, where you can increment endlessly a counter. Use the
              following code to implement a visit tracking counter:
            </p>
            <Code>
              {`<!DOCTYPE html>
<html>
<head>
  <script>
    document.addEventListener("DOMContentLoaded", function() {
      const counterUrl = "https://api.lyket.dev/v1/clap-buttons/visits/name-of-my-page/press";
      const apiKey = "YOUR_API_KEY"; // Replace with the API key you got from registration

      const options = {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          "Authorization": \`Bearer \${apiKey}\`
        }
      };

      fetch(counterUrl, options)
        .then(response => response.json())
        .then(({ data }) => {
          const resultContainer = document.getElementById("result");
          resultContainer.innerHTML = \`Total visits to this page: \${JSON.stringify(
            data.attributes.total_claps,
          )}\`;
        })
        .catch(error => {
          console.error("Error:", error);
        });
    });
  </script>
</head>
<body>
  <div id="result"></div>
</body>
</html>

`}
            </Code>
            <h2>Why Using a Count API?</h2>
            <p>
              Lyket count API's versatility allows it to be utilized in a wide
              range of applications. Some possible use cases include:
            </p>
            <ul>
              <li>
                Website Analytics: Track the number of visits, unique visitors,
                or button clicks on your website.
              </li>
              <li>
                Social Media Metrics: Monitor the number of likes, shares, or
                comments on a post or a tweet.
              </li>
              <li>
                Application Usage: Count the number of times a feature or
                functionality is accessed within your application.
              </li>
              <li>
                Gaming Statistics: Keep track of high scores, achievements, or
                player interactions in games.
              </li>
            </ul>
            <h2>Conclusion</h2>
            <p>
              Lyket's count API provides a hassle-free solution for counting and
              tracking various events or interactions. By leveraging its
              intuitive API, and providing different behaviours for different
              necessities, developers can easily create, manage, and retrieve
              counters for any purpose, with flexibility and control. Whether
              you need to monitor website hits, user interactions, or any other
              numerical count, our count API simplifies the process and empowers
              developers to focus on building innovative applications.
            </p>
          </div>
        </section>
      </div>
    </>
  );
}
