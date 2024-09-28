class Solution {
  bool isValid(String s) {
    List<String> stack = [];
    for (int i = 0; i < s.length; i++) {
      if (s[i] == '(' || s[i] == '{' || s[i] == '[') {
        stack.add(s[i]);
      } else {
        if (stack.isEmpty) return false;
        if ((s[i] == ')' && stack.last != '(') ||
            (s[i] == '}' && stack.last != '{') ||
            (s[i] == ']' && stack.last != '[')) {
          return false;
        }
        stack.removeLast();
      }
    }
    return stack.isEmpty;
  }
}