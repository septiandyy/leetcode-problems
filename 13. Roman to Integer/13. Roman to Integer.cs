public class Solution {
    public int RomanToInt(string s) {
        Dictionary<char, int> values = new Dictionary<char, int> {
            {'I', 1},
            {'V', 5},
            {'X', 10},
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };
        
        int result = 0;
        int prev = 0;
        
        for (int i = s.Length - 1; i >= 0; i--) {
            int current = values[s[i]];
            if (current >= prev) {
                result += current;
            } else {
                result -= current;
            }
            prev = current;
        }
        
        return result;
    }
}