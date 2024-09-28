class Solution {
  String intToRoman(int num) {
    List<int> values = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    List<String> symbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
    StringBuffer result = StringBuffer();
    
    for (int i = 0; i < values.length && num > 0; i++) {
      while (num >= values[i]) {
        result.write(symbols[i]);
        num -= values[i];
      }
    }
    
    return result.toString();
  }
}