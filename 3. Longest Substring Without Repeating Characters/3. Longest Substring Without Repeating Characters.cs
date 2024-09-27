using System;
using System.Collections.Generic;

public class Solution {
    public int LengthOfLongestSubstring(string s) {
        Dictionary<char, int> map = new Dictionary<char, int>();
        int maxLen = 0, start = 0;
        
        for (int end = 0; end < s.Length; end++) {
            if (map.ContainsKey(s[end])) {
                start = Math.Max(map[s[end]] + 1, start);
            }
            map[s[end]] = end;
            maxLen = Math.Max(maxLen, end - start + 1);
        }
        
        return maxLen;
    }
    
    // Uncomment the main method if testing locally. Remove this when submitting to avoid multiple entry points.
    /*
    public static void Main(string[] args) {
        string s = "abcabcbb";
        Solution solution = new Solution();
        Console.WriteLine("Length of longest substring: " + solution.LengthOfLongestSubstring(s));
    }
    */
}