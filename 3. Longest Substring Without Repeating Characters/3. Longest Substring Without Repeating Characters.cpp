#include <unordered_map>
using namespace std;

class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        unordered_map<char, int> map;
        int maxLen = 0, start = 0;
        
        for (int end = 0; end < s.size(); end++) {
            if (map.find(s[end]) != map.end()) {
                start = max(map[s[end]] + 1, start);
            }
            map[s[end]] = end;
            maxLen = max(maxLen, end - start + 1);
        }
        
        return maxLen;
    }
};