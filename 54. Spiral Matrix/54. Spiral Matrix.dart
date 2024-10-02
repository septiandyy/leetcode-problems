class Solution {
  List<int> spiralOrder(List<List<int>> matrix) {
    List<int> result = [];
    if (matrix.isEmpty || matrix[0].isEmpty) return result;
    
    int m = matrix.length, n = matrix[0].length;
    int left = 0, right = n - 1, top = 0, bottom = m - 1;
    
    while (left <= right && top <= bottom) {
      for (int i = left; i <= right; i++)
        result.add(matrix[top][i]);
      top++;
      
      for (int i = top; i <= bottom; i++)
        result.add(matrix[i][right]);
      right--;
      
      if (top <= bottom) {
        for (int i = right; i >= left; i--)
          result.add(matrix[bottom][i]);
        bottom--;
      }
      
      if (left <= right) {
        for (int i = bottom; i >= top; i--)
          result.add(matrix[i][left]);
        left++;
      }
    }
    
    return result;
  }
}