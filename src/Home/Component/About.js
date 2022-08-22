import React from "react";
import styles from "./css/SecondTopBanner.css";
import Image from "../../general/Image";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import { motion } from "framer-motion/dist/framer-motion";
var images = [
  {
    img: "welcomeOne.jpg",
  },
  {
    img: "welcomeTwo.jpg",
  },
  {
    img: "welcomeThree.jpg",
  },
  {
    img: "welcomeFour.jpg",
  },
  {
    img: "welcomeFive.jpg",
  },
  {
    img: "welcomeSix.jpg",
  },
  {
    img: "welcomeSeven.jpg",
  },
  {
    img: "welcomeEight.jpg",
  },
];
export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false,
      images,
      currentImg: 0,
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => this.changeBackgroundImage(), 3500);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  changeBackgroundImage() {
    let newCurrentImg = 0;
    const { images, currentImg } = this.state;
    const noOfImages = images.length;

    if (currentImg !== noOfImages - 1) {
      newCurrentImg = currentImg + 1;
    }
    this.setState({ currentImg: newCurrentImg });
  }

  toggleShowMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { images, currentImg } = this.state;
    const urlString = images[currentImg];
    return (
      <div
        className={styles.base}
        style={{
          backgroundImage: `url(${PUBLIC_ASSETS_PATH}/${urlString.img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "1s all linear",
        }}
        id="aboutus"
      >
        <motion.div
          className={styles.left}
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <div className={styles.featureWrapper}>
            <h1 className={styles.darkColor}>
              <FormattedMessage {...HomeMessages.aboutHeading} />
            </h1>
            <hr className={styles.border} />
            <div className={styles.imageWrapperMobile}>
              <Image
                src={`${PUBLIC_ASSETS_PATH}/image1.png`}
                paddingBottom="80%"
              />
            </div>
            <div className={styles.pad}>
              <p className={styles.aboutText}>
                <FormattedMessage {...HomeMessages.aboutTextOne} />
              </p>
              <button className={styles.showMore} onClick={this.toggleShowMore}>
                {this.state.showMore ? "" : "Show more..."}
              </button>
              {this.state.showMore && (
                <div className={styles.moreContent}>
                  <p className={styles.aboutText}>
                    <FormattedMessage {...HomeMessages.aboutTextTwo} />
                  </p>
                  <p className={styles.aboutText}>
                    <FormattedMessage {...HomeMessages.aboutTextThree} />
                  </p>
                  <button
                    className={styles.showMore}
                    onClick={this.toggleShowMore}
                  >
                    {!this.state.showMore ? "" : "Show Less..."}
                  </button>
                </div>
              )}
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.right}
          initial={{ y: "-100vw" }}
          animate={{ y: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <div className={styles.imageWrapper}>
            <Image
              src={`${PUBLIC_ASSETS_PATH}/image1.png`}
              paddingBottom="370px"
            />
          </div>
        </motion.div>
      </div>
    );
  }
}
