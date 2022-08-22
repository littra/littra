import React from "react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import ShapeShifter from "../../WebSite Ui Components/ShapeShiter/ShapeShifter";
import HomeMessages from "../Messages/HomeMessages";
import styles from "./css/OurCreativity.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
function OurCreativity() {
  const { ref, inView } = useInView();
  const animationOne = useAnimation();
  const animationTwo = useAnimation();
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
          duration: 1,
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
    <div className={styles.base} id={"creativity"}>
      <div ref={ref}>
        <motion.div className={styles.topSection} animate={animationOne}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.shapeShifterHeading} />
          </h1>
        </motion.div>
        <motion.hr className={styles.divider} animate={animationTwo} />
      </div>
      <div className={styles.infoWrapper}>
        <ShapeShifter />
      </div>
    </div>
  );
}

export default OurCreativity;
