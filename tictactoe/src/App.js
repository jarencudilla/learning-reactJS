import React, { useMemo, useState } from "react";

export default function App() {
  const [board, setBoard] = useState([[], [], []]);
  const restart = () => {
    setBoard([[], [], []]);
  };

  const isWinner = (player) => {
    return (
      (board[0][0] === player &&
        board[0][1] === player &&
        board[0][2] === player) ||
      (board[1][0] === player &&
        board[1][1] === player &&
        board[1][2] === player) ||
      (board[2][0] === player &&
        board[2][1] === player &&
        board[2][2] === player) ||
      (board[0][0] === player &&
        board[1][0] === player &&
        board[2][0] === player) ||
      (board[0][1] === player &&
        board[1][1] === player &&
        board[2][1] === player) ||
      (board[0][2] === player &&
        board[1][2] === player &&
        board[2][2] === player) ||
      (board[0][0] === player &&
        board[1][1] === player &&
        board[2][2] === player) ||
      (board[0][2] === player &&
        board[1][1] === player &&
        board[2][0] === player)
    );
  };


}