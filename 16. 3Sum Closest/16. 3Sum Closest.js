function threeSumClosest(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array

    let closestSum = Infinity;

    for (let i = 0; i < nums.length - 2; i++) {
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            const sum = nums[i] + nums[left] + nums[right];

            // Update closestSum if the current sum is closer to the target
            if (Math.abs(sum - target) < Math.abs(closestSum - target)) {
                closestSum = sum;
            }

            // Move the pointers based on the sum
            if (sum < target) {
                left++;
            } else if (sum > target) {
                right--;
            } else {
                // If the sum is exactly equal to the target, return it immediately
                return sum;
            }
        }
    }

    return closestSum;
}

// Example usage
console.log(threeSumClosest([-1, 2, 1, -4], 1)); // Output: 2
console.log(threeSumClosest([0, 0, 0], 1)); // Output: 0