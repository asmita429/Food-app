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
    <div className="w-[500px] m-auto px-4 py-12">
      <h1 className="text-orange-600 font-bold text-4xl text-center">
        Today's Highlights
      </h1>

      <div className=" m-auto py-2 rounded-3xl px-4 relative group">
        <Cards details={details[curIdx]} />

        {/* left arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-orange-600 cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* right arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-orange-600 cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex justify-center py-1">
          {details.map((slide, slideIdx) => (
            <div
              key={slideIdx}
              onClick={() => gotoSlide(slideIdx)}
              className=" text-gray-500 text-2xl cursor-pointer hover:text-orange-500"
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
