function multiply(num1, num2) {
    const m = num1.length;
    const n = num2.length;
    const result = new Array(m + n).fill(0);

    // Multiply each digit and place the result in the corresponding position
    for (let i = m - 1; i >= 0; i--) {
        for (let j = n - 1; j >= 0; j--) {
            const mul = (num1[i] - '0') * (num2[j] - '0');
            const p1 = i + j;   // Position in result
            const p2 = i + j + 1; // Next position in result
            const sum = mul + result[p2];

            result[p2] = sum % 10;  // Set the current position
            result[p1] += Math.floor(sum / 10); // Carry over to the next position
        }
    }

    // Convert result array to string
    let resultStr = result.join('');
    
    // Remove leading zeros
    return resultStr.replace(/^0+/, '') || '0';
}

// Example usage:
console.log(multiply("2", "3"));    // Output: "6"
console.log(multiply("123", "456")); // Output: "56088"