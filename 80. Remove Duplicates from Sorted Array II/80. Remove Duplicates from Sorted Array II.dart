class Solution {
  int removeDuplicates(List<int> nums) {
    if (nums.length <= 2) return nums.length;
    
    int k = 2;  // Start from the third element
    
    for (int i = 2; i < nums.length; i++) {
      if (nums[i] != nums[k-2]) {
        nums[k] = nums[i];
        k++;
      }
    }
    
    return k;
  }
}