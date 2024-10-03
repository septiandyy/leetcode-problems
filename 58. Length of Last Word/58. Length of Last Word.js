function lengthOfLastWord(s) {
    // Step 1: Trim the string to remove leading and trailing spaces
    s = s.trim();
    
    // Step 2: Split the trimmed string into words
    const words = s.split(' ');
    
    // Step 3: Access the last word
    const lastWord = words[words.length - 1];
    
    // Step 4: Return the length of the last word
    return lastWord.length;
}

// Example usage:
console.log(lengthOfLastWord("Hello World")); // Output: 5
console.log(lengthOfLastWord("   fly me   to   the moon  ")); // Output: 4
console.log(lengthOfLastWord("luffy is still joyboy")); // Output: 6