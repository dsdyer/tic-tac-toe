import { useState } from 'react'
import Square from './Square'

function Board() {
  const [board, setBoard] = useState(Array(9).fill(0))

  function handleClick(i: number) {

    const newBoard = board.slice()

    newBoard[i] = (newBoard[i] + 1) % 3

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
    </>
  )};

export default Board;