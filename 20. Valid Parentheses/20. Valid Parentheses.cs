public class Solution {
    public bool IsValid(string s) {
        Stack<char> stack = new Stack<char>();
        foreach (char c in s) {
            if (c == '(' || c == '{' || c == '[') {
                stack.Push(c);
            } else {
                if (stack.Count == 0) return false;
                if ((c == ')' && stack.Peek() != '(') ||
                    (c == '}' && stack.Peek() != '{') ||
                    (c == ']' && stack.Peek() != '[')) {
                    return false;
                }
                stack.Pop();
            }
        }
        return stack.Count == 0;
    }
}