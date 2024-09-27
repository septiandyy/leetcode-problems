function lengthOfLongestSubstring(s) {
    let charSet = new Set(); // To store characters in the current window
    let left = 0; // Left pointer of the window
    let maxLength = 0; // Maximum length of substring found

    for (let right = 0; right < s.length; right++) {
        // If the character is already in the set, move the left pointer
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        // Add the new character to the set and update maxLength
        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Example usage:
console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3
console.log(lengthOfLongestSubstring("bbbbb"));    // Output: 1
console.log(lengthOfLongestSubstring("pwwkew"));   // Output: 3