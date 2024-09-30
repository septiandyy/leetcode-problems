function combinationSum(candidates, target) {
    const result = [];
    
    function backtrack(start, remaining, combination) {
        // If the remaining target is zero, we found a valid combination
        if (remaining === 0) {
            result.push([...combination]);
            return;
        }
        
        // If the remaining target is negative, no need to continue
        if (remaining < 0) {
            return;
        }
        
        // Explore further numbers starting from the current index
        for (let i = start; i < candidates.length; i++) {
            combination.push(candidates[i]); // Add the number to the combination
            backtrack(i, remaining - candidates[i], combination); // Recur with the updated target
            combination.pop(); // Remove the last number to backtrack
        }
    }
    
    backtrack(0, target, []);
    return result;
}

// Example usage
console.log(combinationSum([2, 3, 6, 7], 7)); // Output: [[2,2,3],[7]]
console.log(combinationSum([2, 3, 5], 8));    // Output: [[2,2,2,2],[2,3,3],[3,5]]
console.log(combinationSum([2], 1));          // Output: []