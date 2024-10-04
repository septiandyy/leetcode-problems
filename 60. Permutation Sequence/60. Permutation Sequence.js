function getPermutation(n, k) {
    // Helper function to compute factorial of a number
    function factorial(num) {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    // Precompute factorials
    const factorials = [];
    for (let i = 0; i < n; i++) {
        factorials[i] = factorial(i);
    }

    // Initialize variables
    const nums = Array.from({ length: n }, (_, i) => i + 1);
    let permutation = '';
    k--; // Convert to 0-based index

    // Generate the k-th permutation
    for (let i = n; i > 0; i--) {
        const index = Math.floor(k / factorials[i - 1]);
        permutation += nums[index];
        nums.splice(index, 1);
        k %= factorials[i - 1];
    }

    return permutation;
}

// Example usage:
console.log(getPermutation(3, 3)); // Output: "213"
console.log(getPermutation(4, 9)); // Output: "2314"
console.log(getPermutation(3, 1)); // Output: "123"