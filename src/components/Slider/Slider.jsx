import React, { useRef, useEffect, useState } from "react";
import { First } from "../slides/First/First";
import { Second } from "../slides/Second/Second";
import { Third } from "../slides/Third/Third";

import styles from "./Slider.module.css";

function Slider({ slides }) {
  const [slideIndex, setSlideIndex] = useState(0);
  const startXRef = useRef(null);
  const sliderRef = useRef(null);

  const handleTouchStart = (e) => {
    startXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    const endX = e.changedTouches[0].clientX;
    const diffX = startXRef.current - endX;

    if (diffX > 20) {
      setSlideIndex((prevIndex) => (prevIndex === 2 ? 2 : prevIndex + 1));
    }
    if (diffX < -20) {
      setSlideIndex((prevIndex) => (prevIndex === 0 ? 0 : prevIndex - 1));
    }
  };

  return (
    <div
      ref={sliderRef}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className={styles.sliderContainer}
    >
      <div className={styles.slide}>
        <First toNext={() => setSlideIndex(1)} />
      </div>
      <div className={styles.slide}>
        <Second iscurr={slideIndex === 1} />
      </div>
      <div className={styles.slide}>
        <Third />
      </div>
    </div>
  );
}

export default Slider;
