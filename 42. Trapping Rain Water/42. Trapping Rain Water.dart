class Solution {
  int trap(List<int> height) {
    if (height.length <= 2) return 0;
    
    int left = 0;
    int right = height.length - 1;
    int leftMax = 0;
    int rightMax = 0;
    int water = 0;
    
    while (left < right) {
      if (height[left] < height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          water += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          water += rightMax - height[right];
        }
        right--;
      }
    }
    
    return water;
  }
}