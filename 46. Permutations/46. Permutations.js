function permute(nums) {
    const result = [];
    
    function backtrack(start) {
        // If the permutation is complete, add it to the results
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        
        for (let i = start; i < nums.length; i++) {
            // Swap the current index with the start index
            [nums[start], nums[i]] = [nums[i], nums[start]];
            
            // Recur with the next index
            backtrack(start + 1);
            
            // Swap back to backtrack
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    
    backtrack(0);
    return result;
}

// Example usage
console.log(permute([1, 2, 3])); // Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute([0, 1]));    // Output: [[0,1],[1,0]]
console.log(permute([1]));       // Output: [[1]]