class Solution {
    public int maxSubArray(int[] nums) {
        int maxSum = nums[0];
        int currentSum = nums[0];
        
        for (int i = 1; i < nums.length; i++) {
            currentSum = Math.max(nums[i], currentSum + nums[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        
        return maxSum;
    }
    
    // Divide and Conquer approach
    public int maxSubArrayDivideConquer(int[] nums) {
        return maxSubArrayRecursive(nums, 0, nums.length - 1);
    }
    
    private int maxSubArrayRecursive(int[] nums, int low, int high) {
        if (low == high)
            return nums[low];
        
        int mid = (low + high) / 2;
        return Math.max(Math.max(maxSubArrayRecursive(nums, low, mid),
                                 maxSubArrayRecursive(nums, mid + 1, high)),
                        maxCrossingSum(nums, low, mid, high));
    }
    
    private int maxCrossingSum(int[] nums, int low, int mid, int high) {
        int sum = 0;
        int leftSum = Integer.MIN_VALUE;
        for (int i = mid; i >= low; i--) {
            sum += nums[i];
            if (sum > leftSum)
                leftSum = sum;
        }
        
        sum = 0;
        int rightSum = Integer.MIN_VALUE;
        for (int i = mid + 1; i <= high; i++) {
            sum += nums[i];
            if (sum > rightSum)
                rightSum = sum;
        }
        
        return Math.max(leftSum + rightSum, Math.max(leftSum, rightSum));
    }
}