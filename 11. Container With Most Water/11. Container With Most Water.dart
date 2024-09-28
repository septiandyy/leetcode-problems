class Solution {
    int maxArea(List<int> height) {
      int left = 0, right = height.length - 1;
      int maxWater = 0;
      
      while (left < right) {
        int width = right - left;
        int h = height[left] < height[right] ? height[left] : height[right];
        int area = width * h;
        
        maxWater = maxWater > area ? maxWater : area;
        
        if (height[left] < height[right]) {
          left++;
        } else {
          right--;
        }
      }
      
      return maxWater;
    }
  }