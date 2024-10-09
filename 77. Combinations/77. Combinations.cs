public class Solution {
    public IList<IList<int>> Combine(int n, int k) {
        var result = new List<IList<int>>();
        Backtrack(n, k, 1, new List<int>(), result);
        return result;
    }
    
    private void Backtrack(int n, int k, int start, List<int> current, List<IList<int>> result) {
        if (current.Count == k) {
            result.Add(new List<int>(current));
            return;
        }
        
        for (int i = start; i <= n; i++) {
            current.Add(i);
            Backtrack(n, k, i + 1, current, result);
            current.RemoveAt(current.Count - 1);
        }
    }
}