function subsetsWithDup(nums) {
    const results = [];
    nums.sort((a, b) => a - b); // Sort to handle duplicates

    function backtrack(start, path) {
        results.push([...path]); // Add the current subset to the result
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i - 1]) continue; // Skip duplicates
            path.push(nums[i]);
            backtrack(i + 1, path); // Recurse with the next starting index
            path.pop(); // Backtrack
        }
    }

    backtrack(0, []);
    return results;
}

// Example usage
console.log(subsetsWithDup([1, 2, 2])); // Output: [[], [1], [1, 2], [1, 2, 2], [2], [2, 2]]
console.log(subsetsWithDup([0]));        // Output: [[], [0]]