class Solution {
  void rotate(List<List<int>> matrix) {
    int n = matrix.length;
    
    // Transpose the matrix
    for (int i = 0; i < n; i++) {
      for (int j = i; j < n; j++) {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
      }
    }
    
    // Reverse each row
    for (int i = 0; i < n; i++) {
      matrix[i] = matrix[i].reversed.toList();
    }
  }
}