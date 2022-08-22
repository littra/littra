import React from "react";
import { useEffect } from "react";
import styles from "./css/FeatureTwoBanner.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import AnimatedCard from "../../WebSite Ui Components/FlexCard/AnimatedCard";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
function FeatureTwoBanner() {
  const { ref, inView } = useInView();
  const animationOne = useAnimation();
  const animationTwo = useAnimation();
  // animation Onscroll Start

  useEffect(() => {
    if (inView) {
      animationOne.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      animationTwo.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.3,
        },
      });
    }
    if (!inView) {
      animationOne.start({ x: "-100vh" });
      animationTwo.start({ x: "100vh" });
    }
  }, [inView]);

  return (
    <div>
      <div className={styles.base} id="pages">
        <div className={styles.topSection} ref={ref}>
          <motion.h1 className={styles.dark} animate={animationOne}>
            <FormattedMessage {...HomeMessages.richFeatureHeading} />
          </motion.h1>
          <motion.p className={styles.richFeature} animate={animationTwo}>
            <FormattedMessage {...HomeMessages.richFeatureDes} />
          </motion.p>
        </div>
        <motion.hr className={styles.divider} animate={animationOne} />
        <div className={styles.infoWrapper}>
          <AnimatedCard />
        </div>
      </div>
    </div>
  );
}

export default FeatureTwoBanner;
