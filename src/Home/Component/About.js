import React from "react";
import styles from "./css/SecondTopBanner.css";
import Image from "../../general/Image";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import Animation, {
  ANIMATE_FLAG,
} from "../../WebSite Ui Components/Animation/Animation";
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
        <div className={styles.left}>
          <div className={styles.featureWrapper}>
            <Animation animate={ANIMATE_FLAG.SLIDE_LEFT}>
              <h1 className={styles.darkColor}>
                <FormattedMessage {...HomeMessages.aboutHeading} />
              </h1>
            </Animation>
            <Animation animate={ANIMATE_FLAG.SLIDE_RIGHT}>
              <hr className={styles.border} />
            </Animation>
            <Animation animate={ANIMATE_FLAG.SLIDE_UP}>
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
                <button
                  className={styles.showMore}
                  onClick={this.toggleShowMore}
                >
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
            </Animation>
          </div>
        </div>
        <Animation animate={ANIMATE_FLAG.SLIDE_UP}>
          <div className={styles.right}>
            <div className={styles.imageWrapper}>
              <Image
                src={`${PUBLIC_ASSETS_PATH}/image1.png`}
                paddingBottom="370px"
              />
            </div>
          </div>
        </Animation>
      </div>
    );
  }
}
