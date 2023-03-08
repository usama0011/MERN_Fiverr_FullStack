import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import "./Slide.scss";
const Slide = ({ children }) => {
  const [index, setIndex] = useState(0);
  const handleClick = (clickType) => {
    if (clickType === "left") {
      setIndex(index === 0 ? index : index - 1);
    }
    if (clickType === "right") {
      setIndex(index === 4 ? 0 : index + 1);
    }
  };
  return (
    <div className="slide">
      <div className="container">
        <button onClick={() => handleClick("left")} className="carousel-prev">
          <ChevronLeftIcon className="cIcon" />
        </button>
        <div
          style={{ transform: `translateX(-${index * 280}px)` }}
          className="sliderContainer"
        >
          {children}
        </div>
        <button onClick={() => handleClick("right")} className="carousel-next">
          <ChevronRightIcon className="cIcon" />
        </button>
      </div>
    </div>
  );
};

export default Slide;
