class Solution {
public:
    string getPermutation(int n, int k) {
        vector<int> factorial(10, 1);
        vector<int> nums(n);
        string result;
        
        for (int i = 1; i <= n; i++) {
            factorial[i] = factorial[i-1] * i;
            nums[i-1] = i;
        }
        
        k--;  // Convert to 0-based index
        
        for (int i = 0; i < n; i++) {
            int index = k / factorial[n-1-i];
            result += to_string(nums[index]);
            nums.erase(nums.begin() + index);
            k %= factorial[n-1-i];
        }
        
        return result;
    }
};