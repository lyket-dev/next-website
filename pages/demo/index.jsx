import React from "react";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

export default function Demo() {
  return (
    <div>
      <section className="page">
        <div className="page__container">
          <h1 className="page__title">Demos</h1>
          <p className="page__text">
            With Lyket you can choose from readymade templates carefully
            designed for any kind of content. New templates are constantly
            added! You can control the button size by changing font-size
          </p>
        </div>
      </section>
      <section className="page">
        <div className="page__container">
          <h4 className="page__subtitle">Clap Buttons</h4>
          <div className="box__container">
            <div className="box">
              <p className="box__title">Default</p>
              <div className="box__button">
                <ClapButton id="medium" namespace="demo" />
              </div>
            </div>
            <div className="box">
              <p className="box__title">Medium</p>
              <div className="box__button">
                <ClapButton
                  id="medium"
                  namespace="demo"
                  component={ClapButton.themes.Medium}
                />
              </div>
            </div>
          </div>
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
                  component={LikeButton.themes.Twitter}
                />
              </div>
            </div>
          </div>
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
                  component={UpdownButton.themes.Reddit}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
