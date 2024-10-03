class Solution {
  bool canJump(List<int> nums) {
    int maxReach = 0;
    
    for (int i = 0; i <= maxReach && i < nums.length; i++) {
      maxReach = maxReach < i + nums[i] ? i + nums[i] : maxReach;
      if (maxReach >= nums.length - 1) {
        return true;
      }
    }
    
    return false;
  }
}