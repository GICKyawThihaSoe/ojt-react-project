import React, { useEffect, useState } from "react";
import { fetchdata } from "../api/api";
import Answer from "./Answer";

const Question = () => {
  const [Data, setData] = useState([]);
  const [alldata,setalldata] = useState(getalldata());
  const [loading, setLoading] = useState(false);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const datas = await fetchdata();
      setData(datas);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
      setLoading(false);
    }
  };

  function getalldata () {
    return {
      value: Data,
      isHeld: false,
    };
  }

  console.log("userData", getalldata());
  console.log("Data", Data);

  return (
    <div>
      <div>
        <div className="p-20">
          {Data.map((e, index) => (
            <div key={index}>
              <h1 className="text-textblue font-bold text-2xl">
                {e?.question}
              </h1>
              <Answer
                showScore={showScore}
                type={e?.type}
                correct_answer={e?.correct_answer}
                incorrect_answers={e?.incorrect_answers}
              />
              <hr className="mt-5 mb-5 border-t border-hrcolor"></hr>
            </div>
          ))}
          <div className="flex justify-center items-center mt-4">
            <button
              className="bg-blue font-medium active:bg-activeblue text-white w-40 h-10 rounded-md"
            >
              Check answers
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
