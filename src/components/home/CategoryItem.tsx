import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { Categories } from "../../utils/categories";

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

    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",

    cursor: "pointer",
    color: (props: Props) => (props.active ? "white" : "black"),

    overflow: "hidden",

    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(1),
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },

  label: {
    marginTop: theme.spacing(1),
  },
}));

type Props = {
  category: Categories;
  active: boolean;
  label: string;
  icon: string;
  onClick: (category: Categories) => void;
};

const CategoryItem = (props: Props) => {
  const classes = useStyles(props);

  return (
    <div
      className={classes.container}
      onClick={() => props.onClick(props.category)}
    >
      <img src={props.icon} alt={props.label} className={classes.image} />
      <Typography
        variant="body2"
        component="p"
        align="center"
        className={classes.label}
      >
        {props.label}
      </Typography>
    </div>
  );
};

export default CategoryItem;
