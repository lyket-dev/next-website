import React from "react";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

export default function Demo() {
  return (
    <div className="page">
      <section className="page__section">
        <h1 className="page__title">Demo templates</h1>
        <p className="page__text">
          With Lyket you can choose from readymade templates carefully designed
          for any kind of content. New templates are constantly added! You can
          control the button size by changing font-size
        </p>
        <p>
          Do you have an idea for the perfect clap or like button?{" "}
          <a href="mailto:write@lyket.dev">Write to us</a> explaining your idea
          or make a pull request to our open-source{" "}
          <a href="https://github.com/lyket-dev/react" target="_blank">
            Github repository
          </a>{" "}
        </p>
      </section>
      <section className="page__section">
        <h4 className="page__subtitle">Clap Buttons</h4>
        <div className="box__container">
          <div className="box">
            <p className="box__title">Default</p>
            <div className="box__button">
              <ClapButton id="default" namespace="demo" />
            </div>
          </div>
          <div className="box">
            <p className="box__title">Medium</p>
            <div className="box__button">
              <ClapButton
                id="medium"
                namespace="demo"
                component={ClapButton.templates.Medium}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="half__line__container">
        <div className="half__line--yellow">—</div>
      </div>
      <section className="page__section">
        <h4 className="page__subtitle">Like Buttons</h4>
        <div className="box__container">
          <div className="box">
            <p className="box__title">Default</p>
            <div className="box__button">
              <LikeButton id="default" namespace="demo" />
            </div>
          </div>
          <div className="box">
            <p className="box__title">Twitter</p>
            <div className="box__button">
              <LikeButton
                id="twitter"
                namespace="demo"
                component={LikeButton.templates.Twitter}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="half__line__container">
        <div className="half__line--pink">—</div>
      </div>
      <section className="page__section">
        <h4 className="page__subtitle">Up/down Buttons</h4>
        <div className="box__container">
          <div className="box">
            <p className="box__title">Default</p>
            <div className="box__button">
              <UpdownButton id="default" namespace="demo" />
            </div>
          </div>
          <div className="box">
            <p className="box__title">Reddit</p>
            <div className="box__button">
              <UpdownButton
                id="reddit"
                namespace="demo"
                component={UpdownButton.templates.Reddit}
              />
            </div>
          </div>
        </div>
      </section>
      <div className="half__line__container">
        <div className="half__line--green">—</div>
      </div>
    </div>
  );
}
