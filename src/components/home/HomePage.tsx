import React from "react";
import MainForm from "./MainForm";
import Container from "@material-ui/core/Container";

import TopBar from "../TopBar";

const HomePage = () => {
  return (
    <>
      <TopBar label="Quiz App" />
      <Container maxWidth="md">
        <MainForm />
      </Container>
    </>
  );
};

export default HomePage;
