class Solution {
  void nextPermutation(List<int> nums) {
    int i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
      i--;
    }
    
    if (i >= 0) {
      int j = nums.length - 1;
      while (j >= 0 && nums[j] <= nums[i]) {
        j--;
      }
      _swap(nums, i, j);
    }
    
    _reverse(nums, i + 1, nums.length - 1);
  }
  
  void _swap(List<int> nums, int i, int j) {
    int temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  }
  
  void _reverse(List<int> nums, int start, int end) {
    while (start < end) {
      _swap(nums, start, end);
      start++;
      end--;
    }
  }
}