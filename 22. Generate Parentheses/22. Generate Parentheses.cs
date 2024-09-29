public class Solution {
    public IList<string> GenerateParenthesis(int n) {
        var result = new List<string>();
        Backtrack(result, new char[2 * n], 0, 0, n);
        return result;
    }
    
    private void Backtrack(List<string> result, char[] current, int open, int close, int max) {
        if (current.Length == open + close) {
            result.Add(new string(current));
            return;
        }
        
        if (open < max) {
            current[open + close] = '(';
            Backtrack(result, current, open + 1, close, max);
        }
        if (close < open) {
            current[open + close] = ')';
            Backtrack(result, current, open, close + 1, max);
        }
    }
}