import React from "react";
import TopBanner from "./TopBanner";
import styles from "./css/Home.css";
import VisibilityChild from "../../general/VisibilityChild";
import FeatureBanner from "./FeatureBanner";
import FeatureTwoBanner from "./FeatureTwoBanner";
import Footer from "../../HeaderFooter/Component/Footer";
import ContactUs from "./Contactus";
import About from "./About";
import isMobile from "../../Utils/UserAgent";
import Image from "../../general/Image";
import LatestWorks from "./LatestWorks";
import OurCreativity from "./OurCreativity";
import NewFooter from "../../HeaderFooter/NewFooter";
import NewTopBanner from "../NewTopBanner/NewTopBanner";
import WhyChooseUs from "../../WebSite Ui Components/WhyChooseUs/WhyChooseUs";
import TabBar from "../../WebSite Ui Components/TabBar/TabBar";

class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className={styles.base}>
        <TabBar />
        <div className={styles.front}>
          {/* <TopBanner /> */}
          <NewTopBanner />
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
          <WhyChooseUs />
        </VisibilityChild>

        {/* <VisibilityChild>
          <Team />
        </VisibilityChild> */}
        {/* <ContactUs /> */}
        <NewFooter />
      </div>
    );
  }
}
export default Home;
