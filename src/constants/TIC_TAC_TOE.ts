const LINES = [
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6]
]

const TEST_GAMES = {
  start: Array(9).fill(' '),
  xWins: ['X', 'X', 'X', ' ', ' ', ' ', ' ', ' ', ' '],
  oWins: ['O', 'O', 'O', ' ', ' ', ' ', ' ', ' ', ' '],
  xWinsDiagonal: ['X', ' ', ' ', ' ', 'X', ' ', ' ', ' ', 'X'],
  oWinsDiagonal: ['O', ' ', ' ', ' ', 'O', ' ', ' ', ' ', 'O'],
  xWinsColumn: ['X', ' ', ' ', 'X', ' ', ' ', 'X', ' ', ' '],
  oWinsColumn: ['O', ' ', ' ', 'O', ' ', ' ', 'O', ' ', ' '],
  draw1: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'X'],
  draw2: ['O', 'X', 'O', 'X', 'O', 'X', 'X', 'O', 'X'],
  draw3: ['X', 'O', 'X', 'O', 'X', 'O', 'O', 'X', 'O'],

  // incomplete games
  incomplete1: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', ' '],
  incomplete2: ['X', 'O', 'X', 'X', 'O', 'O', ' ', ' ', ' '],
  incomplete3: ['X', 'X', ' ', ' ', 'O', 'O', 'O', ' ', ' '],
  incomplete4: ['X', 'O', 'X', 'X', 'O', 'O', 'O', 'X', 'O'],
  incomplete5: [' ', 'O', 'X', ' ', 'O', ' ', 'O', ' ', ' '],

  incomplete6: [
    'X', 'O', 'X',
    'X', 'O', 'O',
    'O', 'X', ' '
  ],

  incomplete7: [
    'X', 'O', 'X',
    'X', 'O', 'O',
    ' ', ' ', ' '
  ],

  incomplete8: [
    'X', 'X', ' ',
    ' ', 'O', 'O',
    'O', ' ', ' '
  ],

}

const WINNABLE_LINES = {
  'X': ['XX ', 'X X', ' XX'],
  'O': ['XOO ', 'O O', ' OO']
}




export {LINES, WINNABLE_LINES, TEST_GAMES}