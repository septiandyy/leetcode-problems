class Solution {
  bool exist(List<List<String>> board, String word) {
    for (int i = 0; i < board.length; i++) {
      for (int j = 0; j < board[0].length; j++) {
        if (dfs(board, i, j, word, 0)) return true;
      }
    }
    return false;
  }
  
  bool dfs(List<List<String>> board, int i, int j, String word, int k) {
    if (k == word.length) return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] != word[k]) return false;
    
    String temp = board[i][j];
    board[i][j] = '#';
    bool found = dfs(board, i+1, j, word, k+1) ||
                 dfs(board, i-1, j, word, k+1) ||
                 dfs(board, i, j+1, word, k+1) ||
                 dfs(board, i, j-1, word, k+1);
    board[i][j] = temp;
    return found;
  }
}