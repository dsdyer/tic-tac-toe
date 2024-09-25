const LINES = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

class TicTacToe {
  constructor() {
    this.MOVE_PRIORITY = [5, 1, 3, 7, 9, 2, 4, 6, 8, 0];
    this.board = new Array(10).fill('');
    this.board[0] = null; // we're ignoring index 0
    this.game_over = false
  }
  
  isWon() {
    for (let line of LINES) {
      if ( ['XXX', 'OOO'].includes(line.map(f=>this.board[f]).sort().join('')) ) return true
    }
    return false
  }
  
  move(field=null) {
    if ( this.game_over ) return [0, "Game ended"]
    
    const Xs = this.board.filter(v=>v==='X').length;
    const Os = this.board.filter(v=>v==='O').length;
    const mark = (Xs > Os) ? 'O' : 'X';
    
    if (field) {
      if (this.board[field] !== '') return [0, "Illegal move"]
      this.board[field] = mark;
      
      if ( this.isWon() ) {
        this.game_over = true;
        return [0, "You win!"]
      }
      
      if ( !this.board.some(v => v==='') )  {
        this.game_over = true;
        return [0, "Draw!"]
      }
      
      return this.move()
    } else {
      const move = this.MOVE_PRIORITY.find(m => this.board[m] === '');
      this.board[move] = mark;
      
      if ( this.isWon() ) {
        this.game_over = true;
        return [move, "I win!"]
      }
      
      if ( !this.board.some(v => v==='') )  {
        this.game_over = true;
        return [move, "Draw!"]
      }
      return [move, "Your move?"]
    }
  }
}

export {TicTacToe};