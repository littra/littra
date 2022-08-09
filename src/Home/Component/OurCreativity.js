import React from "react";
import { FormattedMessage } from "react-intl";
import ShapeShifter from "../../WebSite Ui Components/ShapeShiter/ShapeShifter";
import HomeMessages from "../Messages/HomeMessages";
import styles from "./css/OurCreativity.css";
function OurCreativity() {
  return (
    <div className={styles.base} id={"creativity"}>
      <div className={styles.topSection}>
        <h1 className={styles.dark}>
          <FormattedMessage {...HomeMessages.shapeShifterHeading} />
        </h1>
      </div>
      <hr className={styles.divider} />
      <div className={styles.infoWrapper}>
        <ShapeShifter />
      </div>
    </div>
  );
}

export default OurCreativity;
