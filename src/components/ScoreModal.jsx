import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeError, closeScore } from "../feature/checkAnswerSlice";

const ScoreModal = (props) => {
  const { showError } = useSelector((state) => state.check);

  const dispatch = useDispatch();
  const handleOkButtonClick = () => {
    dispatch(closeScore());
    dispatch(closeError());
    if (!showError) {
      window.location.reload();
    }
  };
  const { count } = useSelector((state) => state.count);
  const totalQuestions = props?.allQuestions?.length;
  const correctAnwser = totalQuestions - count;
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg text-center shadow-lg max-w-md w-full overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Your Score</h2>
          {showError ? (
            <p className="mb-4 font-bold text-error text-xl">Please choose an answer</p>
          ) : (
            <p className="mb-4 text-xl">
              You scored {correctAnwser} / {totalQuestions} correct answers
            </p>
          )}

          <button
            onClick={handleOkButtonClick}
            className="bg-blue mt-3 font-medium active:bg-activeblue text-white w-40 h-10 rounded-md"
          >
            OK
          </button>
        </div>
      </div>
    </>
  );
};

export default ScoreModal;
