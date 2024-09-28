#include <vector>
#include <algorithm> // for the min function

class Solution {
public:
    int maxArea(std::vector<int>& height) {
        int left = 0;
        int right = height.size() - 1;
        int max_area = 0;
        
        while (left < right) {
            // Calculate the area with the current left and right pointers
            int current_area = std::min(height[left], height[right]) * (right - left);
            // Update max_area if current_area is larger
            max_area = std::max(max_area, current_area);
            
            // Move the pointer pointing to the shorter line
            if (height[left] < height[right]) {
                left++;
            } else {
                right--;
            }
        }
        
        return max_area;
    }
};