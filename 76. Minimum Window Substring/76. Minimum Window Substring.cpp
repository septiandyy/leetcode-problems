class Solution {
public:
    string minWindow(string s, string t) {
        vector<int> need(128, 0), have(128, 0);
        int needCount = 0, haveCount = 0;
        int left = 0, start = 0, minLen = s.length() + 1;

        for (char c : t) {
            if (need[c]++ == 0) needCount++;
        }

        for (int right = 0; right < s.length(); right++) {
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

        return minLen > s.length() ? "" : s.substr(start, minLen);
    }
};