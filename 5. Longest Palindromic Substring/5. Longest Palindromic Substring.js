function longestPalindrome(s) {
    if (s.length === 0) return "";

    let start = 0; // Start index of the longest palindrome
    let end = 0; // End index of the longest palindrome

    function expandAroundCenter(left, right) {
        while (left >= 0 && right < s.length && s[left] === s[right]) {
            left--;
            right++;
        }
        return [left + 1, right - 1]; // Return the start and end indices of the palindrome
    }

    for (let i = 0; i < s.length; i++) {
        // Check for odd-length palindromes
        let [oddStart, oddEnd] = expandAroundCenter(i, i);
        // Check for even-length palindromes
        let [evenStart, evenEnd] = expandAroundCenter(i, i + 1);

        // Update longest palindrome if needed
        if (oddEnd - oddStart > end - start) {
            start = oddStart;
            end = oddEnd;
        }
        if (evenEnd - evenStart > end - start) {
            start = evenStart;
            end = evenEnd;
        }
    }

    return s.substring(start, end + 1);
}

// Example usage:
console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // Output: "bb"