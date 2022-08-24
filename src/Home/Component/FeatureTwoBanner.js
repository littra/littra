import React from "react";
import styles from "./css/FeatureTwoBanner.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import AnimatedCard from "../../WebSite Ui Components/FlexCard/AnimatedCard";
import { motion } from "framer-motion/dist/framer-motion";
import useScrollAnimation from "./useScrollAnimation";

function FeatureTwoBanner() {
  const { ref, slideRight, slideLeft } = useScrollAnimation();
  return (
    <div>
      <div className={styles.base} id="pages">
        <div className={styles.topSection} ref={ref}>
          <motion.h1 className={styles.dark} animate={slideRight}>
            <FormattedMessage {...HomeMessages.richFeatureHeading} />
          </motion.h1>
          <motion.p className={styles.richFeature} animate={slideLeft}>
            <FormattedMessage {...HomeMessages.richFeatureDes} />
          </motion.p>
        </div>
        <motion.hr className={styles.divider} animate={slideRight} />
        <div className={styles.infoWrapper}>
          <AnimatedCard />
        </div>
      </div>
    </div>
  );
}

export default FeatureTwoBanner;
