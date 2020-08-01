import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100%",
    minHeight: 80,
    padding: theme.spacing(2),

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: (props: Props) =>
      props.active ? theme.palette.primary.main : theme.palette.secondary.main,

    boxShadow: (props: Props) =>
      props.active ? "none" : `2px 2px 4px 0px ${theme.palette.secondary.dark}`,

    transform: (props: Props) => (props.active ? "scale(0.99)" : "scale(1)"),
    transition: "all 0.25s",

    cursor: "pointer",
    color: theme.palette.common.white,

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

const ChoiceItem = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div
      className={classes.container}
      onClick={() => props.onClick(props.value)}
    >
      <Typography variant="body1" component="p" align="center">
        {ReactHtmlParser(props.label)}
      </Typography>
    </div>
  );
};

export default ChoiceItem;
