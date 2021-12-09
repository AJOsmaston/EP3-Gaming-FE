import { useEffect, useState } from "react";

export const useScoreAPI = () => {
  const [currentScore, updateScore] = useState([]);

  const sendScore = async () => {
    const url = "https://makersep3gamebackend.herokuapp.com/commit-score";
    const res = await fetch(url, { method: "GET", 
    credentials: 'include' });
    const json = await res.json();

    updateScore(json);
  };

  useEffect(() => sendScore(), []);

  return [currentScore];
};
