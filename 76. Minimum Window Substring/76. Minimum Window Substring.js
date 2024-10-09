function minWindow(s, t) {
    if (s.length < t.length) return "";

    // Frequency count of characters in t
    let tCount = new Map();
    for (let char of t) {
        tCount.set(char, (tCount.get(char) || 0) + 1);
    }

    let windowCount = new Map();
    let have = 0;
    let need = tCount.size;
    let minLen = Infinity;
    let minStart = 0;

    let left = 0;

    // Expand the window with the right pointer
    for (let right = 0; right < s.length; right++) {
        let char = s[right];
        windowCount.set(char, (windowCount.get(char) || 0) + 1);

        // Check if the current character is needed and its count is sufficient
        if (tCount.has(char) && windowCount.get(char) === tCount.get(char)) {
            have++;
        }

        // Contract the window until it is no longer valid
        while (have === need) {
            let windowLength = right - left + 1;
            if (windowLength < minLen) {
                minLen = windowLength;
                minStart = left;
            }

            // Remove the character at the left end of the window
            let leftChar = s[left];
            if (tCount.has(leftChar)) {
                windowCount.set(leftChar, windowCount.get(leftChar) - 1);
                if (windowCount.get(leftChar) < tCount.get(leftChar)) {
                    have--;
                }
            }
            left++;
        }
    }

    return minLen === Infinity ? "" : s.substring(minStart, minStart + minLen);
}

// Example usage:
console.log(minWindow("ADOBECODEBANC", "ABC")); // Output: "BANC"
console.log(minWindow("a", "a")); // Output: "a"
console.log(minWindow("a", "aa")); // Output: ""