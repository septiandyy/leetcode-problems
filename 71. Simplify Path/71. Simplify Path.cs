public class Solution {
    public string SimplifyPath(string path) {
        var stack = new List<string>();
        var parts = path.Split('/');
        
        foreach (var part in parts) {
            if (part == "." || string.IsNullOrEmpty(part)) continue;
            if (part == "..") {
                if (stack.Count > 0) stack.RemoveAt(stack.Count - 1);
            } else {
                stack.Add(part);
            }
        }
        
        return "/" + string.Join("/", stack);
    }
}