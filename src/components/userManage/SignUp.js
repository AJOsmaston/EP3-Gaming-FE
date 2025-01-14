import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import AuthenticationContext from "../../context/AuthenticationContext";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),

    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "300px",
    },
    "& .MuiButtonBase-root": {
      margin: theme.spacing(2),
    },
  },
}));

const SignUp = ({ toggleOpen, setShowLogin }) => {
  const classes = useStyles();
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { callAPISignUp } = useContext(AuthenticationContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPISignUp(username, password);
    toggleOpen();
  };


  return (
    <>
      <form className={classes.root} onSubmit={handleSubmit}>
        <TextField
          label="Username"
          variant="filled"
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          label="Password"
          variant="filled"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
