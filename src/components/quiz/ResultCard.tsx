import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router";
import { makeStyles } from "@material-ui/core/styles";

import MyButton from "../MyButton";

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(4),
  },

  choicesContainer: {
    marginLeft: theme.spacing(2),
  },

  btnContainer: {
    display: "flex",
    justifyContent: "center",
  },
}));

type Props = {
  score: number;
};

const ResultCard = ({ score }: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <Card className={classes.container}>
      <Typography component="h4" variant="h4" align="center" gutterBottom>
        Result
      </Typography>

      <Typography variant="h1" align="center" gutterBottom>
        {score}/10
      </Typography>

      <div className={classes.btnContainer}>
        <MyButton label="Home" onClick={() => history.push("/")} />
      </div>
    </Card>
  );
};

export default ResultCard;
