function grayCode(n) {
    if (n === 0) return [0];

    // Recursive call for n-1 bits
    const smallerGrayCode = grayCode(n - 1);
    const result = [];
    const prefix = 1 << (n - 1); // Prefix for the higher order bits

    // Append 0 to the front of the smaller Gray code
    for (let i = 0; i < smallerGrayCode.length; i++) {
        result.push(smallerGrayCode[i]);
    }

    // Append 1 to the front of the reversed smaller Gray code
    for (let i = smallerGrayCode.length - 1; i >= 0; i--) {
        result.push(prefix | smallerGrayCode[i]);
    }

    return result;
}

// Example usage
console.log(grayCode(2)); // Output: [0, 1, 3, 2]
console.log(grayCode(1)); // Output: [0, 1]