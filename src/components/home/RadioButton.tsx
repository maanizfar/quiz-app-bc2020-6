import React from "react";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import CheckIcon from "@material-ui/icons/Check";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  radioButton: {
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.primary.main,
    borderRadius: 8,
    border: `2px solid`,
    width: "100%",
  },

  radio: {
    marginRight: 8,
  },
}));

type Props = {
  value: string;
  label: string;
};

const EmptyIcon = () => <div style={{ width: "24px", height: "24px" }}></div>;

const RadioButton = ({ value, label }: Props) => {
  const classes = useStyles();

  return (
    <FormControlLabel
      value={value}
      control={
        <Radio
          classes={{ root: classes.radio }}
          checkedIcon={<CheckIcon />}
          icon={<EmptyIcon />}
          color="primary"
        />
      }
      label={label}
      className={classes.radioButton}
    />
  );
};

export default RadioButton;
