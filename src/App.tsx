import { useState } from 'react'
import Board from './Board'
import Controls from './Controls'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Board></Board>
      <Controls></Controls>
    </>
  )
}

export default App
