import React from "react";
import Button from "@material-ui/core/Button";

type Props = {
  label: string;
  onClick: () => void;
};

const MyButton = ({ label, onClick }: Props) => {
  return (
    <Button variant="contained" onClick={onClick}>
      {label}
    </Button>
  );
};

export default MyButton;
