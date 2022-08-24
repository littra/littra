import React from "react";
import "!style-loader!css-loader!./WhyChooseUs.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import { motion } from "framer-motion/dist/framer-motion";
import useScrollAnimation from "../../Home/Component/useScrollAnimation";

function WhyChooseUs() {
  const { ref, slideRight, slideLeft, popUp } = useScrollAnimation();

  return (
    <div className="whyUsMain" id="whyus" ref={ref}>
      <motion.div className="topSection" animate={slideRight}>
        <h1 className="dark">
          <FormattedMessage {...HomeMessages.whyUsHeading} />
        </h1>
      </motion.div>
      <motion.hr className="divider" animate={slideLeft} />
      <motion.section className="mainContainer" animate={popUp}>
        <div className="center-div">
          <h2>Why you choice Us ?</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type.
          </p>
        </div>

        <div className="choices">
          <motion.div className="left-top" animate={slideRight}>
            <div className="left-top-circle">
              <img
                src="https://i.ibb.co/VJmZKFj/high-quality.png"
                alt="highquality"
              />
            </div>

            <div className="left-top-text">
              <h3 className="left-top-head">High Quality Equipment</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div className="right-top" animate={slideLeft}>
            <div className="right-top-circle">
              <img src="https://i.ibb.co/qgKNr59/backup.png" alt="backup" />
            </div>

            <div className="right-top-text">
              <h3 className="right-top-head">Everybody Backups</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div className="right-bottom" animate={slideLeft}>
            <div className="right-bottom-circle">
              <img src="https://i.ibb.co/Kbd0xbp/smart.png" alt="smart" />
            </div>

            <div className="right-bottom-text">
              <h3 className="right-bottom-head">Smart intelligence Models</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
          </motion.div>

          <motion.div className="left-bottom" animate={slideRight}>
            <div className="left-bottom-circle">
              <img src="https://i.ibb.co/G53sbGK/customer.png" alt="customer" />
            </div>

            <div className="left-bottom-text">
              <h3 className="left-bottom-head">24/7 Customer Service</h3>
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.{" "}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}

export default WhyChooseUs;
