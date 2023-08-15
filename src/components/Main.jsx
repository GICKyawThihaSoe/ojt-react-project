import React, { useState, createRef } from "react";
import button from "../assets/button.svg";
import { fetchMemes } from "../api/api";
import { exportComponentAsJPEG } from "react-component-export-image";

const Main = () => {
  const [MemeImage, setMemeImage] = useState(null);
  const [MemeTopText, setMemeTopText] = useState("");
  const [MemeBottomText, setMemeBottomText] = useState("");
  const memeRef = createRef();
  const getMemeImage = async () => {
    try {
      const memesArray = await fetchMemes();
      const randomNumber = Math.floor(Math.random() * memesArray.length);
      const url = memesArray[randomNumber].url;
      setMemeImage(url);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <>
      <div className="mt-5 p-5">
        <div className="flex justify-center">
          <input
            type="text"
            placeholder="Top text"
            className="border px-2 border-gray outline-none p-1 rounded mr-5 w-60"
            onChange={(e) => {
              setMemeTopText(e.target.value);
            }}
          />
          <input
            type="text"
            placeholder="Bottom text"
            className="border px-2 border-gray outline-none p-1 rounded w-60"
            onChange={(e) => {
              setMemeBottomText(e.target.value);
            }}
          />
        </div>
        <div className="mt-4 flex justify-center">
          <button
            onClick={getMemeImage}
            className="bg-purple p-1 py-3 flex justify-center text-white rounded w-72"
          >
            <img src={button} alt="" />
          </button>
        </div>
        <div>
          {MemeImage !== null && (
            <div className="flex justify-center">
              <div ref={memeRef} className="mt-5 relative w-80 h-72 border">
                <img className="w-full h-full" src={MemeImage} alt="" />
                <div
                  style={{ textShadow: "3px 3px #000" }}
                  className="absolute text-center p-2 w-80 text-white top-10 text-4xl font-bold font-serif break-words overflow-hidden"
                >
                  <div>
                    {MemeTopText == "" ? <p>Top Text</p> : <p>{MemeTopText}</p>}
                  </div>
                  <div className="mt-2">
                    {MemeBottomText == "" ? (
                      <p>Bottom Text</p>
                    ) : (
                      <p>{MemeBottomText}</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
          <div
            onClick={() => {
              exportComponentAsJPEG(memeRef);
            }}
            className="text-center"
          >
            <button className="bg-purple p-2 text-white rounded mt-2 font-bold">
              Download
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
