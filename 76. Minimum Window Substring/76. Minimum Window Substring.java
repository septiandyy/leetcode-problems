class Solution {
    public String minWindow(String s, String t) {
        int[] need = new int[128];
        int[] have = new int[128];
        int needCount = 0, haveCount = 0;
        int left = 0, start = 0, minLen = s.length() + 1;

        for (char c : t.toCharArray()) {
            if (need[c]++ == 0) needCount++;
        }

        for (int right = 0; right < s.length(); right++) {
            if (++have[s.charAt(right)] == need[s.charAt(right)]) haveCount++;

            while (haveCount == needCount) {
                if (right - left + 1 < minLen) {
                    start = left;
                    minLen = right - left + 1;
                }
                if (--have[s.charAt(left)] < need[s.charAt(left)]) haveCount--;
                left++;
            }
        }

        return minLen > s.length() ? "" : s.substring(start, start + minLen);
    }
}