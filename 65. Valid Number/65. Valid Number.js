function isNumber(s) {
    // Regular expression to match a valid number
    const regex = /^[+-]?((\d+\.\d*)|(\.\d+)|(\d+))([eE][+-]?\d+)?$/;
    return regex.test(s);
}

// Example usage:
console.log(isNumber("0"));            // Output: true
console.log(isNumber("e"));            // Output: false
console.log(isNumber("."));            // Output: false
console.log(isNumber("3.14"));         // Output: true
console.log(isNumber("-123.456e789")); // Output: true
console.log(isNumber("95a54e53"));     // Output: false