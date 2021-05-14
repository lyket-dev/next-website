import React, { useState } from "react";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";

const ButtonBox = ({ children, name, fontSize }) => {
  return (
    <div className="box">
      <div
        className="box__button__container"
        style={{ fontSize: `${fontSize}px` }}
      >
        {children}
      </div>
      <p className="box__title">{name}</p>
    </div>
  );
};

const Flag = ({ children }) => {
  return (
    <section className="page__section">
      <div className="page__container">
        <div className="flag">{children}</div>
      </div>
    </section>
  );
};

export const ApplauseSandbox = () => {
  const [fontSize, setFontSize] = useState(24);

  return (
    <Flag>
      <div className="flag__left">
        <h4 className="flag__title">Clap Buttons</h4>
        <div className="box__buttons">
          <span>Change size:</span>
          <button onClick={() => fontSize < 60 && setFontSize(fontSize + 4)}>
            +
          </button>
          <button onClick={() => fontSize > 0 && setFontSize(fontSize - 4)}>
            -
          </button>
        </div>
      </div>
      <div className="flag__right">
        <div className="box__container">
          <ButtonBox name="Default" fontSize={fontSize}>
            <ClapButton id="default" namespace="demo" />
          </ButtonBox>

          <ButtonBox name="Medium" fontSize={fontSize}>
            <ClapButton
              id="medium"
              namespace="demo"
              component={ClapButton.templates.Medium}
            />
          </ButtonBox>

          <ButtonBox name="Heart" fontSize={fontSize}>
            <ClapButton
              id="heart"
              namespace="demo"
              component={ClapButton.templates.Heart}
            />
          </ButtonBox>
        </div>
      </div>
    </Flag>
  );
};

export const LikeSandbox = () => {
  const [fontSize, setFontSize] = useState(24);

  return (
    <Flag>
      <div className="flag__left">
        <h4 className="flag__title">Like Buttons</h4>
        <div className="box__buttons">
          <span>Change size:</span>
          <button onClick={() => fontSize < 60 && setFontSize(fontSize + 4)}>
            +
          </button>
          <button onClick={() => fontSize > 0 && setFontSize(fontSize - 4)}>
            -
          </button>
        </div>
      </div>
      <div className="flag__right">
        <div className="box__container">
          <ButtonBox name="Default" fontSize={fontSize}>
            <LikeButton id="default" namespace="demo" />
          </ButtonBox>
          <ButtonBox name="Twitter" fontSize={fontSize}>
            <LikeButton
              id="twitter"
              namespace="demo"
              component={LikeButton.templates.Twitter}
            />
          </ButtonBox>
          <ButtonBox name="Chevron" fontSize={fontSize}>
            <LikeButton
              id="chevron"
              namespace="demo"
              component={LikeButton.templates.Chevron}
            />
          </ButtonBox>
        </div>
      </div>
    </Flag>
  );
};

export const UpdownSandbox = () => {
  const [fontSize, setFontSize] = useState(24);

  return (
    <Flag>
      <div className="flag__left">
        <h4 className="flag__title">Up/down Buttons</h4>
        <div className="box__buttons">
          <span>Change size:</span>

          <button onClick={() => fontSize < 60 && setFontSize(fontSize + 4)}>
            +
          </button>
          <button onClick={() => fontSize > 0 && setFontSize(fontSize - 4)}>
            -
          </button>
        </div>
      </div>
      <div className="flag__right">
        <div className="box__container">
          <ButtonBox name="Default" fontSize={fontSize - 6}>
            <UpdownButton id="default" namespace="demo" />
          </ButtonBox>
          <ButtonBox name="Reddit" fontSize={fontSize - 6}>
            <UpdownButton
              id="reddit"
              namespace="demo"
              component={UpdownButton.templates.Reddit}
            />
          </ButtonBox>
          <ButtonBox name="Chevron" fontSize={fontSize - 6}>
            <UpdownButton
              id="chevron"
              namespace="demo"
              component={UpdownButton.templates.Chevron}
            />
          </ButtonBox>
        </div>
      </div>
    </Flag>
  );
};
