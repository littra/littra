import React from "react";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import DairyCard from "../../WebSite Ui Components/DairyCard/DairyCard";
import styles from "./css/LatestWorks.css";
import Animation from "../../WebSite Ui Components/Animation/Animation";
import { animateFlag } from "../../WebSite Ui Components/Animation/AnimateFlag";
import { useInView } from "react-intersection-observer";

function LatestWorks() {
  const { ref, inView } = useInView();
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

  return (
    <div className={styles.base} id="portfolio">
      <div ref={ref}>
        <Animation animate={animateFlag.slideRight} inView={inView}>
          <h1 className={styles.dark + " " + styles.topSection}>
            <FormattedMessage {...HomeMessages.portfolioHeading} />
          </h1>
        </Animation>
        <Animation animate={animateFlag.slideLeft} inView={inView}>
          <hr className={styles.divider} />
        </Animation>
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
