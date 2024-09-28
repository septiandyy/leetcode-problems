class Solution {
  String longestPalindrome(String s) {
    int n = s.length;
    if (n < 2) return s;

    int start = 0, maxLength = 1;

    for (int i = 0; i < n; i++) {
      // Odd length palindromes
      int left = i, right = i;
      while (left >= 0 && right < n && s[left] == s[right]) {
        if (right - left + 1 > maxLength) {
          start = left;
          maxLength = right - left + 1;
        }
        left--;
        right++;
      }

      // Even length palindromes
      left = i;
      right = i + 1;
      while (left >= 0 && right < n && s[left] == s[right]) {
        if (right - left + 1 > maxLength) {
          start = left;
          maxLength = right - left + 1;
        }
        left--;
        right++;
      }
    }

    return s.substring(start, start + maxLength);
  }
}