import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import Grid from "@material-ui/core/Grid";
import CheckIcon from "@material-ui/icons/Check";

import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";

import MyButton from "../MyButton";
import RadioButton from "./RadioButton";

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },

  radioButtonContainer: {
    padding: theme.spacing(2),
  },

  radioButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: 8,
    border: `2px solid`,
    width: "100%",
  },

  radio: {
    marginRight: 8,
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

const EmptyIcon = () => <div style={{ width: "24px", height: "24px" }}></div>;

const MainForm = () => {
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");

  const history = useHistory();

  const classes = useStyles();

  return (
    <form>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          aria-label="category"
          name="catergory"
          value={category}
          onChange={handleCategoryChange}
        >
          <Grid container spacing={2} className={classes.radioButtonContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="9" label="General Knowledge" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="18" label="Computers" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="23" label="History" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="12" label="Music" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="17" label="Science & Nature" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="22" label="Geography" />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Difficulty</FormLabel>
        <RadioGroup
          aria-label="difficulty"
          name="difficulty"
          row
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          <Grid container spacing={2} className={classes.radioButtonContainer}>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="easy" label="Easy" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="medium" label="Medium" />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <RadioButton value="hard" label="Hard" />
            </Grid>
          </Grid>
        </RadioGroup>
      </FormControl>

      <div className={classes.btnContainer}>
        <MyButton label="Start Quiz" onClick={handleSubmit} />
      </div>
    </form>
  );

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
  }

  function handleDifficultyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDifficulty(event.target.value);
  }

  function handleSubmit() {
    history.push(`/quiz?category=${category}&difficulty=${difficulty}`);
  }
};

export default MainForm;
