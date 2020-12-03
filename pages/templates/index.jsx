import React from "react";
import ButtonBox from "components/ButtonBox";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

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
          <a href="mailto:write@lyket.dev">Write to us</a> explaining your idea
          or make a pull request to our open-source{" "}
          <a href="https://github.com/lyket-dev/react" target="_blank">
            Github repository
          </a>{" "}
        </p>
      </section>
      <section className="section">
        <div className="section__container">
          <div className="flag">
            <div className="flag__left">
              <h4 className="flag__title">Clap Buttons</h4>
            </div>
            <div className="flag__right">
              <div className="box__container">
                <ButtonBox name="Default">
                  <ClapButton id="default" namespace="demo" />
                </ButtonBox>

                <ButtonBox name="Medium">
                  <ClapButton
                    id="medium"
                    namespace="demo"
                    component={ClapButton.templates.Medium}
                  />
                </ButtonBox>
              </div>
            </div>
          </div>

          <div className="flag">
            <div className="flag__left">
              <h4 className="flag__title">Like Buttons</h4>
            </div>
            <div className="flag__right">
              <div className="box__container">
                <ButtonBox name="Default">
                  <LikeButton id="default" namespace="demo" />
                </ButtonBox>
                <ButtonBox name="Twitter">
                  <LikeButton
                    id="twitter"
                    namespace="demo"
                    component={LikeButton.templates.Twitter}
                  />
                </ButtonBox>
              </div>
            </div>
          </div>

          <div className="flag">
            <div className="flag__left">
              <h4 className="flag__title">Up/down Buttons</h4>
            </div>
            <div className="flag__right">
              <div className="box__container">
                <ButtonBox name="Default">
                  <UpdownButton id="default" namespace="demo" />
                </ButtonBox>
                <ButtonBox name="Reddit">
                  <UpdownButton
                    id="reddit"
                    namespace="demo"
                    component={UpdownButton.templates.Reddit}
                  />
                </ButtonBox>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
