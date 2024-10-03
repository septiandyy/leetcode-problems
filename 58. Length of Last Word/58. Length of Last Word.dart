class Solution {
  int lengthOfLastWord(String s) {
    int length = 0;
    int i = s.length - 1;
    
    // Skip trailing spaces
    while (i >= 0 && s[i] == ' ') {
      i--;
    }
    
    // Count characters of the last word
    while (i >= 0 && s[i] != ' ') {
      length++;
      i--;
    }
    
    return length;
  }
}