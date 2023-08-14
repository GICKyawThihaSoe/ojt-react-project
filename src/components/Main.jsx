import React from "react";
import banner from "../assets/bg.svg";
import pt1 from "../assets/photo1.svg";
import star from "../assets/star.svg";

const Main = () => {
  return (
    <>
      <div className="p-10">
        <div className="flex justify-center items-center mt-8">
          <img style={{ width: "800px" }} src={banner} alt="" />
        </div>
        <div className="mt-10">
          <div>
            <h1 className="text-4xl text-black1 font-bold mb-4">
              Online Experience
            </h1>
            <p className="text-black2 w-72">
              Join unique interactive activities led by one-of-a-kind hosts—all
              without leaving home.
            </p>
          </div>
          <div className="mt-16">
            <div className="flex justify-between">
              <div>
                <div className="relative">
                  <img src={pt1} alt="" />
                  <p
                    className="uppercase absolute p-1 rounded-sm left-1 text-black2 font-medium top-1 bg-white"
                    style={{ fontSize: "10px" }}
                  >
                    sold out
                  </p>
                </div>
                <div>
                  <div className="flex items-center mt-1">
                    <img src={star} alt="" />
                    <p className="text-sm">
                      5.0 <span style={{ color: "#918E9B" }}>(6)</span>
                      <span style={{ color: "#918E9B" }}>.USA</span>
                    </p>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm" style={{ color: "#222222" }}>
                      Life lessons with Katie Zaferes
                    </p>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm">
                      <span className="font-bold">From $136</span>
                      <span style={{ color: "#222222" }}>/ person</span>
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <div className="relative">
                  <img src={pt1} alt="" />
                  <p
                    className="uppercase absolute p-1 rounded-sm left-1 text-black2 font-medium top-1 bg-white"
                    style={{ fontSize: "10px" }}
                  >
                    sold out
                  </p>
                </div>
                <div>
                  <div className="flex items-center mt-1">
                    <img src={star} alt="" />
                    <p className="text-sm">
                      5.0 <span style={{ color: "#918E9B" }}>(6)</span>
                      <span style={{ color: "#918E9B" }}>.USA</span>
                    </p>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm" style={{ color: "#222222" }}>
                      Life lessons with Katie Zaferes
                    </p>
                  </div>
                  <div className="mt-1">
                    <p className="text-sm">
                      <span className="font-bold">From $136</span>
                      <span style={{ color: "#222222" }}>/ person</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
