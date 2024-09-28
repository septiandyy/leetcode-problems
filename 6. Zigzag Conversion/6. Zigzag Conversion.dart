class Solution {
  String convert(String s, int numRows) {
    if (numRows == 1) return s;
    
    List<StringBuffer> rows = List.generate(
      numRows.clamp(0, s.length),
      (_) => StringBuffer(),
    );
    
    int curRow = 0;
    bool goingDown = false;
    
    for (var c in s.runes) {
      rows[curRow].writeCharCode(c);
      if (curRow == 0 || curRow == numRows - 1) goingDown = !goingDown;
      curRow += goingDown ? 1 : -1;
    }
    
    return rows.map((sb) => sb.toString()).join();
  }
}