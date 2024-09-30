import React, { useRef, useState } from "react";
import styles from "./TextScroll.module.css";

export const TextScroll = () => {
  const textRef = useRef(null);
  const [scrollValue, setScrollValue] = useState(0);

  const handleScroll = (event) => {
    const scrollValue = event.target.value;
    setScrollValue(scrollValue);
    if (textRef.current) {
      textRef.current.scrollTop = scrollValue;
    }
  };

  return (
    <div className={styles.textScrollContainer}>
      <div className={styles.scrollBar}>
        <input
          type="range"
          min="0"
          max={textRef?.current?.scrollHeight - textRef?.current?.offsetHeight}
          value={scrollValue}
          onChange={handleScroll}
          className={styles.scroll}
        />
      </div>
      <div className={styles.textBox} ref={textRef}>
        <p>{text}</p>
      </div>
    </div>
  );
};

var text = `
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum ab provident ut omnis non cumque assumenda unde, 
  ducimus nostrum incidunt tenetur perferendis quis nemo aliquam, animi illo placeat nam tempore.
  Cupiditate sequi vero ipsum ad nobis. Ullam doloribus odit excepturi id, perferendis ipsa neque 
  dolorem non molestiae aliquid tempora commodi maiores sint blanditiis nam minima voluptatem magni provident 
  natus praesentium?
  Unde sint quod necessitatibus est in rem ea, reiciendis velit consectetur nesciunt corporis quos quidem 
  dolorem. Ratione minima illum delectus, obcaecati harum, possimus ipsa eligendi et facilis quod totam ea.
  Animi corporis dolorem vero numquam dolor similique, minima, reprehenderit illum deserunt temporibus commodi 
  sunt quisquam eligendi expedita repudiandae officiis eos consectetur magni eum labore fuga non pariatur.  
  Laudantium, necessitatibus! Necessitatibus.
  Laboriosam voluptatem odit, officiis ut eligendi adipisci dolorum vitae reiciendis cumque, similique quia 
  iste commodi recusandae temporibus at? Minus sit fugit consectetur magnam ut modi, omnis quisquam 
  iusto optio ipsa?
  Unde sint quod necessitatibus est in rem ea, reiciendis velit consectetur nesciunt corporis quos quidem 
  dolorem. Ratione minima illum delectus, obcaecati harum, possimus ipsa eligendi et facilis quod totam ea.
  Animi corporis dolorem vero numquam dolor similique, minima, reprehenderit illum deserunt temporibus commodi 
  sunt quisquam eligendi expedita repudiandae officiis eos consectetur magni eum labore fuga non pariatur.  
  Laudantium, necessitatibus! Necessitatibus.
  Laboriosam voluptatem odit, officiis ut eligendi adipisci dolorum vitae reiciendis cumque, similique quia 
  iste commodi recusandae temporibus at? Minus sit fugit consectetur magnam ut modi, omnis quisquam 
  iusto optio ipsa?
  Unde sint quod necessitatibus est in rem ea, reiciendis velit consectetur nesciunt corporis quos quidem 
  dolorem. Ratione minima illum delectus, obcaecati harum, possimus ipsa eligendi et facilis quod totam ea.
  Animi corporis dolorem vero numquam dolor similique, minima, reprehenderit illum deserunt temporibus commodi 
  sunt quisquam eligendi expedita repudiandae officiis eos consectetur magni eum labore fuga non pariatur.  
  Laudantium, necessitatibus! Necessitatibus.
  Laboriosam voluptatem odit, officiis ut eligendi adipisci dolorum vitae reiciendis cumque, similique quia 
  iste commodi recusandae temporibus at? Minus sit fugit consectetur magnam ut modi, omnis quisquam 
  iusto optio ipsa?
  Unde sint quod necessitatibus est in rem ea, reiciendis velit consectetur nesciunt corporis quos quidem 
  dolorem. Ratione minima illum delectus, obcaecati harum, possimus ipsa eligendi et facilis quod totam ea.
  Animi corporis dolorem vero numquam dolor similique, minima, reprehenderit illum deserunt temporibus commodi 
  sunt quisquam eligendi expedita repudiandae officiis eos consectetur magni eum labore fuga non pariatur.  
  Laudantium, necessitatibus! Necessitatibus.
  Laboriosam voluptatem odit, officiis ut eligendi adipisci dolorum vitae reiciendis cumque, similique quia 
  iste commodi recusandae temporibus at? Minus sit fugit consectetur magnam ut modi, omnis quisquam 
  iusto optio ipsa?
  Unde sint quod necessitatibus est in rem ea, reiciendis velit consectetur nesciunt corporis quos quidem 
  dolorem. Ratione minima illum delectus, obcaecati harum, possimus ipsa eligendi et facilis quod totam ea.
  Animi corporis dolorem vero numquam dolor similique, minima, reprehenderit illum deserunt temporibus commodi 
  sunt quisquam eligendi expedita repudiandae officiis eos consectetur magni eum labore fuga non pariatur.  
  Laudantium, necessitatibus! Necessitatibus.
  Laboriosam voluptatem odit, officiis ut eligendi adipisci dolorum vitae reiciendis cumque, similique quia 
  iste commodi recusandae temporibus at? Minus sit fugit consectetur magnam ut modi, omnis quisquam 
  iusto optio ipsa?
  Unde sint quod necessitatibus est in rem ea, reiciendis velit consectetur nesciunt corporis quos quidem 
  dolorem. Ratione minima illum delectus, obcaecati harum, possimus ipsa eligendi et facilis quod totam ea.
  Animi corporis dolorem vero numquam dolor similique, minima, reprehenderit illum deserunt temporibus commodi 
  sunt quisquam eligendi expedita repudiandae officiis eos consectetur magni eum labore fuga non pariatur.  
  Laudantium, necessitatibus! Necessitatibus.
  Laboriosam voluptatem odit, officiis ut eligendi adipisci dolorum vitae reiciendis cumque, similique quia 
  iste commodi recusandae temporibus at? Minus sit fugit consectetur magnam ut modi, omnis quisquam 
  iusto optio ipsa?
`;
