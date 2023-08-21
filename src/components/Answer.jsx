import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount, removeCount } from "../feature/countSlice";
import { openError } from "../feature/checkAnswerSlice";

const Answer = (props) => {
  const [shuffledAnswers, setShuffledAnswers] = useState([]);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredIncorrectly, setAnsweredIncorrectly] = useState(false);
  const { isCheck } = useSelector((state) => state.check);
  const dispatch = useDispatch();

  useEffect(() => {
    shuffleAnswers();
  }, [props.correct_answer]);

  const shuffleAnswers = () => {
    const allAnswers = [...props.incorrect_answers, props.correct_answer];
    for (let i = allAnswers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allAnswers[i], allAnswers[j]] = [allAnswers[j], allAnswers[i]];
    }
    setShuffledAnswers(allAnswers);
  };

  if (isCheck) {
    if (!selectedAnswer) {
      dispatch(openError());
    }
  }

  const handleAnswerClick = (clickedAnswer) => {
    setSelectedAnswer(clickedAnswer);
    if (clickedAnswer !== props.correct_answer && !answeredIncorrectly) {
      dispatch(addCount());
      setAnsweredIncorrectly(true);
    }
    if (clickedAnswer === props.correct_answer && answeredIncorrectly) {
      dispatch(removeCount());
      setAnsweredIncorrectly(false);
    }
  };


  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {shuffledAnswers.map((answer, index) => (
        <p
          key={index}
          onClick={() => handleAnswerClick(answer)}
          className={`border break-words select-none p-1 cursor-pointer border-bordercolor rounded-lg text-center ${
            selectedAnswer === answer ? "bg-gray2" : "bg-white"
          }`}
        >
          {answer}
        </p>
      ))}
    </div>
  );
};

export default Answer;
