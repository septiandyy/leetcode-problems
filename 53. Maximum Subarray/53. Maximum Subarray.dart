class Solution {
  int maxSubArray(List<int> nums) {
    int maxSum = nums[0];
    int currentSum = nums[0];
    
    for (int i = 1; i < nums.length; i++) {
      currentSum = (nums[i] > currentSum + nums[i]) ? nums[i] : currentSum + nums[i];
      maxSum = (maxSum > currentSum) ? maxSum : currentSum;
    }
    
    return maxSum;
  }
  
  // Divide and Conquer approach
  int maxSubArrayDivideConquer(List<int> nums) {
    return _maxSubArrayRecursive(nums, 0, nums.length - 1);
  }
  
  int _maxSubArrayRecursive(List<int> nums, int low, int high) {
    if (low == high)
      return nums[low];
    
    int mid = (low + high) ~/ 2;
    return [
      _maxSubArrayRecursive(nums, low, mid),
      _maxSubArrayRecursive(nums, mid + 1, high),
      _maxCrossingSum(nums, low, mid, high)
    ].reduce((a, b) => a > b ? a : b);
  }
  
  int _maxCrossingSum(List<int> nums, int low, int mid, int high) {
    int sum = 0;
    int leftSum = nums[mid];
    for (int i = mid; i >= low; i--) {
      sum += nums[i];
      if (sum > leftSum)
        leftSum = sum;
    }
    
    sum = 0;
    int rightSum = nums[mid + 1];
    for (int i = mid + 1; i <= high; i++) {
      sum += nums[i];
      if (sum > rightSum)
        rightSum = sum;
    }
    
    return [leftSum + rightSum, leftSum, rightSum].reduce((a, b) => a > b ? a : b);
  }
}