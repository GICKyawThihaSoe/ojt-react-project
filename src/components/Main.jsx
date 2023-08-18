import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="bg-gray">
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-textblue mb-3">Quizzical</h1>
          <p className="text-textblue mb-5 tracking-wider">
            Some description if needed
          </p>
          <div className="flex justify-center items-center">
            <Link to="/question">
              <button className="bg-blue font-medium active:bg-activeblue text-white w-32 h-10 rounded-md">
                Start quiz
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
