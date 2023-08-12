import React from "react";
import {
  ApplauseSandbox,
  LikeSandbox,
  UpdownSandbox,
} from "components/ButtonBox";

export default function Templates() {
  return (
    <div className="page">
      <section className="page__section">
        <h1 className="page__title">Templates</h1>
        <p className="page__text">
          With Lyket you can choose from readymade templates carefully designed
          for all kind of websites. New templates are constantly added!
        </p>
        <p className="page__text">
          Do you have an idea for the perfect clap or like button?{" "}
          <a href="mailto:lyket.dev@gmail.com">Write to us</a> explaining your
          idea or make a pull request to our open-source{" "}
          <a
            href="https://github.com/lyket-dev/lyket/tree/master/packages/react"
            target="_blank"
            rel="noreferrer"
          >
            Github repository
          </a>{" "}
        </p>
      </section>
      <ApplauseSandbox />
      <LikeSandbox />
      <UpdownSandbox />
    </div>
  );
}
