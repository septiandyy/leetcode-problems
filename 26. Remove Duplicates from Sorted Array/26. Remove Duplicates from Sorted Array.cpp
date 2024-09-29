#include <vector>
using namespace std;

class Solution {
public:
    int removeDuplicates(vector<int>& nums) {
        if (nums.empty()) {
            return 0;
        }
        
        int k = 1;
        for (int i = 1; i < nums.size(); i++) {
            if (nums[i] != nums[k - 1]) {
                nums[k] = nums[i];
                k++;
            }
        }
        
        return k;
    }
};

// The following is typically not needed for submission, but included for completeness:
// 
// #include <iostream>
// 
// int main() {
//     Solution solution;
//     vector<int> nums = {0, 0, 1, 1, 1, 2, 2, 3, 3, 4};
//     int k = solution.removeDuplicates(nums);
//     
//     cout << "k = " << k << endl;
//     cout << "nums = [";
//     for (int i = 0; i < nums.size(); i++) {
//         cout << nums[i];
//         if (i < nums.size() - 1) cout << ", ";
//     }
//     cout << "]" << endl;
//     
//     return 0;
// }