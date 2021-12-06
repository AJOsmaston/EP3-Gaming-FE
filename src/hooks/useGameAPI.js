import { useState, useEffect } from "react";

export const useGameAPI = () => {
  const [gameData, setGameData] = useState([]);

  const startGame = async () => {
    const url = "https://makersep3gamebackend.herokuapp.com/start-game";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setGameData(json);
  };

  const changeTurn = async () => {
    const url = "https://makersep3gamebackend.herokuapp.com/turn";
    const res = await fetch(url, { method: "GET" });
    const json = await res.json();

    setGameData(json);
  };

  useEffect(() => startGame(), []);

  return [gameData, changeTurn];
};
