import React from "react";
import { Button } from "../../ui/Button/Button";
import { ReactComponent as RightArrow } from "../../../assets/svg/right-arrow.svg";

import microLong from "../../../assets/first/micro-long.png";
import microOffFocus1 from "../../../assets/first/micro-off-focus-1.png";
import microOffFocus2 from "../../../assets/first/micro-off-focus-2.png";
import microRoundLarge from "../../../assets/first/micro-round-large.png";
import microRoundMedium from "../../../assets/first/micro-round-medium.png";
import microRoundSmooth1 from "../../../assets/first/micro-round-smooth-1.png";
import microRoundSmooth2 from "../../../assets/first/micro-round-smooth-2.png";
import sperm from "../../../assets/first/micro-sperm.png";
import spermOffFocus from "../../../assets/first/micro-sperm-off-focus.png";

import styles from "./First.module.css";

export const First = ({ scrollTo }) => {
  return (
    <div className={styles.wrapper}>
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
              onClick={() => {
                console.log("scr");
                scrollTo(1);
              }}
              style={{ marginLeft: "40px" }}
              text="Что дальше?"
              Icon={RightArrow}
            />
          </div>
        </p>
      </div>
      <div className="static">
        <img className={styles.microLong} src={microLong} alt="micro" />
        <img className={styles.sperm} src={sperm} alt="micro" />
        <img className={styles.spermOffFocus} src={spermOffFocus} alt="micro" />
        <img
          className={styles.microOffFocus1}
          src={microOffFocus1}
          alt="micro"
        />
        <img
          className={styles.microOffFocus2}
          src={microOffFocus2}
          alt="micro"
        />
      </div>

      <div className="float">
        <img
          className={styles.microRoundLarge}
          src={microRoundLarge}
          alt="micro"
        />
        <img
          className={styles.microRoundMedium}
          src={microRoundMedium}
          alt="micro"
        />
        <img
          className={styles.microRoundSmooth1}
          src={microRoundSmooth1}
          alt="micro"
        />
        <img
          className={styles.microRoundSmooth2}
          src={microRoundSmooth2}
          alt="micro"
        />
      </div>
    </div>
  );
};
