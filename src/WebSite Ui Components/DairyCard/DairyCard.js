import React from "react";
import Icon from "../../general/Icon";
import { PUBLIC_ASSETS_PATH } from "../../Utils/Constants";
import styles from "./DairyCard.css";
function DairyCard({ icon, header, desc, link, image }) {
  return (
    <div>
      <div className={styles.card}>
        <div className={styles.flipCard}>
          <div className={styles.flipCardContainer}>
            <div className={styles.cardFront}>
              <div
                className={styles.cardFrontTp + " " + styles.cardFrontTpCity}
              >
                <div className={styles.IconDiv}>
                  <Icon image={`${PUBLIC_ASSETS_PATH}/${icon}`} size={200} />
                </div>
              </div>

              <div className={styles.cardFrontBt}>
                <p
                  className={
                    styles.cardFrontTextView +
                    " " +
                    styles.cardFrontTextViewCity
                  }
                >
                  View me
                </p>
              </div>
            </div>
            <div className={styles.cardBack}>
              <div classNameName={styles.imgContainer}>
                <div className={styles.IconDiv}>
                  <Icon image={`${PUBLIC_ASSETS_PATH}/${image}`} size={200} />
                </div>
                <div className={styles.btnDiv}>
                  <a
                    href={link}
                    className={
                      styles.insidePageBtn + " " + styles.insidePageBtnCity
                    }
                  >
                    {header}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.insidePage}>
          <div className={styles.insidePage__container}>
            <h3
              className={
                styles.insidePageHeading + " " + styles.insidePageHeadingCity
              }
            >
              {header}
              <hr className={styles.divider} />
            </h3>
            <p className={styles.insidePage__text}>{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DairyCard;
