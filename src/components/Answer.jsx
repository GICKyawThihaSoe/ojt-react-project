import React, { useState } from "react";

const Answer = (props) => {
  const allAnswers = [...props.incorrect_answers, props.correct_answer];
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answeredQuestions, setAnsweredQuestions] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);

  const handleAnswerClick = (clickedAnswer) => {
    console.log("User clicked:", clickedAnswer);
    setSelectedAnswer(clickedAnswer);
    setAnsweredQuestions((prevCount) => prevCount + 1);

    if (clickedAnswer !== props.correct_answer) {
      setIncorrectCount((prevCount) => prevCount + 1);
    }
    if (answeredQuestions === totalQuestions) {
      console.log(
        `You scored ${correctAnswers}/${totalQuestions} correct answers`
      );
    } else if (answeredQuestions > totalQuestions) {
      console.error("Error: Answered more questions than available");
    }
  };

  const totalQuestions = allAnswers?.length;
  const correctAnswers = totalQuestions - incorrectCount;
  return (
    <div className="grid grid-cols-4 gap-4 mt-6">
      {allAnswers.map((answer, index) => (
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
