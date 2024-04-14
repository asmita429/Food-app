import React from "react";
import "../../data/data";

const Hero = () => {
  return (
    <div className="max-w-[1640px] mx-auto h-full p-4 mb-4">
      <div className="max-h-[630px] relative ">
        <div className="absolute w-full h-full  text-gray-100 max-h-[630px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            The <span className="text-orange-500">Best</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Foods <span className="text-orange-500">Delivery</span>
          </h1>
        </div>

        <img
          src="https://images.pexels.com/photos/1639562/pexels-photo-1639562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt=""
          className="w-full max-h-[630px] object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
