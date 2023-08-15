import React from "react";
import logo from "../assets/logo.svg";

const Navbar = () => {
  return (
    <>
      <div className="bg-purple">
        <div className="flex justify-between items-center p-5">
          <div>
            <img src={logo} alt="" />
          </div>
          <div>
            <p className="text-white">React Course - Project 3</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
