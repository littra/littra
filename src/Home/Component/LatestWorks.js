import React from "react";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import DairyCard from "../../WebSite Ui Components/DairyCard/DairyCard";
import styles from "./css/LatestWorks.css";
import { motion } from "framer-motion/dist/framer-motion";
import useScrollAnimation from "./useScrollAnimation";
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
  const { ref, slideRight, slideLeft } = useScrollAnimation();
  return (
    <div className={styles.base} id="portfolio">
      <div ref={ref}>
        <motion.div className={styles.topSection} animate={slideRight}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.portfolioHeading} />
          </h1>
        </motion.div>
        <motion.hr className={styles.divider} animate={slideLeft} />
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
