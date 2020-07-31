import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import QuizCard from "./QuizCard";
import { useHistory } from "react-router";

import { shuffleArray } from "../../utils/utils";
import MyButton from "../MyButton";

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);

    const endPoint = `https://opentdb.com/api.php?amount=10&type=multiple&category=${searchParams.get(
      "category"
    )}&difficulty=${searchParams.get("difficulty")}`;

    fetch(endPoint)
      .then((res) => res.json())
      .then((json) => setQuestions(json.results));
  }, [location]);

  if (questions.length < 1) return <div>Loading</div>;

  if (currentQuestion > 9) {
    return (
      <div>
        <h3>Quiz Ended</h3>
        <p>Score is {score}</p>
        <MyButton label="Home" onClick={() => history.push("/")} />
      </div>
    );
  }

  let question = questions[currentQuestion];
  let choices: string[] = question["incorrect_answers"];
  let correctAnswer: string = question["correct_answer"];

  if (!choices.includes(correctAnswer)) choices.push(correctAnswer);

  choices = shuffleArray(choices);

  return (
    <QuizCard
      question={question["question"]}
      choices={choices}
      onSubmit={handleSubmit}
    />
  );

  function handleSubmit(selectedChoice: string) {
    if (selectedChoice === correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }
};

export default QuizPage;
