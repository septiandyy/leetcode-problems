class Solution {
  List<List<int>> combinationSum2(List<int> candidates, int target) {
    candidates.sort();
    List<List<int>> result = [];
    backtrack(candidates, target, 0, [], result);
    return result;
  }
  
  void backtrack(List<int> candidates, int target, int index, List<int> current, List<List<int>> result) {
    if (target == 0) {
      result.add(List.from(current));
      return;
    }
    
    for (int i = index; i < candidates.length; i++) {
      if (i > index && candidates[i] == candidates[i-1]) continue;
      if (candidates[i] > target) break;
      current.add(candidates[i]);
      backtrack(candidates, target - candidates[i], i + 1, current, result);
      current.removeLast();
    }
  }
}