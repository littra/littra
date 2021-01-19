import React from "react";
import styles from "./css/Footer.css";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
export default class Footer extends React.Component {
  render() {
    return (
      <div className={styles.base}>
        <div className={styles.footerWrapper}>
          <div className={styles.left}>
            <p className={styles.copyRight}>
              Copyrights © 2021 All Rights Reserved by LITTRA Inc.
            </p>
          </div>
          <div className={styles.right}>
            <div className={styles.socialLinks}>
              <div className={styles.icon}>
                {" "}
                <Icon image={`${PUBLIC_ASSETS_PATH}/fb.svg`} size={20} />
              </div>
              <div className={styles.icon}>
                {" "}
                <Icon image={`${PUBLIC_ASSETS_PATH}/freelance.svg`} size={20} />
              </div>
              <div className={styles.icon}>
                {" "}
                <Icon image={`${PUBLIC_ASSETS_PATH}/githubL.svg`} size={20} />
              </div>
              <div className={styles.icon}>
                {" "}
                <Icon image={`${PUBLIC_ASSETS_PATH}/linkedinL.svg`} size={20} />
              </div>
              <div className={styles.icon}>
                {" "}
                <Icon image={`${PUBLIC_ASSETS_PATH}/twitterL.svg`} size={20} />
              </div>
            </div>
            <div className={styles.contactDetails}>
              <div className={styles.email}>
                <a href="mailto:reply@littra.in">
                  <p className={styles.color}>reply@littra.in</p>
                </a>
              </div>
              <div className={styles.email}>
                <p className={styles.color}> (91) 9456888501</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
