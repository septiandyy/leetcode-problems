function groupAnagrams(strs) {
    const map = new Map();

    for (const str of strs) {
        // Sort the string to get the key
        const sortedStr = str.split('').sort().join('');
        
        // If the key does not exist, create a new entry in the map
        if (!map.has(sortedStr)) {
            map.set(sortedStr, []);
        }
        
        // Add the original string to the list for this key
        map.get(sortedStr).push(str);
    }
    
    // Collect all grouped anagrams
    return Array.from(map.values());
}