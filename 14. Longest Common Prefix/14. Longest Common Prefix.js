function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    // Start with the prefix being the first string
    let prefix = strs[0];

    // Compare prefix with each string in the array
    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            // Reduce the prefix by removing the last character
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Example usage
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // Output: "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // Output: ""