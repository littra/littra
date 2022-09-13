import React, { useEffect, useState } from "react";
import "!style-loader!css-loader!./OfflinePage.css";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import PlanetDefense from "./PlanetDefense";
import OrbitalsDraw from "./OrbitalsDraw";

function OfflinePage() {
  const [offline, setOffline] = useState(false);
  const [modeOne, setModeOne] = useState(false);
  const [modeTwo, setModeTwo] = useState(false);

  useEffect(() => {
    if (!navigator.onLine) setOffline(true);
  }, []);

  const PlanetGame = () => {
    setModeOne(true);
  };
  const DrawOrbitals = () => {
    setModeTwo(true);
  };
  return (
    <>
      {offline && (
        <div>
          {modeTwo ? <OrbitalsDraw /> : null}
          {modeOne ? <PlanetDefense /> : null}
          {!modeTwo && !modeOne ? (
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
                            <div className="gameText" onClick={PlanetGame}>
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
                            alt="BlasterImg"
                          />
                        </div>
                        <div className="back from-bottom">
                          <div className="textDark">
                            <span className="lineBreak"> Draw </span>
                            <div className="gameText" onClick={DrawOrbitals}>
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
          {!offline && null}
        </div>
      )}
    </>
  );
}

export default OfflinePage;
