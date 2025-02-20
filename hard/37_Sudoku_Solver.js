var solveSudoku = function (board) {
  function isValid(board, row, col, num) {
    for (let i = 0; i < 9; i++) {
      if (board[row][i] == num || board[i][col] == num) return false;
    }

    let startRow = Math.floor(row / 3) * 3;
    let startCol = Math.floor(col / 3) * 3;

    for (let i = startRow; i < startRow + 3; i++) {
      for (let j = startCol; j < startCol + 3; j++) {
        if (board[i][j] == num) return false;
      }
    }

    return true;
  }

  function solve(board) {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        if (board[i][j] == ".") {
          for (let num = 1; num <= 9; num++) {
            if (isValid(board, i, j, num.toString())) {
              board[i][j] = num.toString();
              if (solve(board)) return true;
              board[i][j] = ".";
            }
          }
          return false;
        }
      }
    }
    return true;
  }

  solve(board);
};
