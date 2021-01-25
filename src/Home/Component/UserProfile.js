import React from "react";
import * as styles from "./css/UserProfile.css";
export default function UserProfile(props) {
  return (
    <div className={styles.base}>
      <div className={styles.card}>
        <h1 className={styles.title}>{props.name}</h1>
        <p className={styles.title}>Hi there! we are doing good</p>
      </div>
    </div>
  );
}
