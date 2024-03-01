import { useState } from 'react'

const useTicTacToe = () => {

  const createBoard = () => {
    let newBoard: string[][] = [];
    for (let row = 0; row <= 2; row++) {
      newBoard[row] = [];
      for (let col = 0; col <= 2; col++) {
        newBoard[row][col] = ''
      }
    }
    return newBoard;
  };

  const initialBoard = createBoard();
  const [board, setBoard] = useState(initialBoard);

  const [player, setPlayer] = useState(true);

  const [win, setWin] = useState(false);

  const togglePlayer = () => {
    setPlayer(!player);
  };

  const checkRows = (row: string[]) => {
    if (row[0] == '') { return false }
    let allEqual = row.every((el, _index, arr) => el === arr[0]);
    return allEqual;
  };

  const getColumns = (arr: string[][]) => {
    let columns = [];
    for (let i = 0; i < arr.length; i++) {
      let column = [];
      for (let j = 0; j < arr.length; j++) {
        const el = arr[j][i];
        column.push(el);
      }
      columns.push(column);
    }
    return columns;
  }

  const checkDiagonals = (arr: string[][]) => {

    let diagonal = false;
    let firstDiagonal: string[] = [];
    for (let i = 0; i < arr.length; i++) {
      let el = arr[i][i];
      firstDiagonal.push(el);
    }
    diagonal = checkRows(firstDiagonal);

    if (diagonal) { return diagonal }

    let secondDiagonal: string[] = [];
    let arrLen = arr.length;
    for (let i = 0; i < arrLen; i++) {
      const el = arr[arrLen - 1 - i][i];
      secondDiagonal.push(el);
    }
    diagonal = checkRows(secondDiagonal);

    return diagonal;
  };

  const checkGame = () => {
    let hasWon = false;
    
    for (let i = 0; i < board.length; i++) {
      let row = board[i];

      let checkedRows = checkRows(row);

      let arrByColumns = getColumns(board);
      let checkedColumns = checkRows(arrByColumns[i]);

      let checkedDiagonals = checkDiagonals(board);

      let win = checkedRows || checkedColumns || checkedDiagonals ? true : false;

      if (win) {
        setWin(win);
      }
    }

    return hasWon;
  };

  const updateBoard = (row: number, col: number) => {
    let newArray = [...board];
    newArray[row][col] = player === true ? 'X' : 'O';
    setBoard(newArray);
  }

  const handleClick = (event: any, row: number, col: number) => {
    let value = event.target.textContent;
    if (value !== '') {
      return
    }
    updateBoard(row, col);
    if (checkGame()) {
      return
    }
    togglePlayer();
  };

  const handlePlayAgain = () => {
    setBoard(initialBoard);
    setWin(false);
  };

  return {
    board,
    handleClick,
    handlePlayAgain,
    win
  }
}

export default useTicTacToe