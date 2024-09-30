import "./App.css";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";

import { First } from "./components/slides/First/First";
import { Second } from "./components/slides/Second/Second";
import { Third } from "./components/slides/Third/Third";

import React, { useRef, useState } from "react";
import { Modal } from "./components/ui/Modal/Modal";
import { PaginationComponent } from "./components/PaginationComponent/PaginationComponent";

function App() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [modalActive, setModalActive] = useState(false);

  const startXRef = useRef(null);
  const sliderRef = useRef(null);

  const scrollTo = (slideNumber) => {
    if (sliderRef.current) {
      sliderRef.current.scrollLeft = slideNumber * window.innerWidth;
      setSlideIndex(slideNumber);
    }
  };

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
    <div className="App">
      <div className="background">
        <Header scrollTo={scrollTo} />
        <Footer />

        <div className="contentWrapper">
          <Modal active={modalActive} setActive={setModalActive}>
            <PaginationComponent />
          </Modal>
          <div
            ref={sliderRef}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="sliderContainer"
          >
            <div className="slide">
              <First scrollTo={scrollTo} />
            </div>
            <div className="slide">
              <Second iscurr={slideIndex === 1} />
            </div>
            <div className="slide">
              <Third setModalActive={setModalActive} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
