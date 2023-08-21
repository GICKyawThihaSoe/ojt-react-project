import React from "react";
import Carousel from "../components/Carousel";

const ThirdPage = () => {
  return (
    <div className="mb-32">
      <div>
        <h1 className="text-black font-bold text-5xl text-center mt-20 mb-20">
          What they've said
        </h1>
      </div>

      <div>
        <Carousel />
      </div>
      <div className="mt-10 text-center">
        <button className="capitalize bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 font-medium rounded-full">
          get started
        </button>
      </div>
    </div>
  );
};

export default ThirdPage;
