function numDecodings(s) {
    const n = s.length;
    if (n === 0) return 0;
    
    // Initialize dp array
    const dp = Array(n + 1).fill(0);
    dp[0] = 1; // Base case: there's one way to decode an empty string
    dp[1] = s[0] !== '0' ? 1 : 0; // Base case: there's one way to decode if s[0] is not '0'
    
    for (let i = 2; i <= n; i++) {
        // Single digit decoding
        const oneDigit = s.substring(i - 1, i);
        if (oneDigit >= '1' && oneDigit <= '9') {
            dp[i] += dp[i - 1];
        }
        
        // Two digit decoding
        const twoDigits = s.substring(i - 2, i);
        if (twoDigits >= '10' && twoDigits <= '26') {
            dp[i] += dp[i - 2];
        }
    }
    
    return dp[n];
}

// Example usage
console.log(numDecodings("12"));   // Output: 2
console.log(numDecodings("226"));  // Output: 3
console.log(numDecodings("06"));   // Output: 0