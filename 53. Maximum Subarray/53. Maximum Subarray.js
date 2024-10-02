// Kadane's Algorithm
const maxSubArrayKadane = (nums) => {
    let maxSoFar = nums[0];
    let maxEndingHere = nums[0];

    for (let i = 1; i < nums.length; i++) {
        maxEndingHere = Math.max(nums[i], maxEndingHere + nums[i]);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }

    return maxSoFar;
};

// Example usage:
console.log(maxSubArrayKadane([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArrayKadane([1]));                     // Output: 1
console.log(maxSubArrayKadane([5,4,-1,7,8]));            // Output: 23
const maxCrossingSum = (nums, left, mid, right) => {
    let leftSum = -Infinity;
    let rightSum = -Infinity;

    let sum = 0;
    // Find the maximum sum on the left of mid
    for (let i = mid; i >= left; i--) {
        sum += nums[i];
        leftSum = Math.max(leftSum, sum);
    }

    sum = 0;
    // Find the maximum sum on the right of mid
    for (let i = mid + 1; i <= right; i++) {
        sum += nums[i];
        rightSum = Math.max(rightSum, sum);
    }

    return leftSum + rightSum;
};

const maxSubArrayDivideAndConquer = (nums, left, right) => {
    if (left === right) {
        return nums[left];
    }

    const mid = Math.floor((left + right) / 2);
    const leftMax = maxSubArrayDivideAndConquer(nums, left, mid);
    const rightMax = maxSubArrayDivideAndConquer(nums, mid + 1, right);
    const crossMax = maxCrossingSum(nums, left, mid, right);

    return Math.max(leftMax, rightMax, crossMax);
};

const maxSubArray = (nums) => {
    return maxSubArrayDivideAndConquer(nums, 0, nums.length - 1);
};

// Example usage:
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4])); // Output: 6
console.log(maxSubArray([1]));                     // Output: 1
console.log(maxSubArray([5,4,-1,7,8]));            // Output: 23