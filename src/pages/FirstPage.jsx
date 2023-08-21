import React from "react";
import image1 from "../assets/images/img1.svg";
import chart from "../assets/images/chart.svg";

const FirstPage = () => {
  return (
    <div className="mt-20 ml-20 mx-20">
      <div className="absolute right-0 top-0 -z-10">
        <img src={image1} alt="" />
      </div>
      <div className="md:flex items-center relative">
        <div className="md:hidden">
          <img src={chart} alt="" />
        </div>
        <div className="w-full">
          <h1 className="text-black font-bold text-5xl">
            Bring everyone together to build better products.
          </h1>
          <p className="mt-10">
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <div className="mt-10">
            <button className="capitalize bg-orange-600 hover:bg-orange-500 text-white px-5 py-2 font-medium rounded-full">
              get started
            </button>
          </div>
        </div>
        <div className="w-full">
          <img src={chart} alt="" />
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
