import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router";
import CategoryItem from "./CategoryItem";
import { Categories } from "../../utils/categories";
import DifficultyButton from "./DifficultyButton";
import { Container, Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  formControl: {
    width: "100%",
    marginBottom: theme.spacing(4),
  },

  gridContainer: {
    marginTop: theme.spacing(2),
  },
}));

const MainForm = () => {
  const [category, setCategory] = useState(Categories.GeneralKnowledge);
  const [difficulty, setDifficulty] = useState("easy");

  const history = useHistory();
  const classes = useStyles();

  return (
    <form className={classes.container}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Category</FormLabel>
        <Grid
          container
          spacing={2}
          className={classes.gridContainer}
          justify="center"
        >
          <Grid item xs={4} sm={3} md={2}>
            <CategoryItem
              label="General Knowledge"
              icon="images/generalknowledge.png"
              category={Categories.GeneralKnowledge}
              active={category === Categories.GeneralKnowledge}
              onClick={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={2}>
            <CategoryItem
              label="Science & Nature"
              icon="images/science.png"
              category={Categories.ScienceAndNature}
              active={category === Categories.ScienceAndNature}
              onClick={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={2}>
            <CategoryItem
              label="Computers"
              icon="images/computer.png"
              category={Categories.Computers}
              active={category === Categories.Computers}
              onClick={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={2}>
            <CategoryItem
              label="History"
              icon="images/history.png"
              category={Categories.History}
              active={category === Categories.History}
              onClick={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={2}>
            <CategoryItem
              label="Music"
              icon="images/music.png"
              category={Categories.Music}
              active={category === Categories.Music}
              onClick={handleCategoryChange}
            />
          </Grid>
          <Grid item xs={4} sm={3} md={2}>
            <CategoryItem
              label="Geography"
              icon="images/geography.png"
              category={Categories.Geography}
              active={category === Categories.Geography}
              onClick={handleCategoryChange}
            />
          </Grid>
        </Grid>
      </FormControl>

      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Difficulty</FormLabel>

        <Container maxWidth="sm">
          <Grid container spacing={1} className={classes.gridContainer}>
            <Grid item xs={4}>
              <DifficultyButton
                label="Easy"
                value="easy"
                active={difficulty === "easy"}
                onClick={handleDifficultyChange}
              />
            </Grid>
            <Grid item xs={4}>
              <DifficultyButton
                label="Medium"
                value="medium"
                active={difficulty === "medium"}
                onClick={handleDifficultyChange}
              />
            </Grid>
            <Grid item xs={4}>
              <DifficultyButton
                label="Hard"
                value="hard"
                active={difficulty === "hard"}
                onClick={handleDifficultyChange}
              />
            </Grid>
          </Grid>
        </Container>
      </FormControl>

      <Button
        variant="contained"
        onClick={handleSubmit}
        color="primary"
        fullWidth
      >
        Start Quiz
      </Button>
    </form>
  );

  function handleCategoryChange(category: Categories) {
    setCategory(category);
  }

  function handleDifficultyChange(value: string) {
    setDifficulty(value);
  }

  function handleSubmit() {
    history.push(`/quiz?category=${category}&difficulty=${difficulty}`);
  }
};

export default MainForm;
