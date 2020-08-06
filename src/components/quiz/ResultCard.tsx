import React from "react";
import Typography from "@material-ui/core/Typography";
import Slide from "@material-ui/core/Slide";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    padding: theme.spacing(1),
  },

  scoreContainer: {
    height: "100%",
    minHeight: "40vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: (props: Props) =>
      props.score < 6 ? theme.palette.error.main : theme.palette.success.main,
    color: theme.palette.common.white,
  },
}));

type Props = {
  score: number;
};

const ResultCard = ({ score }: Props) => {
  const classes = useStyles({ score });
  return (
    <div>
      <Typography variant="body1" align="center" className={classes.heading}>
        Result
      </Typography>

      <Slide direction="left" in={true} mountOnEnter unmountOnExit>
        <div className={classes.scoreContainer}>
          <Typography
            component="h1"
            variant="h1"
            gutterBottom
            style={{ fontSize: "4rem" }}
          >
            {score}/10
          </Typography>
          <Typography variant="h6">{getRemarks(score)}</Typography>
        </div>
      </Slide>
    </div>
  );
};

function getRemarks(score: number) {
  if (score < 6) return "Try harder";
  else if (score < 8) return "Good";
  else return "Excellent";
}

export default ResultCard;
