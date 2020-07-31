import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import Radio from "@material-ui/core/Radio";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },

  choicesContainer: {
    marginLeft: theme.spacing(2),
  },

  btnContainer: {
    display: "flex",
    justifyContent: "flex-end",
  },
}));

type QuizProps = {
  no: number;
  question: string;
  choices: string[];
  onSubmit: (selection: string) => void;
};

const QuizCard = ({ question, choices, no, onSubmit }: QuizProps) => {
  const classes = useStyles();
  const [selection, setSelection] = useState("");

  return (
    <Card className={classes.container}>
      <Typography variant="body1" align="right">
        {no}/10
      </Typography>
      <Typography component="h5" variant="h5" gutterBottom>
        {ReactHtmlParser(question)}
      </Typography>

      <FormControl component="fieldset" className={classes.choicesContainer}>
        <RadioGroup
          aria-label="question"
          name="question"
          value={selection}
          onChange={handleChange}
        >
          {choices.map((choice) => (
            <FormControlLabel
              key={choice}
              value={choice}
              control={<Radio color="primary" />}
              label={ReactHtmlParser(choice)}
            />
          ))}
        </RadioGroup>
      </FormControl>
      <div className={classes.btnContainer}>
        <Button
          variant="contained"
          disabled={!selection}
          onClick={() => handleSubmit()}
          color="primary"
        >
          Submit
        </Button>
      </div>
    </Card>
  );

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setSelection(event.target.value);
  }

  function handleSubmit() {
    onSubmit(selection);
    setSelection("");
  }
};

export default QuizCard;
