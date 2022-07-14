import React from "react";
import styles from "./AnimatedCard.css";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";

function AnimatedCard() {
  const AnimatedCardData = [
    {
      icon: "f1.svg",
      title: <FormattedMessage {...HomeMessages.f1} />,
      desc: <FormattedMessage {...HomeMessages.fd1} />,
      image: "LayoutDesign.jpg",
    },
    {
      icon: "f2.svg",
      title: <FormattedMessage {...HomeMessages.f2} />,
      desc: <FormattedMessage {...HomeMessages.fd2} />,
      image: "documentation.jpg",
    },
    {
      icon: "f3.svg",
      title: <FormattedMessage {...HomeMessages.f3} />,
      desc: <FormattedMessage {...HomeMessages.fd3} />,
      image: "parallex.png",
    },

    {
      icon: "f4.svg",
      title: <FormattedMessage {...HomeMessages.f4} />,
      desc: <FormattedMessage {...HomeMessages.fd4} />,
      image: "html5.jpg",
    },
    {
      icon: "f5.svg",
      title: <FormattedMessage {...HomeMessages.f5} />,
      desc: <FormattedMessage {...HomeMessages.fd5} />,
      image: "support.jpg",
    },
    {
      icon: "f6.svg",
      title: <FormattedMessage {...HomeMessages.f6} />,
      desc: <FormattedMessage {...HomeMessages.fd6} />,
      image: "LightDark.jpg",
    },
  ];

  function MouseEnter(event) {
    event.target.classList.toggle(styles.active);
  }

  function MouseLeave(event) {
    event.target.classList.remove(styles.active);
  }

  return (
    <>
      <div className={styles.AnimatedCardMain}>
        <div className={styles.AnimatedCardOptions}>
          {AnimatedCardData.map((item, index) => {
            return (
              <div
                className={styles.AnimatedCardOption}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                style={{
                  backgroundImage: `url(${PUBLIC_ASSETS_PATH}/${item.image})`,
                  backgroundRepeat: "no-repeat",
                  marginRight: "10px",
                }}
              >
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
                      <p> {item.title} </p>
                    </div>
                    <div className={styles.sub} style={{ padding: "5px" }}>
                      <p> {item.desc} </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://static.fontawesome.com/css/fontawesome-app.css"
      />
      <link
        rel="stylesheet"
        href="https://pro.fontawesome.com/releases/v5.2.0/css/all.css"
      />
    </>
  );
}

export default AnimatedCard;
