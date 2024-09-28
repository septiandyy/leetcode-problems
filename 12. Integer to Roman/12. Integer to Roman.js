function intToRoman(num) {
    // Define Roman numeral symbols and their values
    const romanSymbols = [
        { symbol: 'M', value: 1000 },
        { symbol: 'CM', value: 900 },
        { symbol: 'D', value: 500 },
        { symbol: 'CD', value: 400 },
        { symbol: 'C', value: 100 },
        { symbol: 'XC', value: 90 },
        { symbol: 'L', value: 50 },
        { symbol: 'XL', value: 40 },
        { symbol: 'X', value: 10 },
        { symbol: 'IX', value: 9 },
        { symbol: 'V', value: 5 },
        { symbol: 'IV', value: 4 },
        { symbol: 'I', value: 1 }
    ];

    let result = '';

    // Iterate through each symbol-value pair
    for (const { symbol, value } of romanSymbols) {
        // While the number is larger or equal to the current value
        while (num >= value) {
            result += symbol; // Append the Roman numeral
            num -= value;     // Subtract the value from the number
        }
    }

    return result;
}

// Example usage
console.log(intToRoman(3749)); // Output: "MMMDCCXLIX"
console.log(intToRoman(58));   // Output: "LVIII"
console.log(intToRoman(1994)); // Output: "MCMXCIV"