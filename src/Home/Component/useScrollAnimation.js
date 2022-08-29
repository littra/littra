import React from "react";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
function useScrollAnimation() {
  const { ref, inView } = useInView();
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

  return {
    ref,
    slideRight,
    slideLeft,
    popUp,
    slideUp,
  };
}
export default useScrollAnimation;
