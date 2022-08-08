import React, { useEffect, useState } from "react";
import styles from "./AnimatedCard.css";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../../Home/Messages/HomeMessages";
import { forEach } from "lodash";

function AnimatedCard() {
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
  const [data, setData] = useState(AnimatedCardData);
  const [activeCard, setActiveCard] = useState(null);

  function MouseEnter(event) {
    event.target.classList.toggle(styles.active);
  }

  function MouseLeave(event) {
    event.target.classList.remove(styles.active);
  }

  // Scrolling function according to screen

  // const animation = (index) => {
  //   window.addEventListener("transitionend", function(event) {
  //     var expand = document.querySelectorAll(".AnimatedCardOption");
  //     console.log("expand", expand);
  //     // const activeElement = index === 5 ? 5 : index + 1;
  //     // setActiveCard(activeElement);
  //     // handleTransitionEnd(activeElement);
  //     console.log({ event });
  //     console.log(activeElement);
  //   });
  // };

  // const looping = (event, index) => {
  //   console.log("enter++");
  //   event.target.classList.add(styles.active);

  //   if (index === 0) {
  //     console.log("if...");
  //   }
  //   // setTimeout((event) => {
  //   //   console.log("This will run after 1 second!", index);
  //   //   if (index === 0) {
  //   //     event.currentTarget.classList.add(styles.active);
  //   //   }
  //   //   if (index === 1) {
  //   //     console.log("yes...");
  //   //   }
  //   // }, 1000);
  //   // console.log("indx++", index);
  // };

  // function looping(scroll) {
  //   console.log(event);
  //   // var eventData = event;
  //   // event.target.classList.add(styles.active);

  //   const activeElement = index === 5 ? 5 : index + 1;
  //   setActiveCard(activeElement);

  // if (AnimatedCardData[0].id === "one") {
  //   // console.log("This will run after 1 second!", index);
  //   event.target.classList.add(styles.active);
  // }
  // console.log(AnimatedCardData[0].id);
  // var name = document.getElementsByClassName(styles.AnimatedCardOption);

  // setTimeout((e) => {
  //   if (AnimatedCardData[0].id === "one") {
  //     console.log(eventData, "event+++++++");
  //     console.log("This will run after 1 second!");
  //     eventData.classList.add(styles.active);
  //   }
  //   // if (index === 1) {
  //   //   console.log("yes...");
  //   // }
  // }, 2000);
  // event.target.classList.remove(styles.active);
  // }

  // let screen = () => {
  //   window.addEventListener("scroll", function() {
  //     var scroll = document.querySelectorAll("#optionId");
  //     for (var i = 0; i < scroll.length; i++) {
  //       var windowHeight = window.innerHeight;
  //       var scrollTop = scroll[i].getBoundingClientRect().top;
  //       var scrollPoint = 150;

  //       if (scrollTop < windowHeight - scrollPoint) {
  //         // looping(scroll);
  //         // scroll[i].classList.add(styles.active);
  //         // if (AnimatedCardData[0].id === "one") {
  //         //   scroll[i].classList.add(styles.active);
  //         // }
  //         // lopping();
  //       } else {
  //         scroll[i].classList.remove(styles.active);
  //       }
  //     }
  //   });
  // };

  // screen();

  // // Handling Function according to screen width
  // var widths = [0, 730, 1660];

  // function resizeFn() {
  //   if (window.innerWidth >= widths[0] && window.innerWidth < widths[2]) {
  //     // screen();
  //   } else if (
  //     window.innerWidth >= widths[1] &&
  //     window.innerWidth < widths[2]
  //   ) {
  //   }
  // }
  // window.onresize = resizeFn;
  // resizeFn();
  return (
    <>
      <div className={styles.AnimatedCardMain}>
        <div className={styles.AnimatedCardOptions}>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                id="optionId"
                className={`${styles.AnimatedCardOption} ${
                  index === activeCard ? styles.active : ""
                }`}
                // className={styles.AnimatedCardOption}
                onMouseEnter={MouseEnter}
                onMouseLeave={MouseLeave}
                style={{
                  backgroundImage: `url(${PUBLIC_ASSETS_PATH}/${item.image})`,
                  backgroundRepeat: "no-repeat",
                  marginRight: "10px",
                  backgroundSize: "cover",
                }}
                onTransitionEnd={(event) => {
                  const activeElement = activeCard === 5 ? 0 : activeCard + 1;
                  setActiveCard(activeElement);
                  // handleTransitionEnd(activeElement);
                  // console.log({ event });
                  console.log(activeElement, index + 1, "++++++++++");
                }}
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
