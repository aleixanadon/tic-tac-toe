let board = [
  ['x', '-', 'x'],
  ['-', 'x', '-'],
  ['x', 'o', 'x'],
];

var hasWon = false;

/**
 * @param {string[]} row 
 */
const checkRow = (row) => {
  return row.every((el) => el === row[0]);
};

/**
 * @param {string[][]} arr
 */
const getArrayByColumns = (arr) => {
  let arrayByColumns = [];
  for (let i = 0; i < arr.length; i++) {
    let newCol = [];
    for (let j = 0; j < arr.length; j++) {
      let el = arr[j][i];
      newCol.push(el);
    }
    arrayByColumns.push(newCol);
  }
  return arrayByColumns;
};

/**
 * @param {string[]} col 
 */
const checkColum = (col) => {
  return checkRow(col);
};

/**
 * @param {string[]} arr
 */
const getTopLeftDiagonal = (arr) => {
  let topLeftDiagonal = [];
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i][i];
    topLeftDiagonal.push(el);
  }
  return topLeftDiagonal;
};

/**
 * @param {string[]} arr
 */
const getTopRightDiagonal = (arr) => {
  let topRightDiagonal = [];
  let j = arr[0].length-1;
  for (let i = 0; i < arr.length; i++) {
    let el = arr[i][j];
    topRightDiagonal.push(el)
    j--;
  }
  return topRightDiagonal;
};

/** 
 * @param {string[][]} arr 
 */
const checkGame = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    
    let row = arr[i];
    let checkedRows = checkRow(row);

    let boardByColumns = getArrayByColumns(board);
    let column = boardByColumns[i];
    let checkedColumns = checkColum(column);

    checkedRows || checkedColumns ? hasWon = true : null
  }

  let topLeftDiagonal = getTopLeftDiagonal(board);
  let checkedTopLeftDiagonal = checkRow(topLeftDiagonal);

  let topRightDiagonal = getTopRightDiagonal(board);
  let checkedTopRightDiagonal = checkRow(topRightDiagonal);

  checkedTopLeftDiagonal || checkedTopRightDiagonal ? hasWon = true : null
}

checkGame(board);