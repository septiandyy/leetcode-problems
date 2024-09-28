class Solution {
private:
    vector<string> letterMap = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    
    void backtrack(const string& digits, int index, string& current, vector<string>& result) {
        if (index == digits.length()) {
            result.push_back(current);
            return;
        }
        
        string letters = letterMap[digits[index] - '0'];
        for (char c : letters) {
            current.push_back(c);
            backtrack(digits, index + 1, current, result);
            current.pop_back();
        }
    }
    
public:
    vector<string> letterCombinations(string digits) {
        vector<string> result;
        if (digits.empty()) return result;
        
        string current;
        backtrack(digits, 0, current, result);
        return result;
    }
};