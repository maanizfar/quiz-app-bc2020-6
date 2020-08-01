import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {},

  quizNo: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
  },

  scoreContainer: {
    height: "100%",
    minHeight: 180,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.secondary.light,
    color: theme.palette.common.white,
  },
}));

type Props = {
  score: number;
};

const ResultCard = ({ score }: Props) => {
  const classes = useStyles();

  return (
    <Card className={classes.container}>
      <Typography variant="body1" align="center" className={classes.quizNo}>
        Result
      </Typography>

      <div className={classes.scoreContainer}>
        <Typography component="h2" variant="h2">
          {score}/10
        </Typography>
      </div>
    </Card>
  );
};

export default ResultCard;
