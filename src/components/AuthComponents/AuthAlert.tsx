import React from "react";
import Alert from "@material-ui/lab/Alert";
import { withStyles } from "@material-ui/core/styles";

const CSSAlert = withStyles({
  root: {
    marginBottom: "10px"
  }
})(Alert)

const AuthAlert = (props: any) => {
  return <CSSAlert {...props}>{props.children}</CSSAlert>;
};

export default AuthAlert;
