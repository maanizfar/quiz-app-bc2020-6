import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
  },
}));

type Props = {
  label: string;
};

const TopBar = ({ label }: Props) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          edge="start"
          className={classes.menuButton}
          color="inherit"
          aria-label="menu"
          onClick={() => history.push("/")}
        >
          <img src="images/icon.png" alt="logo" height={40} width="auto" />
        </IconButton>
        <Typography variant="h5">{label}</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
