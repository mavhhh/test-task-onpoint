import React from "react";
import { Button } from "../../ui/Button/Button";
import { ReactComponent as RightArrow } from "../../../assets/svg/right-arrow.svg";

import styles from "./First.module.css";

export const First = () => {
  return (
    <div className="wrapper">
      <div className={styles.hello}>
        <p>Привет,</p>
      </div>
      <div className={styles.title}>
        <p>
          Это <span>не</span> <br />
          коммерческое <br />
          <div>
            задание
            <Button
              style={{ marginLeft: "40px" }}
              text="Что дальше?"
              Icon={RightArrow}
            />
          </div>
        </p>
      </div>
    </div>
  );
};
