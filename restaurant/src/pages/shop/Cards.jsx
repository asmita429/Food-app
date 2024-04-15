import React, { useState } from "react";
import { FaRegHeart } from "react-icons/fa6";

const Cards = ({ details, data }) => {
  // const [likeBtn, setLikeBtn] = useState(false);

  // const handleClick = () => {
  //   setLikeBtn(!likeBtn);
  // };

  return (
    <div className="text-orange-500 p-4">
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
        <div className="text-blue-300 mt-1 hover:text-orange-400">
          <FaRegHeart size={25} />
        </div>
      </div>
    </div>
  );
};

export default Cards;
