class Solution {
  int lengthOfLongestSubstring(String s) {
    Map<String, int> map = {};
    int maxLen = 0, start = 0;

    for (int end = 0; end < s.length; end++) {
      String current = s[end];
      if (map.containsKey(current)) {
        start = (map[current]! + 1 > start) ? map[current]! + 1 : start;
      }
      map[current] = end;
      maxLen = (end - start + 1 > maxLen) ? end - start + 1 : maxLen;
    }

    return maxLen;
  }
}