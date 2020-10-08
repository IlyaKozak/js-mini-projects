function generateGameBoard(board, boardSize) {
  let count = 1;
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i] === undefined) board.push([]);
      if (i === boardSize - 1 && j === boardSize - 1) {
        board[i][j] = 0;
      } else board[i][j] = count;
      count++;
    }
  }
}

function getNextdoorTiles([x, y], boardSize) {
  return [
    y === 0 ? null : [x, y - 1],
    x === boardSize - 1 ? null : [x + 1, y],
    y === boardSize - 1 ? null : [x, y + 1],
    x === 0 ? null : [x - 1, y]
  ].filter(box => box !== null);
}

function isSolved(board) {
  const size = board.length;
  let count = 1;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === count) count++;
      else if (board[size - 1][size - 1] === 0) count++;
      else return false;
    }
  }
  return true;
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function clearTimeouts(arr) {
  for (let i = 0; i < arr.length; i++) {
    clearTimeout(arr[i]);
  }
  arr.length = 0;
}
