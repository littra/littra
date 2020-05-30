import React from "react";
import styles from "./css/Contactus.css";
export default class ContactUs extends React.Component {
  renderContactCard = member => {
    return (
      <div className={styles.card}>
        <h1 className={styles.name}>{member.name}</h1>
        <p className={styles.mailId}>{member.email}</p>
        <p className={styles.mobile}>{member.mobile}</p>
      </div>
    );
  };
  render() {
    return (
      <div className={styles.base} id="contactus">
        <div className={styles.wrapper}>
          <div className={styles.leftSection}>
            <h1 className={styles.addressHeading}>Address</h1>
            <h3 className={styles.subAddress}>BANGALORE</h3>
            <div className={styles.addressWrapper}>
              <p className={styles.address}>
                2nd floor ,392, 7th Cross, 29th main , Bangalore, Karnataka,
                India (560076)
              </p>
              <p className={styles.mobile}>9456888501</p>
              <p className={styles.mobile}>8577033940</p>
            </div>
            <h3 className={styles.subAddress}>NOIDA</h3>
            <div className={styles.addressWrapper}>
              <p className={styles.address}>
                D-10, Sector 31, Noida, Uttar Pradesh, India (201301)
              </p>
              <p className={styles.mobile}>9554814201</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
