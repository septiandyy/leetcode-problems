public class Solution {
    public int MaxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.Length; i++) {
            currentSum = Math.Max(nums[i], currentSum + nums[i]);
            maxSum = Math.Max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    // Divide and Conquer approach
    public int MaxSubArrayDivideConquer(int[] nums) {
        return MaxSubArrayRecursive(nums, 0, nums.Length - 1);
    }
    
    private int MaxSubArrayRecursive(int[] nums, int low, int high) {
        if (low == high)
            return nums[low];
        
        int mid = (low + high) / 2;
        return Math.Max(Math.Max(MaxSubArrayRecursive(nums, low, mid),
                                 MaxSubArrayRecursive(nums, mid + 1, high)),
                        MaxCrossingSum(nums, low, mid, high));
    }
    
    private int MaxCrossingSum(int[] nums, int low, int mid, int high) {
        int sum = 0;
        int leftSum = int.MinValue;
        for (int i = mid; i >= low; i--) {
            sum += nums[i];
            if (sum > leftSum)
                leftSum = sum;
        }
        
        sum = 0;
        int rightSum = int.MinValue;
        for (int i = mid + 1; i <= high; i++) {
            sum += nums[i];
            if (sum > rightSum)
                rightSum = sum;
        }
        
        return Math.Max(leftSum + rightSum, Math.Max(leftSum, rightSum));
    }
}