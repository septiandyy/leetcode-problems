class Solution {
  int myAtoi(String s) {
    int i = 0, sign = 1, result = 0;
    
    // Step 1: Ignore leading whitespace
    while (i < s.length && s[i] == ' ') i++;
    
    // Step 2: Check for sign
    if (i < s.length && (s[i] == '-' || s[i] == '+')) {
      sign = (s[i] == '-') ? -1 : 1;
      i++;
    }
    
    // Step 3: Convert digits
    while (i < s.length && s[i].codeUnitAt(0) >= '0'.codeUnitAt(0) && s[i].codeUnitAt(0) <= '9'.codeUnitAt(0)) {
      int digit = s[i].codeUnitAt(0) - '0'.codeUnitAt(0);
      // Check for overflow
      if (result > (2147483647 ~/ 10) || (result == (2147483647 ~/ 10) && digit > 2147483647 % 10)) {
        return (sign == 1) ? 2147483647 : -2147483648;
      }
      result = result * 10 + digit;
      i++;
    }
    
    return sign * result;
  }
}