interface SquareProps {
  
  move: 0|1|2
  onClick: () => void;
}

function Square(props: SquareProps) {

  const moves = {
    0: ' ',
    1: 'X',
    2: 'O'
  }

  const mark = moves[props.move];
  
  return (
    <div className="box" {...props}>
      <span className={mark}>{mark}</span>
    </div>
  )
}

export default Square;