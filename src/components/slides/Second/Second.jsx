import React, { useEffect, useState } from "react";
import { TextScroll } from "../../ui/TextScroll/TextScroll";
import sperm from "../../../assets/sperm.png";
import sperm1 from "../../../assets/sperm1.png";
import sperm2 from "../../../assets/sperm2.png";
import sperm3 from "../../../assets/sperm3.png";

import styles from "./Second.module.css";

export const Second = ({ iscurr }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let timer;
    if (iscurr) {
      timer = setTimeout(() => setIsVisible(true), 500);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [iscurr]);

  return (
    <div className={styles.wrapper}>
      <div className="title">
        <p className={styles.title}>
          Текст <br />
          сообщения
        </p>
        <TextScroll />
      </div>
      <div className={`${styles.unfade} ${isVisible ? styles.visible : ""}`}>
        <img src={sperm1} alt="img" />
        <img src={sperm2} alt="img" />
        <img src={sperm} alt="img" />
        <img src={sperm} alt="img" />
        <img src={sperm3} alt="img" />
      </div>
    </div>
  );
};
