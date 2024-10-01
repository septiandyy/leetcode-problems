class Solution {
  List<List<String>> solveNQueens(int n) {
    List<List<String>> result = [];
    List<String> board = List.generate(n, (_) => '.' * n);
    solve(board, 0, result);
    return result;
  }
  
  void solve(List<String> board, int col, List<List<String>> result) {
    if (col == board.length) {
      result.add(List.from(board));
      return;
    }
    
    for (int row = 0; row < board.length; row++) {
      if (isSafe(board, row, col)) {
        board[row] = board[row].replaceRange(col, col + 1, 'Q');
        solve(board, col + 1, result);
        board[row] = board[row].replaceRange(col, col + 1, '.');
      }
    }
  }
  
  bool isSafe(List<String> board, int row, int col) {
    for (int i = 0; i < col; i++)
      if (board[row][i] == 'Q') return false;
    
    for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
      if (board[i][j] == 'Q') return false;
    
    for (int i = row, j = col; j >= 0 && i < board.length; i++, j--)
      if (board[i][j] == 'Q') return false;
    
    return true;
  }
}