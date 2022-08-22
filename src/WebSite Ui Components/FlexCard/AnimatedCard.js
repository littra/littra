import React, { useEffect, useState } from "react";
import styles from "./AnimatedCard.css";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import { forEach } from "lodash";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";

const AnimatedCardData = [
  {
    id: "one",
    icon: "f1.svg",
    title: <FormattedMessage {...HomeMessages.f1} />,
    desc: <FormattedMessage {...HomeMessages.fd1} />,
    image: "LayoutDesign.jpg",
  },
  {
    id: "two",
    icon: "f2.svg",
    title: <FormattedMessage {...HomeMessages.f2} />,
    desc: <FormattedMessage {...HomeMessages.fd2} />,
    image: "documentation.jpg",
  },
  {
    id: "three",
    icon: "f3.svg",
    title: <FormattedMessage {...HomeMessages.f3} />,
    desc: <FormattedMessage {...HomeMessages.fd3} />,
    image: "parallex.png",
  },

  {
    id: "four",
    icon: "f4.svg",
    title: <FormattedMessage {...HomeMessages.f4} />,
    desc: <FormattedMessage {...HomeMessages.fd4} />,
    image: "html5.jpg",
  },
  {
    id: "five",
    icon: "f5.svg",
    title: <FormattedMessage {...HomeMessages.f5} />,
    desc: <FormattedMessage {...HomeMessages.fd5} />,
    image: "support.jpg",
  },
  {
    id: "six",
    icon: "f6.svg",
    title: <FormattedMessage {...HomeMessages.f6} />,
    desc: <FormattedMessage {...HomeMessages.fd6} />,
    image: "LightDark.jpg",
  },
];
function AnimatedCard() {
  const [activeCard, setActiveCard] = useState("");

  // animation Onscroll Start
  const { ref, inView } = useInView();
  const animation = useAnimation();
  // animation Onscroll Start

  useEffect(() => {
    if (inView) {
      animation.start({
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
      animation.start({ y: "100vh" });
    }
  }, [inView]);

  useEffect(() => {
    setActiveCard(0);
    transitionFun(0);
  }, []);

  function transitionFun(index) {
    setTimeout(() => {
      if (index === activeCard) {
        const activeElement =
          activeCard + 1 === AnimatedCardData.length ? 0 : activeCard + 1;

        setActiveCard(activeElement);
      }
    }, 1300);
  }

  let screen = () => {
    window.addEventListener("scroll", function() {
      var scroll = document.querySelectorAll("#optionId");
      for (var i = 0; i < scroll.length; i++) {
        var windowHeight = window.innerHeight;
        var scrollTop = scroll[i].getBoundingClientRect().top;
        var scrollPoint = 150;

        if (scrollTop < windowHeight - scrollPoint) {
          scroll[i].classList.add(styles.active);
        } else {
          scroll[i].classList.remove(styles.active);
        }
      }
    });
  };

  // Handling Function according to screen width
  var widths = [0, 750, 1024];

  function resizeFn() {
    if (window.innerWidth >= widths[0] && window.innerWidth < widths[1]) {
      screen();
    } else if (
      window.innerWidth >= widths[1] &&
      window.innerWidth < widths[2]
    ) {
    }
  }
  window.onresize = resizeFn;
  resizeFn();

  return (
    <div ref={ref}>
      <div className={styles.AnimatedCardMain}>
        <motion.div className={styles.AnimatedCardOptions} animate={animation}>
          {AnimatedCardData.map((item, index) => {
            return (
              <div
                key={index}
                id="optionId"
                className={`${styles.AnimatedCardOption} ${
                  index === activeCard ? styles.active : ""
                }`}
                // onMouseEnter={() => setActiveCard(index)}
                style={{
                  backgroundImage: `url(${PUBLIC_ASSETS_PATH}/${item.image})`,
                  backgroundRepeat: "no-repeat",
                  marginRight: "10px",
                  backgroundSize: "cover",
                  transition: "all 2s",
                }}
                onTransitionEnd={() => transitionFun(index)}
              >
                <div style={{ margin: "30px" }}>
                  <div className={styles.shadow}></div>
                  <div className={styles.label}>
                    <div className={styles.icon}>
                      <Icon
                        image={`${PUBLIC_ASSETS_PATH}/${item.icon}`}
                        size={20}
                      />
                    </div>
                    <div className={styles.info}>
                      <div className={styles.title}>
                        <h4> {item.title} </h4>
                      </div>
                      <div className={styles.sub} style={{ padding: "5px" }}>
                        <p> {item.desc} </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
      <link
        rel="stylesheet"
        href="https://static.fontawesome.com/css/fontawesome-app.css"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css"
      />
    </div>
  );
}

export default AnimatedCard;
