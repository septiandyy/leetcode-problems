function countAndSay(n) {
    if (n === 1) return "1";

    let result = "1"; // Base case

    for (let i = 2; i <= n; i++) {
        result = getNextSequence(result);
    }

    return result;
}

function getNextSequence(s) {
    let result = '';
    let count = 1;

    for (let i = 1; i < s.length; i++) {
        if (s[i] === s[i - 1]) {
            count++;
        } else {
            result += count.toString() + s[i - 1];
            count = 1;
        }
    }

    // Append the last group
    result += count.toString() + s[s.length - 1];

    return result;
}

// Example usage:
console.log(countAndSay(4)); // Output: "1211"
console.log(countAndSay(1)); // Output: "1"