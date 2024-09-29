#include <vector>
#include <iostream>

class Solution {
public:
    int removeElement(std::vector<int>& nums, int val) {
        int k = 0;  // k will be the index where we place non-val elements
        
        for (int i = 0; i < nums.size(); i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }
        
        return k;
    }
};

// Test function
void runTests() {
    Solution solution;
    
    // Test case 1
    std::vector<int> nums1 = {3, 2, 2, 3};
    int val1 = 3;
    int result1 = solution.removeElement(nums1, val1);
    std::cout << "Test case 1 result: " << result1 << std::endl;
    for (int i = 0; i < result1; i++) {
        std::cout << nums1[i] << " ";
    }
    std::cout << std::endl;
    
    // Test case 2
    std::vector<int> nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
    int val2 = 2;
    int result2 = solution.removeElement(nums2, val2);
    std::cout << "Test case 2 result: " << result2 << std::endl;
    for (int i = 0; i < result2; i++) {
        std::cout << nums2[i] << " ";
    }
    std::cout << std::endl;
}

// The main function is assumed to be defined elsewhere in your code
// You can call runTests() from your existing main function like this:
// 
// int main(int argc, char *argv[]) {
//     runTests();
//     // ... rest of your main function ...
//     return 0;
// }