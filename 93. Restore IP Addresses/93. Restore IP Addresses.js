function restoreIpAddresses(s) {
    const result = [];
    
    function backtrack(start, path) {
        // Base case: if we have 4 segments and have used up the entire string
        if (path.length === 4) {
            if (start === s.length) {
                result.push(path.join('.'));
            }
            return;
        }
        
        // Try to form a valid segment of length 1, 2, or 3
        for (let len = 1; len <= 3; len++) {
            if (start + len > s.length) break;
            const segment = s.substring(start, start + len);
            
            // Check if the segment is valid
            if (isValid(segment)) {
                path.push(segment);
                backtrack(start + len, path);
                path.pop(); // backtrack
            }
        }
    }
    
    // Check if a segment is a valid IP address part
    function isValid(segment) {
        if (segment.length > 1 && segment[0] === '0') return false;
        const value = parseInt(segment, 10);
        return value >= 0 && value <= 255;
    }
    
    backtrack(0, []);
    return result;
}

// Example usage
console.log(restoreIpAddresses("25525511135")); // Output: ["255.255.11.135", "255.255.111.35"]
console.log(restoreIpAddresses("0000"));        // Output: ["0.0.0.0"]
console.log(restoreIpAddresses("101023"));      // Output: ["1.0.10.23", "1.0.102.3", "10.1.0.23", "10.10.2.3", "101.0.2.3"]