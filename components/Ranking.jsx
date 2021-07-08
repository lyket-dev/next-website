import React, { useState } from "react";
import { ClapButton, LikeButton, UpdownButton } from "@lyket/react";
import Window from "./Window";
import useAsyncEffect from "utils/useAsyncEffect";
import { rankLikeButtonsByNamespace } from "utils/rank";

const buttonsByType = {
  clap: ClapButton,
  like: LikeButton,
  updown: UpdownButton
};

const Ranking = () => {
  const [sortingArray, setSortingArray] = useState(null);
  const [selected, setSelected] = useState("clap");
  const [dummy, setDummy] = useState(true);
  const Button = buttonsByType[selected];

  useAsyncEffect(async () => {
    const rank = await rankLikeButtonsByNamespace({
      namespace: "ranking-sandbox",
      type: selected
    });

    setSortingArray(rank);
  }, [selected, dummy]);

  return (
    <>
      <div className="space--bottom-4">
        <div className="menu">
          <button
            className={`menu__link${selected === "clap" ? " active" : " "}`}
            onClick={e => {
              e.preventDefault();
              setSelected("clap");
            }}
          >
            Clap
          </button>
          <span>|</span>

          <button
            className={`menu__link${selected === "like" ? " active" : " "}`}
            onClick={e => {
              e.preventDefault();
              setSelected("like");
            }}
          >
            Like
          </button>
          <span>|</span>

          <button
            className={`menu__link${selected === "updown" ? " active" : " "}`}
            onClick={e => {
              e.preventDefault();
              setSelected("updown");
            }}
          >
            Updown
          </button>
        </div>
      </div>
      {sortingArray && (
        <div className="lyket__flex">
          {[`${selected}-gameboy`, `${selected}-sn`, `${selected}-nes`]
            .sort((a, b) => {
              return sortingArray.indexOf(a) - sortingArray.indexOf(b);
            })
            .map(name => (
              <div className="lyket__element" key={`${selected}-${name}`}>
                <img
                  className="lyket__image"
                  src={`/assets/${name.split("-")[1]}.png`}
                ></img>
                <Button
                  onPress={buttonData => setDummy(!dummy)}
                  onPressUp={buttonData => setDummy(!dummy)}
                  onPressDown={buttonData => setDummy(!dummy)}
                  namespace="ranking-sandbox"
                  id={name}
                />
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Ranking;
