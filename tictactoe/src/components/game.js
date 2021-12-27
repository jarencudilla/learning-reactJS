import React, { useState } from 'react'
import Board from './board'
import refreshBoard from './refreshboard'

// game board
// 0 1 2
// 3 4 5
// 6 7 8

// game combination 
// horizontals
// 0 1 2
// 3 4 5
// 6 7 8
// verticals
// 0 3 6
// 1 4 7
// 2 5 8
// diagonals
// 0 4 8
// 2 4 6

const hasWinner = (board) => {
  
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for(let i=0; i < lines.length; i++) {
      let [a, b, c] = lines[i];
      if (board[a] !== "" && board[a] === board[b] && board[b] === board[c]) {
          return true;
      }
    }
    return false;
  }

  const Game = () => {
    const [board, setBoard] = useState(Array(9).fill(""));
    const [hasPlayer, setHasPlayer] = useState("X");
    const [message, setMessage] = useState("Click to start"); 

  }

  const handleInput = (pos) => {    
    if (hasPlayer === "" || board[pos] !== "") {
        return;
    }

    const boardCopy = [...board];
        boardCopy[pos] = hasPlayer;
        setBoard(boardCopy); 
        

        if (hasWinner(boardCopy)){
            setMessage(`WON: ${hasPlayer}`)
            setHasPlayer("");
            return;
        }

        if (boardCopy.indexOf("")=== -1){
            // if no more moves game is draw
            setMessage("DRAW")
            setHasPlayer("");
        } else {
            let nextPlayer = (hasPlayer === "X") ? "O" : "X"
            setHasPlayer(nextPlayer); // updating player
            setMessage(`TURN: ${nextPlayer}`)
        }
    }

export default Game