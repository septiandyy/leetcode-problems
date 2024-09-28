class Solution {
    private static final String[] LETTER_MAP = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};
    
    public List<String> letterCombinations(String digits) {
        List<String> result = new ArrayList<>();
        if (digits.isEmpty()) return result;
        
        backtrack(digits, 0, new StringBuilder(), result);
        return result;
    }
    
    private void backtrack(String digits, int index, StringBuilder current, List<String> result) {
        if (index == digits.length()) {
            result.add(current.toString());
            return;
        }
        
        String letters = LETTER_MAP[digits.charAt(index) - '0'];
        for (char c : letters.toCharArray()) {
            current.append(c);
            backtrack(digits, index + 1, current, result);
            current.setLength(current.length() - 1);
        }
    }
}