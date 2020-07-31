import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: (props: Props) =>
      props.active ? theme.palette.primary.main : theme.palette.common.white,

    borderRadius: theme.spacing(2),
    borderWidth: "2px",
    borderStyle: "solid",
    borderColor: theme.palette.primary.main,

    cursor: "pointer",
    color: (props: Props) => (props.active ? "white" : "black"),

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },

  label: {
    // marginTop: theme.spacing(1),
  },
}));

type Props = {
  active: boolean;
  label: string;
  value: string;
  onClick: (value: string) => void;
};

const DifficultyButton = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div
      className={classes.container}
      onClick={() => props.onClick(props.value)}
    >
      <Typography
        variant="button"
        component="h6"
        align="center"
        className={classes.label}
      >
        {props.label}
      </Typography>
    </div>
  );
};

export default DifficultyButton;
