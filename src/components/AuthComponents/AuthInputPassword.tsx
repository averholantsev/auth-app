import React from "react";
import { TextField, InputAdornment, IconButton } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
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
    },
    input: {
      "&:-webkit-autofill": {
        WebkitBoxShadow: "0 0 0 30px white inset !important",
      }
    }
  })
);

interface State {
  showPassword: boolean;
}

const AuthInputPassword = (props: any) => {
  const classes = useStyles();
  const [state, setState] = React.useState<State>({
    showPassword: false
  });

  const handleClickShowPassword = () => {
    setState({ ...state, showPassword: !state.showPassword });
  };

  return (
    <TextField
      className={classes.root}
      variant="outlined"
      type={state.showPassword ? "text" : "password"}
      inputProps={{className: classes.input}}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {state.showPassword ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        )
      }}
      {...props}
    />
  );
};

export default AuthInputPassword;
