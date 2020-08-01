import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
}));

const Loading = () => {
  const { container } = useStyles();

  return (
    <div className={container}>
      <Typography variant="subtitle1" color="primary">
        Loading Questions...
      </Typography>
    </div>
  );
};

export default Loading;
