import React from "react";
import { FormattedMessage } from "react-intl";
import Animation, {
  ANIMATE_FLAG,
} from "../../WebSite Ui Components/Animation/Animation";
import ShapeShifter from "../../WebSite Ui Components/ShapeShiter/ShapeShifter";
import HomeMessages from "../Messages/HomeMessages";
import styles from "./css/OurCreativity.css";
function OurCreativity() {
  return (
    <div className={styles.base} id={"creativity"}>
      <Animation animate={ANIMATE_FLAG.SLIDE_RIGHT}>
        <div className={styles.topSection}>
          <h1 className={styles.dark}>
            <FormattedMessage {...HomeMessages.shapeShifterHeading} />
          </h1>
        </div>
      </Animation>
      <Animation animate={ANIMATE_FLAG.SLIDE_LEFT}>
        <hr className={styles.divider} />
      </Animation>
      <div className={styles.infoWrapper}>
        <ShapeShifter />
      </div>
    </div>
  );
}

export default OurCreativity;
