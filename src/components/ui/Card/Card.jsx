import React from "react";
import styles from "./Card.module.css";

export const Card = ({ children, pic }) => {
  return (
    <div className={styles.wrapper}>
      {children}
      <div className={styles.pic}>
        <img src={pic} alt="" />
      </div>
    </div>
  );
};
