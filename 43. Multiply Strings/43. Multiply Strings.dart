class Solution {
  String multiply(String num1, String num2) {
    int n1 = num1.length, n2 = num2.length;
    List<int> res = List.filled(n1 + n2, 0);
    
    for (int i = n1 - 1; i >= 0; i--) {
      for (int j = n2 - 1; j >= 0; j--) {
        int mul = (num1.codeUnitAt(i) - 48) * (num2.codeUnitAt(j) - 48);
        int sum = res[i + j + 1] + mul;
        
        res[i + j + 1] = sum % 10;
        res[i + j] += sum ~/ 10;
      }
    }
    
    StringBuffer sb = StringBuffer();
    bool leadingZero = true;
    
    for (int digit in res) {
      if (digit != 0 || !leadingZero) {
        sb.write(digit);
        leadingZero = false;
      }
    }
    
    return sb.isEmpty ? "0" : sb.toString();
  }
}