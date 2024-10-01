class Solution {
  List<List<int>> permute(List<int> nums) {
    List<List<int>> result = [];
    _backtrack(nums, 0, result);
    return result;
  }
  
  void _backtrack(List<int> nums, int start, List<List<int>> result) {
    if (start == nums.length) {
      result.add(List.from(nums));
      return;
    }
    
    for (int i = start; i < nums.length; i++) {
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