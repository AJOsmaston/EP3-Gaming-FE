import { useState, useContext } from "react";
import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";
import Score from "./Score";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { Grid } from "@material-ui/core";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import * as React from "react";
import AuthenticationContext from "../../context/AuthenticationContext";

export const Scoreboard = () => {
  const [open, setOpen] = useState(false);

  const { loggedIn, display, callAPILogOut } = useContext(AuthenticationContext);

  const topTen = useScoreboardAPI();

  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const toggleOpen = () => {
    setOpen(true);
  };

  const handleClick = () => {
    callAPILogOut();
    toggleOpen();
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <>
      {open && (
        <Stack spacing={2} sx={{ width: "100%" }}>
          <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="info" sx={{ width: "100%" }}>
              {display}
            </Alert>
          </Snackbar>{" "}
        </Stack>
      )}
      <Grid className="scoreboard">
        <div className="scores">
          <h1 className="high-score">High Scores</h1>
          {topTen.map((scoreData) => (
            <Score
              key={scoreData._id}
              userName={scoreData.user}
              score={scoreData.score}
            />
          ))}
        </div>
        <Grid container direction="row" className="btn-container">
          <Button
            className="alternative-btn"
            component={Link}
            to="/game"
            variant="contained"
            color="primary"
          >
            Play
          </Button>

          {loggedIn ? (
            <Button
              className="alternative-btn"
              onClick={handleClick}
              variant="contained"
              color="primary"
            >
              Logout
            </Button>
          ) : (
            <Button
              className="alternative-btn"
              component={Link}
              to="/"
              variant="contained"
              color="primary"
            >
              Continue
            </Button>
          )}
        </Grid>
      </Grid>
    </>
  );
};

