import React from "react";
import { FormattedMessage } from "react-intl";
import ShapeShifter from "../../WebSite Ui Components/ShapeShiter/ShapeShifter";
import HomeMessages from "../Messages/HomeMessages";
import styles from "./css/OurCreativity.css";
import { motion } from "framer-motion/dist/framer-motion";
import useScrollAnimation from "./useScrollAnimation";
function OurCreativity() {
  const { ref, slideRight, slideLeft } = useScrollAnimation();

  return (
    <div className={styles.base} id={"creativity"}>
      <div ref={ref}>
        <motion.div className={styles.topSection} animate={slideRight}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.shapeShifterHeading} />
          </h1>
        </motion.div>
        <motion.hr className={styles.divider} animate={slideLeft} />
      </div>
      <div className={styles.infoWrapper}>
        <ShapeShifter />
      </div>
    </div>
  );
}

export default OurCreativity;
