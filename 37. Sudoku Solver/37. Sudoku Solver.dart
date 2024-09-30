class Solution {
  void solveSudoku(List<List<String>> board) {
    solve(board);
  }
  
  bool isValid(List<List<String>> board, int row, int col, String num) {
    for (int x = 0; x < 9; x++) {
      if (board[row][x] == num) return false;
      if (board[x][col] == num) return false;
      if (board[3 * (row ~/ 3) + x ~/ 3][3 * (col ~/ 3) + x % 3] == num) return false;
    }
    return true;
  }
  
  bool solve(List<List<String>> board) {
    for (int row = 0; row < 9; row++) {
      for (int col = 0; col < 9; col++) {
        if (board[row][col] == '.') {
          for (String num in ['1', '2', '3', '4', '5', '6', '7', '8', '9']) {
            if (isValid(board, row, col, num)) {
              board[row][col] = num;
              if (solve(board)) return true;
              board[row][col] = '.';
            }
          }
          return false;
        }
      }
    }
    return true;
  }
}