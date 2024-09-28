public class Solution {
    public int MaxArea(int[] height) {
        int left = 0, right = height.Length - 1;
        int maxWater = 0;
        
        while (left < right) {
            int width = right - left;
            int h = Math.Min(height[left], height[right]);
            int area = width * h;
            
            maxWater = Math.Max(maxWater, area);
            
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return maxWater;
    }
}