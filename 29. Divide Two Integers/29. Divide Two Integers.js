function divide(dividend, divisor) {
    if (dividend === 0) return 0;

    const INT_MAX = 2 ** 31 - 1;
    const INT_MIN = -(2 ** 31);

    // Handle overflow case
    if (dividend === INT_MIN && divisor === -1) return INT_MAX;

    // Determine the sign of the result
    const isNegative = (dividend < 0) !== (divisor < 0);

    // Work with absolute values
    let absDividend = Math.abs(dividend);
    let absDivisor = Math.abs(divisor);
    let result = 0;

    while (absDividend >= absDivisor) {
        let temp = absDivisor, multiple = 1;
        while (absDividend >= (temp << 1) && (temp << 1) > 0) { // (temp << 1) > 0 to avoid overflow
            temp <<= 1;
            multiple <<= 1;
        }
        absDividend -= temp;
        result += multiple;
    }

    // Apply the sign to the result
    result = isNegative ? -result : result;

    // Ensure the result is within the 32-bit signed integer range
    if (result < INT_MIN) return INT_MIN;
    if (result > INT_MAX) return INT_MAX;

    return result;
}

// Example usage
console.log(divide(10, 3)); // Output: 3
console.log(divide(7, -3)); // Output: -2
console.log(divide(2147483647, 1)); // Output: 2147483647
console.log(divide(-2147483648, -1)); // Output: 2147483647 (INT_MAX)