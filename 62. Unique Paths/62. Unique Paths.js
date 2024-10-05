function uniquePaths(m, n) {
    // Function to calculate factorial
    function factorial(num) {
        if (num === 0 || num === 1) return 1;
        let result = 1;
        for (let i = 2; i <= num; i++) {
            result *= i;
        }
        return result;
    }

    // Function to calculate binomial coefficient
    function binomialCoefficient(a, b) {
        return factorial(a) / (factorial(b) * factorial(a - b));
    }

    // Calculate the number of unique paths
    const totalMoves = m + n - 2;
    const downMoves = m - 1;
    return binomialCoefficient(totalMoves, downMoves);
}

// Test cases
console.log(uniquePaths(3, 7));  // Output: 28
console.log(uniquePaths(3, 2));  // Output: 3