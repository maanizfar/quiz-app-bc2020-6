import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid, Container } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import ReactHtmlParser from "react-html-parser";
import ChoiceItem from "./ChoiceItem";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    // boxShadow: "2px 2px 8px 0px rgba(0,0,0,0.5)",
  },

  topBanner: {
    display: "flex",
    minHeight: 40,
    justifyContent: "center",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: "8px 16px",
    textTransform: "uppercase",
  },

  questionContainer: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,

    minHeight: "40vh",
  },

  choicesContainer: {
    padding: theme.spacing(2),
    minHeight: 220,
  },

  choice: {
    padding: theme.spacing(1),
  },
  nextBtnContainer: {
    width: "100%",
    display: "flex",
    justifyContent: "center",
  },

  nextBtn: {
    minWidth: 140,
  },
}));

type QuizProps = {
  no: number;
  score: number;
  question: string;
  choices: string[];
  onSubmit: (selection: string) => void;
};

const QuizCard = ({ question, choices, no, score, onSubmit }: QuizProps) => {
  const classes = useStyles();
  const [selection, setSelection] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <div className={classes.topBanner}>
        <Typography variant="h6" align="center">
          {no}/10
        </Typography>
        {/* <Typography variant="body1" align="center">
          Score: <strong>{score}</strong>
        </Typography> */}
      </div>
      <div className={classes.container}>
        <div className={classes.questionContainer}>
          <Slide direction={submitted ? "right" : "left"} in={!submitted}>
            <Typography component="h6" variant="h6" align="center">
              {ReactHtmlParser(question)}
            </Typography>
          </Slide>
        </div>

        <Slide direction={submitted ? "right" : "left"} in={!submitted}>
          <Container maxWidth="sm" className={classes.choicesContainer}>
            <Grid container>
              {choices.map((choice) => (
                <Grid item xs={6} key={choice} className={classes.choice}>
                  <ChoiceItem
                    value={choice}
                    label={choice}
                    active={choice === selection}
                    onClick={handleChange}
                  />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Slide>
        <div className={classes.nextBtnContainer}>
          <Button
            variant="contained"
            disabled={!selection}
            onClick={() => handleSubmit()}
            color="primary"
            className={classes.nextBtn}
          >
            Next Question
          </Button>
        </div>
      </div>
    </>
  );

  function handleChange(value: string) {
    setSelection(value);
  }

  function handleSubmit() {
    onSubmit(selection);
    setSelection("");
    setSubmitted(true);

    if (no < 10) setTimeout(() => setSubmitted(false), 500);
  }
};

export default QuizCard;
