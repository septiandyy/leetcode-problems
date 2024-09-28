function romanToInt(s) {
    // Define a map of Roman numerals to integer values
    const romanMap = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    const length = s.length;

    for (let i = 0; i < length; i++) {
        const currentVal = romanMap[s[i]];
        const nextVal = i + 1 < length ? romanMap[s[i + 1]] : 0;

        // If the current value is less than the next value, subtract it
        if (currentVal < nextVal) {
            total -= currentVal;
        } else {
            // Otherwise, add it
            total += currentVal;
        }
    }

    return total;
}

// Example usage
console.log(romanToInt("III"));    // Output: 3
console.log(romanToInt("LVIII"));  // Output: 58
console.log(romanToInt("MCMXCIV")); // Output: 1994