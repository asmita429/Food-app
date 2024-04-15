import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

const Cards = ({ details }) => {
  return (
    <div className="text-orange-500 p-2">
      {/* Overlay */}
      <div className="w-full h-full bg-black/50 rounded-xl text-white">
        <img
          className="h-[300px] w-full object-cover rounded-xl "
          src={details.url}
          alt="/"
        />
      </div>
      <div className="p-2 text-wrap">
        <p className="font-bold text-2xl ">{details.first}</p>
        <p>{details.second}</p>

        {/* create a toggle button */}
        <div className="mt-1 p-2 text-orange-400 ">
          <FaRegHeart
            size={25}
            className="transition ease-in-out delay-150 hover:-translate-x-1 hover:scale-110 duration-300 hover:text-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Cards;
