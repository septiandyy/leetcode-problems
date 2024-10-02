class Solution {
  int totalNQueens(int n) {
    List<int> board = List<int>.filled(n, 0);
    return solveNQueens(board, 0, n);
  }
  
  int solveNQueens(List<int> board, int row, int n) {
    if (row == n) {
      return 1;
    }
    
    int count = 0;
    for (int col = 0; col < n; col++) {
      if (isSafe(board, row, col)) {
        board[row] = col;
        count += solveNQueens(board, row + 1, n);
      }
    }
    
    return count;
  }
  
  bool isSafe(List<int> board, int row, int col) {
    for (int i = 0; i < row; i++) {
      if (board[i] == col || 
          board[i] - i == col - row || 
          board[i] + i == col + row) {
        return false;
      }
    }
    return true;
  }
}