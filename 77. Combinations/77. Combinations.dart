class Solution {
  List<List<int>> combine(int n, int k) {
    List<List<int>> result = [];
    backtrack(n, k, 1, [], result);
    return result;
  }
  
  void backtrack(int n, int k, int start, List<int> current, List<List<int>> result) {
    if (current.length == k) {
      result.add(List.from(current));
      return;
    }
    
    for (int i = start; i <= n; i++) {
      current.add(i);
      backtrack(n, k, i + 1, current, result);
      current.removeLast();
    }
  }
}