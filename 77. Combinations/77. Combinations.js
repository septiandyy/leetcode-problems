function combine(n, k) {
    const result = [];
    
    function backtrack(start, combination) {
        // If the combination is complete, add it to the results
        if (combination.length === k) {
            result.push([...combination]);
            return;
        }
        
        // Explore further numbers to build the combination
        for (let i = start; i <= n; i++) {
            combination.push(i); // Add the number to the combination
            backtrack(i + 1, combination); // Recur with the next number
            combination.pop(); // Remove the last number to backtrack
        }
    }
    
    backtrack(1, []);
    return result;
}

// Example usage
console.log(combine(4, 2)); // Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
console.log(combine(1, 1)); // Output: [[1]]