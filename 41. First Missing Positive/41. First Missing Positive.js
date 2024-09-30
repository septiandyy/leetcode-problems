function firstMissingPositive(nums) {
    let n = nums.length;

    // Step 1: Clean up the array
    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            // Swap nums[i] with nums[nums[i] - 1]
            let temp = nums[i];
            nums[i] = nums[nums[i] - 1];
            nums[temp - 1] = temp;
        }
    }

    // Step 2: Find the first index with the incorrect number
    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1;
        }
    }

    // Step 3: All numbers from 1 to n are present, return n + 1
    return n + 1;
}