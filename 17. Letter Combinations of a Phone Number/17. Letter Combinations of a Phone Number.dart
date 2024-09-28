class Solution {
  static const List<String> letterMap = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  
  List<String> letterCombinations(String digits) {
    List<String> result = [];
    if (digits.isEmpty) return result;
    
    void backtrack(int index, List<String> current) {
      if (index == digits.length) {
        result.add(current.join());
        return;
      }
      
      String letters = letterMap[int.parse(digits[index])];
      for (int i = 0; i < letters.length; i++) {
        current.add(letters[i]);
        backtrack(index + 1, current);
        current.removeLast();
      }
    }
    
    backtrack(0, []);
    return result;
  }
}