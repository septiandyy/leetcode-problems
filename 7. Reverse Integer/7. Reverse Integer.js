function reverse(x) {
    const INT_MIN = -Math.pow(2, 31); // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1; // 2147483647

    let reversed = 0;
    let num = x;
    let sign = x < 0 ? -1 : 1;
    num = Math.abs(num);

    while (num !== 0) {
        let digit = num % 10; // Get the last digit
        num = Math.floor(num / 10); // Remove the last digit from the number

        // Check for overflow before updating reversed
        if (reversed > Math.floor(INT_MAX / 10) || 
            (reversed === Math.floor(INT_MAX / 10) && digit > 7)) {
            return 0; // Positive overflow
        }
        if (reversed < Math.ceil(INT_MIN / 10) || 
            (reversed === Math.ceil(INT_MIN / 10) && digit < -8)) {
            return 0; // Negative overflow
        }

        reversed = reversed * 10 + digit; // Build the reversed number
    }

    return reversed * sign; // Restore the sign
}

// Example usage:
console.log(reverse(123));   // Output: 321
console.log(reverse(-123));  // Output: -321
console.log(reverse(120));   // Output: 21
console.log(reverse(1534236469)); // Output: 0 (overflow case)