import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
}));

const Loading = () => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <Typography variant="subtitle1">Loading Questions...</Typography>
    </div>
  );
};

export default Loading;
