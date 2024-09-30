import React from "react";
import styles from "./Button.module.css";

export const Button = ({ text, Icon, onClick }) => {
  return (
    <div onClick={onClick} className={styles.wrapper}>
      <div className={styles.iconWrapper}>
        <Icon className={styles.icon} />
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
