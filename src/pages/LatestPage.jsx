import React from "react";
import img2 from '../assets/images/img2.svg';
import img3 from '../assets/images/img3.svg';

const LatestPage = () => {
  return (
    <div className="bg-orange-700 py-14 px-36 relative">
      <div className="flex justify-between items-center">
        <div className="">
          <h1 className="text-white font-medium text-2xl">
            Simplify how your team <br />
            works today.
          </h1>
          <div className="absolute -top-5 -left-8 opacity-5">
            <img src={img2} alt="" />
          </div>
        </div>
        <div>
          <button className="capitalize bg-white text-orange-500 hover:text-orange-400 cursor-pointer px-5 py-2 font-medium rounded-full">
            get started
          </button>
          <div className="absolute right-0 -top-20 opacity-5">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestPage;
