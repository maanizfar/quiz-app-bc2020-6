import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    padding: theme.spacing(2),
    backgroundColor: (props: Props) =>
      props.active ? theme.palette.primary.main : theme.palette.common.white,

    boxShadow: (props: Props) =>
      props.active ? "none" : `2px 2px 4px 0px ${theme.palette.primary.main}`,
    borderRadius: theme.spacing(2),

    transform: (props: Props) => (props.active ? "scale(0.99)" : "scale(1)"),
    transition: "all 0.25s",

    cursor: "pointer",
    color: (props: Props) =>
      props.active ? "white" : theme.palette.primary.main,

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
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
      <Typography variant="button" component="h6" align="center">
        {props.label}
      </Typography>
    </div>
  );
};

export default DifficultyButton;
