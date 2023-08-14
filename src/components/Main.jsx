import React from "react";

const Main = () => {
  const backgroundImageUrl = "/src/assets/logo-react.svg"; // Replace with your image URL
  return (
    <div
      className="bg-black2 min-h-screen p-8"
      style={{
        backgroundSize:"300px",
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundPositionX:"right",
        backgroundPositionY:"center",
        backgroundRepeat: "no-repeat", // Adjust as needed
      }}
    >
      <h1 className="text-white font-bold text-4xl mb-10 mt-10">
        Fun facts about React
      </h1>
      <ul className="pl-8 list-inside">
        <li className="relative text-white ml-5" style={{ fontSize: "" }}>
          <span
            className="absolute -left-3 -top-5 text-textblue"
            style={{ transform: "translateX(-1.25rem)", fontSize: "2.5rem" }}
          >
            &bull;
          </span>
          <div>Was first released in 2013</div>
        </li>
        <li className="relative mt-4 text-white ml-5" style={{ fontSize: "" }}>
          <span
            className="absolute -left-3 -top-5 text-textblue"
            style={{ transform: "translateX(-1.25rem)", fontSize: "2.5rem" }}
          >
            &bull;
          </span>
          <div>Was Originally created by Jordan Walke</div>
        </li>
        <li className="relative mt-4 text-white ml-5" style={{ fontSize: "" }}>
          <span
            className="absolute -left-3 -top-5 text-textblue"
            style={{ transform: "translateX(-1.25rem)", fontSize: "2.5rem" }}
          >
            &bull;
          </span>
          <div>Has well over 100K stars on GitHub</div>
        </li>
        <li className="relative mt-4 text-white ml-5" style={{ fontSize: "" }}>
          <span
            className="absolute -left-3 -top-5 text-textblue"
            style={{ transform: "translateX(-1.25rem)", fontSize: "2.5rem" }}
          >
            &bull;
          </span>
          <div>Is maintained by Facebook</div>
        </li>
        <li className="relative mt-4 text-white ml-5" style={{ fontSize: "" }}>
          <span
            className="absolute -left-3 -top-5 text-textblue"
            style={{ transform: "translateX(-1.25rem)", fontSize: "2.5rem" }}
          >
            &bull;
          </span>
          <div>Powers thousands of enterprise apps, including mobile apps</div>
        </li>
      </ul>
    </div>
  );
};

export default Main;
