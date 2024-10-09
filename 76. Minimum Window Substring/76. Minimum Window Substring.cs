public class Solution {
    public string MinWindow(string s, string t) {
        int[] need = new int[128];
        int[] have = new int[128];
        int needCount = 0, haveCount = 0;
        int left = 0, start = 0, minLen = s.Length + 1;

        foreach (char c in t) {
            if (need[c]++ == 0) needCount++;
        }

        for (int right = 0; right < s.Length; right++) {
            if (++have[s[right]] == need[s[right]]) haveCount++;

            while (haveCount == needCount) {
                if (right - left + 1 < minLen) {
                    start = left;
                    minLen = right - left + 1;
                }
                if (--have[s[left]] < need[s[left]]) haveCount--;
                left++;
            }
        }

        return minLen > s.Length ? "" : s.Substring(start, minLen);
    }
}