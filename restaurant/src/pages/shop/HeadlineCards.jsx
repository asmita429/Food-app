import React, { useState } from "react";
import Cards from "./Cards";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { details } from "../../data/data";

const HeadlineCards = () => {
  const [curIdx, setCurrIdx] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = curIdx === 0;
    const newIdx = isFirstSlide ? details.length - 1 : curIdx - 1;
    setCurrIdx(newIdx);
  };

  const nextSlide = () => {
    const isLastSlide = curIdx === details.length - 1;
    const newIdx = isLastSlide ? 0 : curIdx + 1;
    setCurrIdx(newIdx);
  };

  const gotoSlide = (slideIdx) => {
    setCurrIdx(slideIdx);
  };

  // create a like toggle button here
  return (
    <div className="max-w-[1640px] mx-auto h-full p-4  pt-8">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Today's Highlights
      </h1>

      <div className="w-[80%] m-auto p-4 h-full group">
        <div className="w-full h-full p-2 flex justify-around items-center cursor-pointer ">
          {/* left arrow */}
          <div className="hidden group-hover:block -translate-x-0 translate-y-[-50%] text-orange-600">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>

          <div className="w-[60%] h-full bg-cover m-auto duration-500">
            <Cards details={details[curIdx]} />
          </div>

          {/* right arrow */}
          <div className="hidden group-hover:block -translate-x-0 translate-y-[-50%] text-orange-600">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
        </div>

        <div className="flex justify-center">
          {details.map((slide, slideIdx) => (
            <div
              key={slideIdx}
              onClick={() => gotoSlide(slideIdx)}
              className=" text-blue-300 text-2xl cursor-pointer hover:text-orange-500"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeadlineCards;
