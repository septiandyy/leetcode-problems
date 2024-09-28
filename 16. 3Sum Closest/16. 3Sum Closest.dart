class Solution {
  int threeSumClosest(List<int> nums, int target) {
    nums.sort();
    int closestSum = nums[0] + nums[1] + nums[2];
    
    for (int i = 0; i < nums.length - 2; i++) {
      int left = i + 1;
      int right = nums.length - 1;
      
      while (left < right) {
        int currentSum = nums[i] + nums[left] + nums[right];
        
        if ((target - currentSum).abs() < (target - closestSum).abs()) {
          closestSum = currentSum;
        }
        
        if (currentSum > target) {
          right--;
        } else if (currentSum < target) {
          left++;
        } else {
          return target;  // Found exact sum
        }
      }
    }
    
    return closestSum;
  }
}