function lengthOfLongestSubstring(s: string): number {
    let left = 0;
    let maxLength = 0;
    const seenChars = new Set<string>();

    for (let right = 0; right < s.length; right++) {
        // If the character is already in the set, shrink the window by moving the left pointer
        while (seenChars.has(s[right])) {
            seenChars.delete(s[left]);
            left++;
        }
        
        // Add the current character to the set
        seenChars.add(s[right]);

        // Update the maximum length of the substring found
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}