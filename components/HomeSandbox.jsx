import React, { useState } from "react";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";
import Window from "./Window";
import Confetti from "react-confetti";

const buttons = {
  clap: ClapButton,
  like: LikeButton,
  updown: UpdownButton
};

const HomeSandbox = () => {
  const [currentButton, setButton] = useState("clap");
  const [showConfetti, setShowConfetti] = useState(false);
  const Button = buttons[currentButton];

  return (
    <>
      <div className="menu">
        <button
          className="menu__link"
          onClick={e => {
            e.preventDefault();
            setButton("like");
          }}
        >
          Like
        </button>
        <span>|</span>

        <button
          className="menu__link"
          onClick={e => {
            e.preventDefault();
            setButton("updown");
          }}
        >
          Updown
        </button>
        <span>|</span>

        <button
          className="menu__link"
          onClick={e => {
            e.preventDefault();
            setButton("clap");
          }}
        >
          Clap
        </button>
      </div>
      <div className="flag">
        {showConfetti && (
          <Confetti width={2000} height={500} recycle={false} gravity={0.4} />
        )}
        <div className="flag__left">
          <Window currentButton={currentButton} />
        </div>
        <div className="flag__right">
          <div className="lyket__container">
            <div className={`lyket__${currentButton}`}>
              <Button
                onPress={buttonData => {
                  if (
                    buttonData.attributes.userHasLiked ||
                    buttonData.attributes.userClaps
                  ) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 3000);
                  } else {
                    setShowConfetti(false);
                  }
                }}
                onPressUp={buttonData => {
                  if (buttonData.attributes.userVoteDirection > 0) {
                    setShowConfetti(true);
                    setTimeout(() => setShowConfetti(false), 3000);
                  } else {
                    setShowConfetti(false);
                  }
                }}
                namespace="homepage"
                id={`everybody-${currentButton}-now`}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeSandbox;
