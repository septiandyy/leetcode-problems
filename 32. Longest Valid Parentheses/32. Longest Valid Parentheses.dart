class Solution {
  int longestValidParentheses(String s) {
    int maxLen = 0;
    List<int> stack = [-1];

    for (int i = 0; i < s.length; i++) {
      if (s[i] == '(') {
        stack.add(i);
      } else {
        stack.removeLast();
        if (stack.isEmpty) {
          stack.add(i);
        } else {
          maxLen = maxLen > i - stack.last ? maxLen : i - stack.last;
        }
      }
    }

    return maxLen;
  }
}