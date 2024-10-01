class Solution {
  int jump(List<int> nums) {
    if (nums.length <= 1) return 0;
    
    int jumps = 0;
    int currentMax = 0;
    int nextMax = 0;
    
    for (int i = 0; i < nums.length - 1; i++) {
      nextMax = nextMax < i + nums[i] ? i + nums[i] : nextMax;
      
      if (i == currentMax) {
        jumps++;
        currentMax = nextMax;
        
        if (currentMax >= nums.length - 1) {
          break;
        }
      }
    }
    
    return jumps;
  }
}