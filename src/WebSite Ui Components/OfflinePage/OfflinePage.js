import React, { useEffect, useState } from "react";
import "!style-loader!css-loader!./OfflinePage.css";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import PlanetDefense from "./PlanetDefense";
import CircleDraw from "./CircleDraw";

function OfflinePage(props) {
  const [gameType, setGameType] = useState("");

  useEffect(() => {
    if (navigator.onLine && props.location.pathname === "/offline") {
      props.history.push("/");
    }
  }, []);
  return (
    <div>
      {gameType === "CIRCLE_GAME" ? <CircleDraw /> : null}
      {gameType === "PLANET_GAME" ? <PlanetDefense /> : null}

      {!gameType ? (
        <div className="offlineWrapper">
          <div className="brandTitle">LITTRA</div>
          <hr className="border" />
          <div className="refreshDiv">
            <div className="offlineText">
              You are offline please connect to the internet
            </div>
            <button
              onClick={() => window.location.reload(true)}
              className="gameBtn"
            >
              Refresh
            </button>
          </div>
          <div className="cardWrapper">
            <div className="cardContainer">
              <div className="column">
                <div className="card">
                  <div className="content">
                    <div className="front">
                      <img
                        className="profile"
                        width="100%"
                        src={`${PUBLIC_ASSETS_PATH}/planetDefense.png`}
                        alt="PlanetImg"
                      />
                    </div>
                    <div className="back from-bottom">
                      <div className="textDark">
                        <span className="lineBreak"> Play </span>
                        <div
                          className="gameText"
                          onClick={() => {
                            setGameType("PLANET_GAME");
                          }}
                        >
                          Planet-Game
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cardContainer">
              <div className="column">
                <div className="card">
                  <div className="content">
                    <div className="front">
                      <img
                        className="profile"
                        width="100%"
                        src={`${PUBLIC_ASSETS_PATH}/CanvasDraw.png`}
                        alt="CirlceImg"
                      />
                    </div>
                    <div className="back from-bottom">
                      <div className="textDark">
                        <span className="lineBreak"> Draw </span>
                        <div
                          className="gameText"
                          onClick={() => {
                            setGameType("CIRCLE_GAME");
                          }}
                        >
                          Color-Orbitals
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default OfflinePage;
