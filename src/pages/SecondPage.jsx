import React from "react";
import img4 from "../assets/images/img4.svg";

const SecondPage = () => {
  return (
    <div className="flex justify-between relative mt-20 ml-20 mx-20">
      <div className="absolute -left-1/2 right-3/4 top-3/4 -z-10">
        <img src={img4} alt="" />
      </div>
      <div>
        <h1 className="text-black font-bold text-5xl">
          What's different about Manage?
        </h1>
        <p className="mt-10">
          Manage provide all the functionality your team needs, without the
          complexity. Our software is tailer-made for modern digital product
          teams.
        </p>
      </div>
      <div className="ml-24">
        <div className="flex mb-10">
          <div>
            <div className="bg-orange-600 pl-5 pr-5 pt-1 pb-1 rounded-full text-white font-medium">
              01
            </div>
          </div>
          <div className="ml-10">
            <h1 className="text-black font-bold text-lg">
              Track company-wide progress
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              odio deleniti inventore laudantium alias quos dolores mollitia
              temporibus amet natus.
            </p>
          </div>
        </div>
        <div className="flex mb-10">
          <div>
            <div className="bg-orange-600 pl-5 pr-5 pt-1 pb-1 rounded-full text-white font-medium">
              02
            </div>
          </div>
          <div className="ml-10">
            <h1 className="text-black font-bold text-lg">
              Track company-wide progress
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              odio deleniti inventore laudantium alias quos dolores mollitia
              temporibus amet natus.
            </p>
          </div>
        </div>
        <div className="flex">
          <div>
            <div className="bg-orange-600 pl-5 pr-5 pt-1 pb-1 rounded-full text-white font-medium">
              03
            </div>
          </div>
          <div className="ml-10">
            <h1 className="text-black font-bold text-lg">
              Track company-wide progress
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
              odio deleniti inventore laudantium alias quos dolores mollitia
              temporibus amet natus.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
