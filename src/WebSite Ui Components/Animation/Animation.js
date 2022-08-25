import React, { useEffect } from "react";
import { motion } from "framer-motion/dist/framer-motion";
import { useAnimation } from "framer-motion/dist/framer-motion";
import { animateFlag } from "./AnimateFlag";

function Animation({ children, animate, inView, custom }) {
  const slideRight = useAnimation();
  const slideLeft = useAnimation();
  const popUp = useAnimation();
  const slideUp = useAnimation();

  // animation Onscroll Start

  useEffect(() => {
    if (inView) {
      slideRight.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.4,
        },
      });
      slideLeft.start({
        x: 0,
        transition: {
          type: "spring",
          duration: 1.3,
          bounce: 0.3,
        },
      });
      popUp.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 6,
          bounce: 0.3,
          mass: 1,
          stiffness: 200,
        },
      });
      slideUp.start({
        y: 0,
        transition: {
          type: "spring",
          duration: 5,
          bounce: 1,
          mass: 1,
          stiffness: 50,
        },
      });
    }
    if (!inView) {
      slideRight.start({ x: "-100vw" });
      slideLeft.start({ x: "100vh" });
      popUp.start({ y: "25vh", opacity: 0, duration: 1 });
      slideUp.start({ y: "100vh" });
    }
  }, [inView]);

  function getAnimationTypeState() {
    if (animate === animateFlag.slideRight) return slideRight;
    if (animate === animateFlag.slideLeft) return slideLeft;
    if (animate === animateFlag.popUp) return popUp;
    if (animate === animateFlag.slideUp) return slideUp;
  }

  function getMotionWrapper(children) {
    switch (children.type) {
      case "div":
        return (
          <motion.div
            {...children.props}
            animate={getAnimationTypeState()}
            {...custom}
          >
            {children.props.children}
          </motion.div>
        );
      case "h1":
        return (
          <motion.h1
            animate={getAnimationTypeState()}
            {...children.props}
            {...custom}
          >
            {children.props.children}
          </motion.h1>
        );
      case "hr":
        return (
          <motion.hr animate={getAnimationTypeState()} {...children.props} />
        );
    }
  }

  return getMotionWrapper(children);
}

export default Animation;
