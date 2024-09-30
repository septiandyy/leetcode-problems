public class Solution {
    public string CountAndSay(int n) {
        if (n == 1) return "1";
        
        string prev = CountAndSay(n - 1);
        StringBuilder result = new StringBuilder();
        int count = 1;
        
        for (int i = 1; i <= prev.Length; i++) {
            if (i < prev.Length && prev[i] == prev[i-1]) {
                count++;
            } else {
                result.Append(count.ToString() + prev[i-1]);
                count = 1;
            }
        }
        
        return result.ToString();
    }
}