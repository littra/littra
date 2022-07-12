import React from "react";
import styles from "./SkeletonLoader.css";
const SkeletonLoader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
        <div className={styles.skeleton}>
          <div className={styles.skeletonLeft}>
            <div className={styles.square}></div>
          </div>
          <div className={styles.skeletonLeft}>
            <div className={styles.square}></div>
          </div>
          <div className={styles.skeletonLeft}>
            <div className={styles.square}></div>
          </div>
          <div className={styles.skeletonLeft}>
            <div className={styles.square}></div>
          </div>
          <div className={styles.skeletonLeft}>
            <div className={styles.square}></div>
          </div>
          <div className={styles.skeletonLeft}>
            <div className={styles.square}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
