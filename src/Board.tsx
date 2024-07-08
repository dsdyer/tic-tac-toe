import { useState } from 'react'
import Box from './Box'

function Board() {
  const [board, setBoard] = useState(Array(9).fill(null))


  return (
    <>
      <h1>Welcome! Let's play</h1>
      <div className="board">
        {board.map((cell, index) => (
          <Box key={index} move={cell}/>
        ))}
      </div>
    </>
  )