import React from "react";
import homeIcon from "../../assets/home-icon.png";
import separatorIcon from "../../assets/separator-icon.png";
import projectIcon from "../../assets/project-icon.png";

import styles from "./Header.module.css";

export const Header = ({ scrollTo }) => {
  return (
    <div className={styles.wrapper}>
      <div onClick={() => scrollTo(0)} className={styles.btn}>
        <img className={styles.homeIcon} src={homeIcon} alt="icon home" />
      </div>
      <img className={styles.separatorIcon} src={separatorIcon} alt="|" />
      <img className={styles.projectIcon} src={projectIcon} alt="project" />
    </div>
  );
};
