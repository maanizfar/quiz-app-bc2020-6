import React from "react";
import MainForm from "./MainForm";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },
}));

const HomePage = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="md">
      <Typography
        variant="h1"
        component="h1"
        align="center"
        color="primary"
        className={classes.heading}
      >
        Quiz App
      </Typography>
      <MainForm />
    </Container>
  );
};

export default HomePage;
