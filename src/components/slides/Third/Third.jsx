import React from "react";
import { Card } from "../../ui/Card/Card";
import { Button } from "../../ui/Button/Button";

import dishesPic from "../../../assets/dishes.png";
import calendarPic from "../../../assets/calendar.png";
import { ReactComponent as Plus } from "../../../assets/svg/plus.svg";

import styles from "./Third.module.css";

export const Third = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.title}>
        <div className={styles.message}>Ключевое сообщение</div>
        <div className={styles.brand}>
          Brand <strong>XY</strong>
        </div>
      </div>
      <div className={styles.cards}>
        <Card pic={dishesPic}>
          Ehicula ipsum a arcu <br />
          cursus vitae. Eu non <br />
          diam phasellus <br />
          vestibulum lorem sed <br />
          risus ultricies.
        </Card>
        <div>
          <Card pic={calendarPic}>
            A arcu <br /> cursus vitae
          </Card>
          <Button text="Подробнее" Icon={Plus} />
        </div>
      </div>
    </div>
  );
};