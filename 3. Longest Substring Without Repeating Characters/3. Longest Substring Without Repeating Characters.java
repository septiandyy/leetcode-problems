import java.util.HashMap;

public class Solution {
    public int lengthOfLongestSubstring(String s) {
        HashMap<Character, Integer> map = new HashMap<>();
        int maxLen = 0, start = 0;
        
        for (int end = 0; end < s.length(); end++) {
            if (map.containsKey(s.charAt(end))) {
                start = Math.max(map.get(s.charAt(end)) + 1, start);
            }
            map.put(s.charAt(end), end);
            maxLen = Math.max(maxLen, end - start + 1);
        }
        
        return maxLen;
    }

    public static void main(String[] args) {
        String s = "abcabcbb";
        Solution solution = new Solution();
        System.out.println("Length of longest substring: " + solution.lengthOfLongestSubstring(s));
    }
}