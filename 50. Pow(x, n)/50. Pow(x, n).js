function myPow(x, n) {
    if (n === 0) return 1; // Any number to the power of 0 is 1
    if (n < 0) {
        x = 1 / x; // If n is negative, compute the power for positive n and take reciprocal
        n = -n; // Convert n to positive
    }

    let result = 1;
    let currentPower = x;

    while (n > 0) {
        if (n % 2 === 1) { // If n is odd
            result *= currentPower;
        }
        currentPower *= currentPower; // Square the base
        n = Math.floor(n / 2); // Reduce the exponent by half
    }

    return result;
}

// Example usage:
console.log(myPow(2.00000, 10)); // Output: 1024.00000
console.log(myPow(2.10000, 3));  // Output: 9.26100
console.log(myPow(2.00000, -2)); // Output: 0.25000