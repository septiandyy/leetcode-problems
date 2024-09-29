function strStr(haystack, needle) {
    // Use the built-in indexOf method to find the first occurrence of needle in haystack
    return haystack.indexOf(needle);
  }
  
  // Example usage:
  console.log(strStr("sadbutsad", "sad")); // Output: 0
  console.log(strStr("leetcode", "leeto")); // Output: -1