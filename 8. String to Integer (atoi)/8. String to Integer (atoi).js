function myAtoi(s) {
    const INT_MIN = -Math.pow(2, 31); // -2147483648
    const INT_MAX = Math.pow(2, 31) - 1; // 2147483647

    let index = 0;
    let sign = 1;
    let result = 0;

    // Step 1: Skip leading whitespaces
    while (index < s.length && s[index] === ' ') {
        index++;
    }

    // Step 2: Determine the sign
    if (index < s.length && (s[index] === '+' || s[index] === '-')) {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    // Step 3: Convert the string to an integer
    while (index < s.length && s[index] >= '0' && s[index] <= '9') {
        const digit = s[index] - '0';

        // Check for overflow before updating result
        if (result > Math.floor(INT_MAX / 10) || 
            (result === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        index++;
    }

    return result * sign;
}

// Example usage:
console.log(myAtoi("42"));         // Output: 42
console.log(myAtoi("   -042"));    // Output: -42
console.log(myAtoi("1337c0d3"));   // Output: 1337
console.log(myAtoi("0-1"));        // Output: 0
console.log(myAtoi("words and 987")); // Output: 0