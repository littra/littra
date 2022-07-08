import React from "react";
import styles from "./css/FeatureTwoBanner.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import AnimatedCard from "../../WebSite Ui Components/FlexCard/AnimatedCard";
export default class FeatureTwoBanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
    };
  }
  handleScroll = () => {
    if (
      document.documentElement.scrollTop < window.innerHeight * 3 &&
      document.documentElement.scrollTop > window.innerHeight * 2
    ) {
      this.setState({
        translateY:
          (document.documentElement.scrollTop - window.innerHeight * 3) / 1.5,
      });
    }
  };
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll");
  }

  render() {
    return (
      <div className={styles.base} id="pages">
        <div className={styles.topSection}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.richFeatureHeading} />
          </h1>
          <p className={styles.richFeature}>
            <FormattedMessage {...HomeMessages.richFeatureDes} />
          </p>
        </div>
        <hr className={styles.divider} />
        <div className={styles.infoWrapper}>
          <AnimatedCard />
        </div>
      </div>
    );
  }
}
