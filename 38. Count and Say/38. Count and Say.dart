class Solution {
  String countAndSay(int n) {
    if (n == 1) return "1";
    
    String prev = countAndSay(n - 1);
    StringBuffer result = StringBuffer();
    int count = 1;
    
    for (int i = 1; i <= prev.length; i++) {
      if (i < prev.length && prev[i] == prev[i-1]) {
        count++;
      } else {
        result.write('$count${prev[i-1]}');
        count = 1;
      }
    }
    
    return result.toString();
  }
}