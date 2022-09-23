import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useAnimation } from "framer-motion";
export const ANIMATE_FLAG = {
  SLIDE_RIGHT: "SLIDE_RIGHT",
  SLIDE_LEFT: "SLIDE_LEFT",
  SLIDE_SMOOTH_LEFT: "SLIDE_SMOOTH_LEFT",
  SLIDE_SMOOTH_RIGHT: "SLIDE_SMOOTH_RIGHT",
  POP_UP: "POP_UP",
  SLIDE_UP: "SLIDE-UP",
  FADE_IN: "FADE_IN",
  GENERAL: "GENERAL",
};
import { useInView } from "react-intersection-observer";

function Animation({ children, animate, custom }) {
  const SLIDE_RIGHT = useAnimation();
  const SLIDE_LEFT = useAnimation();
  const SLIDE_SMOOTH_LEFT = useAnimation();
  const SLIDE_SMOOTH_RIGHT = useAnimation();
  const SLIDE_UP = useAnimation();
  const POP_UP = useAnimation();
  const FADE_IN = useAnimation();
  const GENERAL = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      SLIDE_RIGHT.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.4,
        },
      });
      SLIDE_LEFT.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.2,
          bounce: 0.4,
        },
      });
      SLIDE_SMOOTH_RIGHT.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      SLIDE_SMOOTH_LEFT.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.5,
          bounce: 0.3,
        },
      });
      SLIDE_UP.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      POP_UP.start({
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.3,
        },
      });
      FADE_IN.start({
        x: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1,
          bounce: 0.5,
        },
        scale: [1.2, 1],
      });
      GENERAL.start({
        ...custom,
      });
    }
    if (!inView) {
      SLIDE_RIGHT.start({ x: "-40vh", opacity: 0 });
      SLIDE_LEFT.start({ x: "40vh", opacity: 0 });
      SLIDE_SMOOTH_RIGHT.start({ x: "-40vh", opacity: 0 });
      SLIDE_SMOOTH_LEFT.start({ x: "40vh", opacity: 0.7 });
      SLIDE_UP.start({ y: "8vh", opacity: 0 });
      POP_UP.start({ y: "10vh", opacity: 0, duration: 1 });
      FADE_IN.start({ opacity: 0 });
      GENERAL.start(custom && custom.initial);
    }
  }, [inView]);

  function getAnimationTypeState() {
    if (animate === ANIMATE_FLAG.SLIDE_RIGHT) return SLIDE_RIGHT;
    if (animate === ANIMATE_FLAG.SLIDE_LEFT) return SLIDE_LEFT;
    if (animate === ANIMATE_FLAG.SLIDE_SMOOTH_RIGHT) return SLIDE_SMOOTH_RIGHT;
    if (animate === ANIMATE_FLAG.SLIDE_SMOOTH_LEFT) return SLIDE_SMOOTH_LEFT;
    if (animate === ANIMATE_FLAG.SLIDE_UP) return SLIDE_UP;
    if (animate === ANIMATE_FLAG.POP_UP) return POP_UP;
    if (animate === ANIMATE_FLAG.FADE_IN) return FADE_IN;
    if (animate === ANIMATE_FLAG.GENERAL) return GENERAL;
  }

  function getMotionWrapper(children) {
    return (
      <motion.div animate={getAnimationTypeState()} {...custom} ref={ref}>
        {children}
      </motion.div>
    );
  }

  return getMotionWrapper(children);
}

export default Animation;
