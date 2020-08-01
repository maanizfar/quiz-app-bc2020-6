import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import ReactHtmlParser from "react-html-parser";

const useStyles = makeStyles((theme) => ({
  container: {
    heigth: "100%",
    minHeight: 80,
    padding: theme.spacing(2),

    display: "flex",
    justifyContent: "center",
    alignItems: "center",

    backgroundColor: (props: Props) =>
      props.active ? theme.palette.primary.main : theme.palette.secondary.main,

    // background: (props: Props) =>
    //   props.active
    //     ? `linear-gradient(to right, ${theme.palette.primary.dark} 0%, ${theme.palette.primary.main} 100%)`
    //     : `linear-gradient(to right, ${theme.palette.secondary.main} 0%, ${theme.palette.secondary.dark} 100%)`,

    boxShadow: (props: Props) =>
      props.active ? "none" : "2px 2px 4px 0px rgba(132,88,179,0.4)",

    transform: (props: Props) => (props.active ? "scale(0.99)" : "scale(1)"),
    transition: "all 0.5s",

    // borderWidth: "1px",
    // borderStyle: "solid",
    // borderColor: theme.palette.primary.main,

    cursor: "pointer",
    color: theme.palette.common.white,

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

const ChoiceItem = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div
      className={classes.container}
      onClick={() => props.onClick(props.value)}
    >
      <Typography
        variant="body1"
        component="p"
        align="center"
        className={classes.label}
      >
        {ReactHtmlParser(props.label)}
      </Typography>
    </div>
  );
};

export default ChoiceItem;
