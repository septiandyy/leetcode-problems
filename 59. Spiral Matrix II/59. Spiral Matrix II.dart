class Solution {
  List<List<int>> generateMatrix(int n) {
    List<List<int>> matrix = List.generate(n, (_) => List<int>.filled(n, 0));
    int left = 0, right = n - 1, top = 0, bottom = n - 1;
    int num = 1;
    
    while (left <= right && top <= bottom) {
      for (int i = left; i <= right; i++)
        matrix[top][i] = num++;
      top++;
      
      for (int i = top; i <= bottom; i++)
        matrix[i][right] = num++;
      right--;
      
      if (top <= bottom) {
        for (int i = right; i >= left; i--)
          matrix[bottom][i] = num++;
        bottom--;
      }
      
      if (left <= right) {
        for (int i = bottom; i >= top; i--)
          matrix[i][left] = num++;
        left++;
      }
    }
    
    return matrix;
  }
}