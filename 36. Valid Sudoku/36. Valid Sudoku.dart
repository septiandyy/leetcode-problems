class Solution {
  bool isValidSudoku(List<List<String>> board) {
    List<List<bool>> rows = List.generate(9, (_) => List.filled(9, false));
    List<List<bool>> cols = List.generate(9, (_) => List.filled(9, false));
    List<List<bool>> boxes = List.generate(9, (_) => List.filled(9, false));
    
    for (int i = 0; i < 9; i++) {
      for (int j = 0; j < 9; j++) {
        if (board[i][j] != '.') {
          int num = int.parse(board[i][j]) - 1;
          int boxIndex = (i ~/ 3) * 3 + j ~/ 3;
          
          if (rows[i][num] || cols[j][num] || boxes[boxIndex][num]) {
            return false;
          }
          
          rows[i][num] = cols[j][num] = boxes[boxIndex][num] = true;
        }
      }
    }
    
    return true;
  }
}