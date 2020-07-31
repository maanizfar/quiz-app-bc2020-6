import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container } from "@material-ui/core";

import QuizCard from "./QuizCard";
import { shuffleArray } from "../../utils/utils";
import { Categories } from "../../utils/categories";
import ResultCard from "./ResultCard";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    // backgroundColor: theme.palette.common.white,
  },

  heading: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const location = useLocation();
  const classes = useStyles();

  const searchParams = new URLSearchParams(location.search);

  const endPoint = `https://opentdb.com/api.php?amount=10&type=multiple&category=${searchParams.get(
    "category"
  )}&difficulty=${searchParams.get("difficulty")}`;

  useEffect(() => {
    fetch(endPoint)
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((json) => {
        console.log(json);
        setQuestions(json.results);
      });
  }, [endPoint]);

  if (questions.length < 1) return <div>Loading</div>;

  let question = questions[currentQuestion];
  let choices: string[] = [];
  let correctAnswer: string = "";

  if (question) {
    choices = question["incorrect_answers"];
    correctAnswer = question["correct_answer"];

    if (!choices.includes(correctAnswer)) choices.push(correctAnswer);

    choices = shuffleArray(choices);
  }

  return (
    <Container maxWidth="md" className={classes.container}>
      <Typography
        variant="h3"
        component="h3"
        align="center"
        className={classes.heading}
      >
        {getCatergoryName()}
      </Typography>
      {currentQuestion > 9 ? (
        <ResultCard score={score} />
      ) : (
        <QuizCard
          no={currentQuestion + 1}
          question={question["question"]}
          choices={choices}
          onSubmit={handleSubmit}
        />
      )}
    </Container>
  );

  function handleSubmit(selectedChoice: string) {
    if (selectedChoice === correctAnswer) {
      setScore(score + 1);
    }

    setCurrentQuestion(currentQuestion + 1);
  }

  function getCatergoryName(): string {
    switch (searchParams.get("category")) {
      case Categories.Computers:
        return "Computers";

      case Categories.GeneralKnowledge:
        return "General Knowledge";

      case Categories.Geography:
        return "Geography";

      case Categories.History:
        return "History";

      case Categories.Music:
        return "Music";

      case Categories.ScienceAndNature:
        return "Science & Nature";

      default:
        return "";
    }
  }
};

export default QuizPage;
