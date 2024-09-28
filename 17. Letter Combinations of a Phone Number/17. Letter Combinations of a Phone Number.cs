public class Solution {
    private static string[] letterMap = new string[] {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    
    public IList<string> LetterCombinations(string digits) {
        var result = new List<string>();
        if (string.IsNullOrEmpty(digits)) return result;
        
        Backtrack(digits, 0, new char[digits.Length], result);
        return result;
    }
    
    private void Backtrack(string digits, int index, char[] current, List<string> result) {
        if (index == digits.Length) {
            result.Add(new string(current));
            return;
        }
        
        string letters = letterMap[digits[index] - '0'];
        for (int i = 0; i < letters.Length; i++) {
            current[index] = letters[i];
            Backtrack(digits, index + 1, current, result);
        }
    }
}