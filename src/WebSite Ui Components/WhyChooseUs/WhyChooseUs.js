import React from "react";
import "!style-loader!css-loader!./WhyChooseUs.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import Animation, { ANIMATE_FLAG } from "../Animation/Animation";

function WhyChooseUs() {
  return (
    <div className="whyUsWrapper">
      <Animation animate={ANIMATE_FLAG.FADE_IN}>
        <div className="whyUsMain" id="whyus">
          <Animation animate={ANIMATE_FLAG.SLIDE_RIGHT}>
            <div className="topSection">
              <h1 className="dark">
                <FormattedMessage {...HomeMessages.whyUsHeading} />
              </h1>
            </div>
          </Animation>
          <Animation animate={ANIMATE_FLAG.SLIDE_LEFT}>
            <hr className="divider" />
          </Animation>
          <section className="mainContainer">
            <div className="center-div">
              <h2>Why you choice Us ?</h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type.
              </p>
            </div>

            <div className="choices">
              <div>
                <div className="left-top">
                  <div className="left-top-circle">
                    <img
                      src="https://i.ibb.co/VJmZKFj/high-quality.png"
                      alt="highquality"
                    />
                  </div>

                  <div className="left-top-text">
                    <h3 className="left-top-head">High Quality Equipment</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div className="right-top">
                <div className="right-top-circle">
                  <img src="https://i.ibb.co/qgKNr59/backup.png" alt="backup" />
                </div>

                <div className="right-top-text">
                  <h3 className="right-top-head">Everybody Backups</h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.{" "}
                  </p>
                </div>
              </div>
              <div className="right-bottom">
                <div className="right-bottom-circle">
                  <img src="https://i.ibb.co/Kbd0xbp/smart.png" alt="smart" />
                </div>

                <div className="right-bottom-text">
                  <h3 className="right-bottom-head">
                    Smart intelligence Models
                  </h3>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.{" "}
                  </p>
                </div>
              </div>
              <div>
                <div className="left-bottom">
                  <div className="left-bottom-circle">
                    <img
                      src="https://i.ibb.co/G53sbGK/customer.png"
                      alt="customer"
                    />
                  </div>

                  <div className="left-bottom-text">
                    <h3 className="left-bottom-head">24/7 Customer Service</h3>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Animation>
    </div>
  );
}

export default WhyChooseUs;
