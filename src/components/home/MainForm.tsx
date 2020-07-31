import React, { useState } from "react";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import { useHistory } from "react-router";

import MyButton from "../MyButton";

const MainForm = () => {
  const [category, setCategory] = useState("9");
  const [difficulty, setDifficulty] = useState("easy");

  const history = useHistory();

  return (
    <form>
      <FormControl component="fieldset">
        <FormLabel component="legend">Category</FormLabel>
        <RadioGroup
          aria-label="category"
          name="catergory"
          row
          value={category}
          onChange={handleCategoryChange}
        >
          <FormControlLabel
            value="9"
            control={<Radio />}
            label="General Knowledge"
          />
          <FormControlLabel value="18" control={<Radio />} label="Computers" />
          <FormControlLabel value="23" control={<Radio />} label="History" />
          <FormControlLabel value="12" control={<Radio />} label="Music" />
          <FormControlLabel
            value="17"
            control={<Radio />}
            label="Science & Nature"
          />
          <FormControlLabel value="22" control={<Radio />} label="Geography" />
        </RadioGroup>

        <FormLabel component="legend">Difficulty</FormLabel>
        <RadioGroup
          aria-label="difficulty"
          name="difficulty"
          row
          value={difficulty}
          onChange={handleDifficultyChange}
        >
          <FormControlLabel value="easy" control={<Radio />} label="Easy" />
          <FormControlLabel value="medium" control={<Radio />} label="Medium" />
          <FormControlLabel value="hard" control={<Radio />} label="Hard" />
        </RadioGroup>

        <MyButton label="Start Quiz" onClick={handleSubmit} />
      </FormControl>
    </form>
  );

  function handleCategoryChange(event: React.ChangeEvent<HTMLInputElement>) {
    setCategory(event.target.value);
    // console.log(event.target.value);
  }

  function handleDifficultyChange(event: React.ChangeEvent<HTMLInputElement>) {
    setDifficulty(event.target.value);
    // console.log(event.target.value);
  }

  function handleSubmit() {
    history.push(`/quiz?category=${category}&difficulty=${difficulty}`);
  }
};

export default MainForm;
