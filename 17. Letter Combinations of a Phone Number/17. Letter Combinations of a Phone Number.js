function letterCombinations(digits) {
    if (digits.length === 0) return []; // Edge case for empty input
    
    // Mapping of digits to letters
    const phoneMap = {
        '2': 'abc', '3': 'def', '4': 'ghi',
        '5': 'jkl', '6': 'mno', '7': 'pqrs',
        '8': 'tuv', '9': 'wxyz'
    };
    
    const result = [];
    
    function backtrack(index, path) {
        if (path.length === digits.length) {
            result.push(path.join(''));
            return;
        }
        
        const letters = phoneMap[digits[index]];
        for (const letter of letters) {
            path.push(letter);
            backtrack(index + 1, path);
            path.pop(); // Remove the last letter added
        }
    }
    
    backtrack(0, []);
    return result;
}

// Example usage
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));  // Output: []
console.log(letterCombinations("2")); // Output: ["a","b","c"]