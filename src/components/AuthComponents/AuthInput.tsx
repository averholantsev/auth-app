import React from "react";
import { TextField } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";

const CSSTextField = withStyles({
  root: {
    margin: "10px 0",
    width: "100%",
    "&:hover label.MuiInputLabel-outlined": {
      color: "rgba(0, 0, 0, 0.87)"
    },
    "&:hover label.Mui-focused": {
      color: "#2196F3"
    },
    "& label.Mui-focused": {
      color: "#2196F3"
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "rgba(0, 0, 0, 0.36)"
      },
      "&:hover fieldset": {
        borderColor: "rgba(0, 0, 0, 0.87)"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#2196F3"
      }
    }
  }
})(TextField);

const AuthInput = (props: any) => {
  return <CSSTextField variant="outlined" {...props} />;
};

export default AuthInput;
