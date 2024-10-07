function plusOne(digits) {
    let n = digits.length;
    
    // Start from the end of the array and move backwards
    for (let i = n - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0; // Set the current digit to 0 and carry over
    }
    
    // If all digits were 9, we need to add an extra digit at the beginning
    let result = new Array(n + 1).fill(0);
    result[0] = 1;
    return result;
}

// Example usage:
console.log(plusOne([1, 2, 3])); // Output: [1, 2, 4]
console.log(plusOne([4, 3, 2, 1])); // Output: [4, 3, 2, 2]
console.log(plusOne([9])); // Output: [1, 0]
console.log(plusOne([9, 9, 9])); // Output: [1, 0, 0, 0]