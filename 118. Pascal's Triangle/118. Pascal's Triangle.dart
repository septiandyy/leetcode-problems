class Solution {
  List<List<int>> generate(int numRows) {
    List<List<int>> result = [];
    
    for (int i = 0; i < numRows; i++) {
      List<int> row = List<int>.filled(i + 1, 1);
      
      for (int j = 1; j < i; j++) {
        row[j] = result[i-1][j-1] + result[i-1][j];
      }
      
      result.add(row);
    }
    
    return result;
  }
}