import { useGameAPI } from "../../hooks/useGameAPI";
import { GameOver } from "./GameOver";

export const GameView = () => {
  const [game, changeTurn] = useGameAPI(); //[gameData, changeTurn]

  const handleKeyPress = (event) => {
    if(event.code === 'Space'){
      changeTurn()
    }
  }
  
  return (
    <div>
      <div>Score: {game.score}</div>
      <div>Health: {game.health}</div>
      <div>
        {game.isDead ? (
          <GameOver />
        ) : (
          <button onClick={changeTurn} onKeyPress={handleKeyPress}>Attack</button>
        )}
      </div>
    </div>
  );
};