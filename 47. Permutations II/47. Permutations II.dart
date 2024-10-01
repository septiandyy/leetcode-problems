class Solution {
  List<List<int>> permuteUnique(List<int> nums) {
    List<List<int>> result = [];
    nums.sort();
    _backtrack(nums, 0, result);
    return result;
  }
  
  void _backtrack(List<int> nums, int start, List<List<int>> result) {
    if (start == nums.length) {
      result.add(List.from(nums));
      return;
    }
    
    Set<int> used = {};
    for (int i = start; i < nums.length; i++) {
      if (used.contains(nums[i]) || (i > start && nums[i] == nums[start])) continue;
      used.add(nums[i]);
      _swap(nums, start, i);
      _backtrack(nums, start + 1, result);
      _swap(nums, start, i);
    }
  }
  
  void _swap(List<int> nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
}