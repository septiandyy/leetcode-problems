function permuteUnique(nums) {
    const result = [];
    const path = [];
    const used = Array(nums.length).fill(false);

    // Sort the numbers to handle duplicates
    nums.sort((a, b) => a - b);

    function backtrack() {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }

        for (let i = 0; i < nums.length; i++) {
            if (used[i] || (i > 0 && nums[i] === nums[i - 1] && !used[i - 1])) {
                continue; // Skip duplicates
            }

            path.push(nums[i]);
            used[i] = true;
            backtrack();
            path.pop();
            used[i] = false;
        }
    }

    backtrack();
    return result;
}

// Example usage:
console.log(permuteUnique([1, 1, 2])); // Output: [[1,1,2], [1,2,1], [2,1,1]]
console.log(permuteUnique([1, 2, 3])); // Output: [[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]]