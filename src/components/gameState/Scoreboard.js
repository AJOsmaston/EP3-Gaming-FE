import { useScoreboardAPI } from "../../hooks/useScoreboardAPI";

export const Scoreboard = () => {
  const topTen = useScoreboardAPI();
  return (
    <ol>
      Scoreboard:
      {topTen.map((scoreData) => (
        <li key={scoreData.user._id.toString()}> {scoreData.user} : {scoreData.score} </li>
      ))}
    </ol>
  );
};
