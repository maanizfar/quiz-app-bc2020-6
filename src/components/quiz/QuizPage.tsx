import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Typography, Container, Button } from "@material-ui/core";
import { useHistory } from "react-router";
import QuizCard from "./QuizCard";
import { shuffleArray } from "../../utils/utils";
import { Categories } from "../../utils/categories";
import ResultCard from "./ResultCard";

import { makeStyles } from "@material-ui/core/styles";
import Loading from "./Loading";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: theme.palette.background.default,
    minHeight: "100vh",
  },

  heading: {
    marginBottom: theme.spacing(4),
    paddingTop: theme.spacing(4),
  },

  btnHome: {
    marginTop: theme.spacing(4),
  },
}));

const QuizPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const location = useLocation();
  const classes = useStyles();
  const history = useHistory();

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

  if (questions.length < 1) return <Loading />;

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
    <main className={classes.container}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          component="h4"
          align="center"
          color="primary"
          className={classes.heading}
        >
          {getCatergoryName()}
        </Typography>

        {currentQuestion > 9 ? (
          <>
            <ResultCard score={score} />
            <Button
              variant="contained"
              onClick={() => history.push("/")}
              color="primary"
              fullWidth
              className={classes.btnHome}
            >
              Go to Home
            </Button>
          </>
        ) : (
          <QuizCard
            no={currentQuestion + 1}
            score={score}
            question={question["question"]}
            choices={choices}
            onSubmit={handleSubmit}
          />
        )}
      </Container>
    </main>
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
