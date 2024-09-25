import { useState } from 'react'
import Square from './Square'
import Controls from './Controls';
// import { TicTacToe } from './TicTacToe.js'

// const ttt = new TicTacToe();





function Board() {
  const [board, setBoard] = useState(Array(9).fill(' '))
  
  function handleClick(i: number) {
    const newBoard = board.slice();
    newBoard[i] = (newBoard[i] + 1) % 3;
    // ttt.move(i+1)
    // console.log(ttt.board)
    setBoard(newBoard)
  }

  return (
    <>
      <h1>Welcome! Let's play</h1>
      <div className="board">
        {
          board.map((cell, i) => (
            <Square key={i} move={cell} onClick={()=>handleClick(i)}/>
          ))
        }
      </div>
      <Controls handleReset={() => setBoard(Array(9).fill(' '))}/>
    </>
  )};

export default Board;