function maxSubArray(nums: number[]): number {
    let maxSum: number = nums[0];
    let currentSum: number = nums[0];
    
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    
    return maxSum;
}

// Divide and Conquer approach
function maxSubArrayDivideConquer(nums: number[]): number {
    function maxSubArrayRecursive(nums: number[], low: number, high: number): number {
        if (low === high) {
            return nums[low];
        }
        
        const mid = Math.floor((low + high) / 2);
        return Math.max(
            maxSubArrayRecursive(nums, low, mid),
            maxSubArrayRecursive(nums, mid + 1, high),
            maxCrossingSum(nums, low, mid, high)
        );
    }
    
    function maxCrossingSum(nums: number[], low: number, mid: number, high: number): number {
        let sum = 0;
        let leftSum = Number.NEGATIVE_INFINITY;
        for (let i = mid; i >= low; i--) {
            sum += nums[i];
            if (sum > leftSum) {
                leftSum = sum;
            }
        }
        
        sum = 0;
        let rightSum = Number.NEGATIVE_INFINITY;
        for (let i = mid + 1; i <= high; i++) {
            sum += nums[i];
            if (sum > rightSum) {
                rightSum = sum;
            }
        }
        
        return Math.max(leftSum + rightSum, leftSum, rightSum);
    }
    
    return maxSubArrayRecursive(nums, 0, nums.length - 1);
}