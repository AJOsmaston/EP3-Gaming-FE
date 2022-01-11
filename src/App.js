// import Button from '@material-ui/core/Button';
import "./App.css";
import { GameView } from "./components/gameState/GameView";
import { HomePage } from "./components/HomePage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Scoreboard } from "./components/gameState/Scoreboard";
import { Layout } from "./components/Layout";
import { useState } from "react";
import React from "react";
import { AuthenticationProvider } from "./context/AuthenticationContext";

const App = () => {
  const [playing, setPlaying] = useState();

  return (
    <div>
      <AuthenticationProvider>
        <Router>
          <Layout>
            <Routes>
              <Route
                path="/"
                element={
                  <HomePage playing={playing} setPlaying={setPlaying} />
                }
              />
              <Route path="/game" element={<GameView />} />
              <Route path="/scoreboard" element={<Scoreboard />} />
            </Routes>
          </Layout>
        </Router>
      </AuthenticationProvider>
    </div>
  );
};

export default App;
