class Solution {
    public int maxArea(int[] height) {
        int left = 0;
        int right = height.length - 1;
        int maxWater = 0;

        while (left < right) {
            int width = right - left;
            int containerHeight = Math.min(height[left], height[right]);
            int water = width * containerHeight;
            
            maxWater = Math.max(maxWater, water);

            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }

        return maxWater;
    }
}

// Example usage and tests
class Main {
    public static void main(String[] args) {
        Solution solution = new Solution();
        
        // Test case 1
        int[] height1 = {1,8,6,2,5,4,8,3,7};
        System.out.println("Test case 1: " + solution.maxArea(height1)); // Expected: 49
        
        // Test case 2
        int[] height2 = {1,1};
        System.out.println("Test case 2: " + solution.maxArea(height2)); // Expected: 1
        
        // Additional test case
        int[] height3 = {4,3,2,1,4};
        System.out.println("Additional test: " + solution.maxArea(height3)); // Expected: 16
    }
}