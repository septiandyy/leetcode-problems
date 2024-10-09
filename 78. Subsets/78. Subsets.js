function subsets(nums) {
    const results = [];

    function backtrack(start, path) {
        results.push([...path]); // Add a copy of the current subset to results

        for (let i = start; i < nums.length; i++) {
            path.push(nums[i]); // Include nums[i] in the subset
            backtrack(i + 1, path); // Move to the next element
            path.pop(); // Exclude nums[i] from the subset
        }
    }

    backtrack(0, []);
    return results;
}

// Example Usage:
console.log(subsets([1, 2, 3])); // Output: [[], [1], [1, 2], [1, 2, 3], [1, 3], [2], [2, 3], [3]]
console.log(subsets([0]));       // Output: [[], [0]]