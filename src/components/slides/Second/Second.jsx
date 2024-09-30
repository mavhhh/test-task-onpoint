import React from "react";
import { TextScroll } from "../../ui/TextScroll/TextScroll";


import styles from "./Second.module.css";

export const Second = () => {
  return (
    <div>
      <div className="title">
        <p className={styles.title}>
          Текст <br />
          сообщения
        </p>
        <TextScroll />
      </div>
    </div>
  );
};
