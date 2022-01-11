import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
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

export const LogIn = ({ toggleOpen }) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { loggedIn, callAPILogIn } = useContext(AuthenticationContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    callAPILogIn(username, password);
    toggleOpen();
  };

  return (
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
      {!loggedIn ? (
        <div>
          <Button
            className="intro-btn"
            type="submit"
            variant="contained"
            color="primary"
          >
            Log In
          </Button>
        </div>
      ) : (
        <div>
          <Button
            className="intro-btn"
            type="submit"
            component={Link}
            to="/scoreboard"
            variant="contained"
          >
            Continue
          </Button>
        </div>
      )}
    </form>
  );
};

export default LogIn;
