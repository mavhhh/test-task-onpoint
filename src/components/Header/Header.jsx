import React from "react";
import homeIcon from "../../assets/home-icon.png";
import separatorIcon from "../../assets/separator-icon.png";
import projectIcon from "../../assets/project-icon.png";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.wrapper}>
      <img className={styles.homeIcon} src={homeIcon} alt="icon home" />
      <img className={styles.separatorIcon} src={separatorIcon} alt="|" />
      <img className={styles.projectIcon} src={projectIcon} alt="project" />
    </div>
  );
};
