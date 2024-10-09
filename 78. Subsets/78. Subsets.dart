class Solution {
  List<List<int>> subsets(List<int> nums) {
    List<List<int>> result = [];
    backtrack(nums, 0, [], result);
    return result;
  }
  
  void backtrack(List<int> nums, int start, List<int> current, List<List<int>> result) {
    result.add(List.from(current));
    
    for (int i = start; i < nums.length; i++) {
      current.add(nums[i]);
      backtrack(nums, i + 1, current, result);
      current.removeLast();
    }
  }
}