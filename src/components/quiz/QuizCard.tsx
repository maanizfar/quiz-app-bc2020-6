import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import Slide from "@material-ui/core/Slide";
import ReactHtmlParser from "react-html-parser";
import ChoiceItem from "./ChoiceItem";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
    boxShadow: "2px 2px 8px 0px rgba(0,0,0,0.5)",
  },

  topBanner: {
    display: "flex",
    justifyContent: "space-between",
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
    minHeight: 180,
  },

  choicesContainer: {
    padding: theme.spacing(1),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    backgroundColor: theme.palette.common.white,
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
    <Slide direction="left" in={!submitted} mountOnEnter unmountOnExit>
      <Card className={classes.container}>
        <div className={classes.topBanner}>
          <Typography variant="body1" align="center">
            Q#: <strong>{no}/10</strong>
          </Typography>
          <Typography variant="body1" align="center">
            Score: <strong>{score}</strong>
          </Typography>
        </div>

        <div className={classes.questionContainer}>
          <Typography component="h6" variant="h6" align="center">
            {ReactHtmlParser(question)}
          </Typography>
        </div>

        <Grid container spacing={1} className={classes.choicesContainer}>
          {choices.map((choice) => (
            <Grid item xs={6} key={choice}>
              <ChoiceItem
                value={choice}
                label={choice}
                active={choice === selection}
                onClick={handleChange}
              />
            </Grid>
          ))}
        </Grid>

        <Button
          variant="contained"
          disabled={!selection}
          onClick={() => handleSubmit()}
          color="primary"
          fullWidth
        >
          Next Question
        </Button>
      </Card>
    </Slide>
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
