import React, { useMemo, useState } from "react";

export default function App() {
  const [gameboard, setGameboard] = useState([[], [], []]);
  
  const restart = () => {
    setGameboard([[], [], []]);
  };

  const hasWinner = (player) => {
    return (
      (gameboard[0][0] === player && gameboard[0][1] === player && gameboard[0][2] === player) ||
      (gameboard[1][0] === player && gameboard[1][1] === player && gameboard[1][2] === player) ||
      (gameboard[2][0] === player && gameboard[2][1] === player && gameboard[2][2] === player) ||
      (gameboard[0][0] === player &&
        gameboard[1][0] === player &&
        gameboard[2][0] === player) ||
      (gameboard[0][1] === player &&
        gameboard[1][1] === player &&
        gameboard[2][1] === player) ||
      (gameboard[0][2] === player &&
        gameboard[1][2] === player &&
        gameboard[2][2] === player) ||
      (gameboard[0][0] === player &&
        gameboard[1][1] === player &&
        gameboard[2][2] === player) ||
      (gameboard[0][2] === player &&
        gameboard[1][1] === player &&
        gameboard[2][0] === player)
    );
  };

  const xWins = useMemo(() => {
    return hasWinner("x");
  }, [hasWinner]);

  const oWins = useMemo(() => {
    return hasWinner("o");
  }, [hasWinner]);

  if (xWins || oWins) {
    if (xWins) {
      return (
        <>
          <div>x wins</div>
          <button onClick={restart}>restart</button>
        </>
      );
    }

    if (oWins) {
      return (
        <>
          <div>o wins</div>
          <button onClick={restart}>restart</button>
        </>
      );
    }
  } else {

  return (
    <div className="App">
      <form>
        {Array(3)
          .fill()
          .map((_, i) => {
            return (
              <div key={i}>
                {Array(3).fill().map((_, j) => {
                    return (
                      <span key={j}>
                        <input value={gameboard[i][j] || ""} onChange={(e) => {
                            const b = [...gameboard];
                            b[i][j] = e.target.value;
                            setGameboard(b);
                          }}
                          style={{ width: 20 }}
                        />
                      </span>
                    );
                  })}
              </div>
            );
          })}
      </form>
    </div>
  );
}
}