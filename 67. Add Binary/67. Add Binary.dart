class Solution {
  String addBinary(String a, String b) {
    StringBuffer result = StringBuffer();
    int carry = 0;
    int i = a.length - 1, j = b.length - 1;
    
    while (i >= 0 || j >= 0 || carry > 0) {
      int sum = carry;
      if (i >= 0) sum += int.parse(a[i--]);
      if (j >= 0) sum += int.parse(b[j--]);
      result.write((sum % 2).toString());
      carry = sum ~/ 2;
    }
    
    return result.toString().split('').reversed.join();
  }
}