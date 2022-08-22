import React from "react";
import { useEffect } from "react";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import DairyCard from "../../WebSite Ui Components/DairyCard/DairyCard";
import styles from "./css/LatestWorks.css";
import { motion } from "framer-motion/dist/framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion/dist/framer-motion";
function LatestWorks() {
  const LatestWorkData = [
    {
      icon: "video-conference.svg",
      header: <FormattedMessage {...HomeMessages.littraPersonalization} />,
      desc: <FormattedMessage {...HomeMessages.littraPersonalizationDesc} />,
      link: "https://app.littra.in",
      image: "meeting.png",
    },
    {
      icon: "disherve.png",
      header: <FormattedMessage {...HomeMessages.littraChatBot} />,
      desc: <FormattedMessage {...HomeMessages.littraChatBotDesc} />,
      link: "https://apps.apple.com/us/app/disherve/id1496988145",
      image: "dish.png",
    },
  ];
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
          bounce: 0.5,
        },
      });
    }
    if (!inView) {
      animationOne.start({ x: "-130vh" });
      animationTwo.start({ x: "120vh" });
    }
  }, [inView]);
  return (
    <div className={styles.base} id="portfolio">
      <div ref={ref}>
        <motion.div className={styles.topSection} animate={animationOne}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.portfolioHeading} />
          </h1>
        </motion.div>
        <motion.hr className={styles.divider} animate={animationTwo} />
      </div>
      <div className={styles.cardMain}>
        <div className={styles.cardArea}>
          <div className={styles.cardSection}>
            {LatestWorkData.map((item, index) => {
              return (
                <div key={index}>
                  <DairyCard
                    header={item.header}
                    icon={item.icon}
                    link={item.link}
                    desc={item.desc}
                    image={item.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LatestWorks;
