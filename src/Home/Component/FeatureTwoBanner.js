import React from "react";
import styles from "./css/FeatureTwoBanner.css";
import { FormattedMessage } from "react-intl";
import HomeMessages from "../Messages/HomeMessages";
import AnimatedCard from "../../WebSite Ui Components/FlexCard/AnimatedCard";
import Animation, {
  ANIMATE_FLAG,
} from "../../WebSite Ui Components/Animation/Animation";

function FeatureTwoBanner() {
  return (
    <div className={styles.base} id="pages">
      <div className={styles.topSection}>
        <Animation animate={ANIMATE_FLAG.SLIDE_RIGHT}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.richFeatureHeading} />
          </h1>
        </Animation>
        <Animation animate={ANIMATE_FLAG.SLIDE_UP}>
          <p className={styles.richFeature}>
            <FormattedMessage {...HomeMessages.richFeatureDes} />
          </p>
        </Animation>
      </div>
      <Animation animate={ANIMATE_FLAG.SLIDE_UP}>
        <hr className={styles.divider} />
      </Animation>
      <div className={styles.infoWrapper}>
        <Animation animate={ANIMATE_FLAG.SLIDE_SMOOTH_LEFT}>
          <AnimatedCard />
        </Animation>
      </div>
    </div>
  );
}

export default FeatureTwoBanner;
