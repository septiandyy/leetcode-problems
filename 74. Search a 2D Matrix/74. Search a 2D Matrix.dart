class Solution {
  bool searchMatrix(List<List<int>> matrix, int target) {
    if (matrix.isEmpty || matrix[0].isEmpty) {
      return false;
    }
    
    int m = matrix.length;
    int n = matrix[0].length;
    int left = 0;
    int right = m * n - 1;
    
    while (left <= right) {
      int mid = left + (right - left) ~/ 2;
      int midValue = matrix[mid ~/ n][mid % n];
      
      if (midValue == target) {
        return true;
      } else if (midValue < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    
    return false;
  }
}