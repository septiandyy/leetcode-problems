function isValid(s) {
    // Map to hold the matching pairs
    const bracketMap = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    // Stack to keep track of opening brackets
    const stack = [];

    // Traverse the string
    for (const char of s) {
        // If it's a closing bracket
        if (bracketMap[char]) {
            // Pop from stack if not empty
            const topElement = stack.length === 0 ? '#' : stack.pop();
            // Check if the top of the stack matches the expected opening bracket
            if (topElement !== bracketMap[char]) {
                return false;
            }
        } else {
            // If it's an opening bracket, push onto the stack
            stack.push(char);
        }
    }

    // If stack is empty, all brackets matched correctly
    return stack.length === 0;
}

// Example usage
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false