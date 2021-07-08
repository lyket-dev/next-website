import React, { useState } from "react";
import { Provider, ClapButton, LikeButton, UpdownButton } from "@lyket/react";
import Window from "./Window";
import useAsyncEffect from "utils/useAsyncEffect";
import { rankLikeButtonsByNamespace } from "utils/rank";

const buttonsByType = {
  clap: { component: ClapButton, color: "blue" },
  like: { component: LikeButton, color: "blue" },
  updown: { component: UpdownButton, color: "blue" }
};

const Ranking = () => {
  const [sortingArray, setSortingArray] = useState(null);
  const [selected, setSelected] = useState("updown");
  const [dummy, setDummy] = useState(true);
  const Button = buttonsByType[selected].component;

  useAsyncEffect(async () => {
    const rank = await rankLikeButtonsByNamespace({
      namespace: "ranking-sandbox",
      type: selected
    });

    setSortingArray(rank);
  }, [setSortingArray, dummy, selected]);

  return (
    <>
      <div className="space--bottom-4">
        <div className="menu">
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

          <span>|</span>
          <button
            className={`menu__link${selected === "clap" ? " active" : " "}`}
            onClick={e => {
              e.preventDefault();
              setSelected("clap");
            }}
          >
            Clap
          </button>
        </div>
      </div>
      {sortingArray && (
        <div className="ranking__flex">
          {[`${selected}-gameboy`, `${selected}-sn`, `${selected}-nes`]
            .sort((a, b) => {
              return sortingArray.indexOf(a) - sortingArray.indexOf(b);
            })
            .map(name => (
              <div className="ranking__element" key={`${selected}-${name}`}>
                <img
                  className="ranking__image"
                  src={`/assets/${name.split("-")[1]}.png`}
                ></img>
                <Provider
                  apiKey={process.env.lyketPublicApiKey}
                  baseUrl={process.env.apiBaseUrl}
                  theme={{
                    colors: {
                      primary: buttonsByType[selected].color
                    }
                  }}
                >
                  <Button
                    onPress={buttonData => setDummy(!dummy)}
                    onPressUp={buttonData => setDummy(!dummy)}
                    onPressDown={buttonData => setDummy(!dummy)}
                    namespace="ranking-sandbox"
                    id={name}
                  />
                </Provider>
              </div>
            ))}
        </div>
      )}
    </>
  );
};

export default Ranking;
