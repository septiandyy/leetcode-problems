class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.size(); i++) {
            currentSum = max(nums[i], currentSum + nums[i]);
            maxSum = max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    // Divide and Conquer approach
    int maxSubArrayDivideConquer(vector<int>& nums) {
        return maxSubArrayRecursive(nums, 0, nums.size() - 1);
    }
    
private:
    int maxSubArrayRecursive(vector<int>& nums, int low, int high) {
        if (low == high)
            return nums[low];
        
        int mid = (low + high) / 2;
        return max({maxSubArrayRecursive(nums, low, mid),
                    maxSubArrayRecursive(nums, mid + 1, high),
                    maxCrossingSum(nums, low, mid, high)});
    }
    
    int maxCrossingSum(vector<int>& nums, int low, int mid, int high) {
        int sum = 0;
        int leftSum = INT_MIN;
        for (int i = mid; i >= low; i--) {
            sum += nums[i];
            if (sum > leftSum)
                leftSum = sum;
        }
        
        sum = 0;
        int rightSum = INT_MIN;
        for (int i = mid + 1; i <= high; i++) {
            sum += nums[i];
            if (sum > rightSum)
                rightSum = sum;
        }
        
        return max({leftSum + rightSum, leftSum, rightSum});
    }
};