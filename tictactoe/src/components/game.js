import React, { useState } from 'react'
import Board from './board'
import Message from './message'
import Refresh from './refresh'

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

const isWon = (board) => {
  
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