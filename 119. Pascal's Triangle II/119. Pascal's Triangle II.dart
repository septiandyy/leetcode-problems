class Solution {
  List<int> getRow(int rowIndex) {
    List<int> row = List<int>.filled(rowIndex + 1, 1);
    
    for (int i = 1; i <= rowIndex; i++) {
      int prev = row[0];
      for (int j = 1; j < i; j++) {
        int temp = row[j];
        row[j] = ((prev.toDouble() * (rowIndex - j + 1)) ~/ j).toInt();
        prev = temp;
      }
      row[i] = 1;
    }
    
    return row;
  }
}