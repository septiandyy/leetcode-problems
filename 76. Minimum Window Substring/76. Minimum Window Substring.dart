class Solution {
  String minWindow(String s, String t) {
    List<int> need = List.filled(128, 0);
    List<int> have = List.filled(128, 0);
    int needCount = 0, haveCount = 0;
    int left = 0, start = 0, minLen = s.length + 1;

    for (int i = 0; i < t.length; i++) {
      if (need[t.codeUnitAt(i)]++ == 0) needCount++;
    }

    for (int right = 0; right < s.length; right++) {
      if (++have[s.codeUnitAt(right)] == need[s.codeUnitAt(right)]) haveCount++;

      while (haveCount == needCount) {
        if (right - left + 1 < minLen) {
          start = left;
          minLen = right - left + 1;
        }
        if (--have[s.codeUnitAt(left)] < need[s.codeUnitAt(left)]) haveCount--;
        left++;
      }
    }

    return minLen > s.length ? "" : s.substring(start, start + minLen);
  }
}