import React from "react";
import TopBanner from "./TopBanner";
import styles from "./css/Home.css";
import VisibilityChild from "../../general/VisibilityChild";
import FeatureBanner from "./FeatureBanner";
import FeatureTwoBanner from "./FeatureTwoBanner";
import Footer from "../../HeaderFooter/Component/Footer";
import ContactUs from "./Contactus";
import About from "./About";
import WhyUs from "./WhyUs";
import isMobile from "../../Utils/UserAgent";
import Image from "../../general/Image";
import LatestWorks from "./LatestWorks";
import OurCreativity from "./OurCreativity";
import NewFooter from "../../HeaderFooter/NewFooter";
import NewTopBanner from "../NewTopBanner/NewTopBanner";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateY: 0,
    };
  }
  handleScroll = () => {
    if (document.documentElement.scrollTop < window.innerHeight) {
      this.setState({
        translateY: document.documentElement.scrollTop / 1.5,
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
      <div className={styles.base}>
        <div
          className={styles.front}
          style={{
            transform: `translateY(${this.state.translateY}px)`,
          }}
        >
          <TopBanner />
          {/* <NewTopBanner /> */}
        </div>
        <div className={styles.second}>
          <VisibilityChild>
            <About />
          </VisibilityChild>
        </div>
        <div className={styles.third}>
          <VisibilityChild>
            <FeatureBanner />
          </VisibilityChild>
        </div>
        <div className={styles.second}>
          <VisibilityChild>
            <FeatureTwoBanner />
          </VisibilityChild>
        </div>

        <VisibilityChild>
          <OurCreativity />
        </VisibilityChild>

        <VisibilityChild>
          <LatestWorks />
        </VisibilityChild>

        <VisibilityChild>
          <WhyUs />
        </VisibilityChild>

        {/* <VisibilityChild>
          <Team />
        </VisibilityChild> */}
        <ContactUs />
        <NewFooter />
      </div>
    );
  }
}
export default Home;
