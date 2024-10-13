function isScramble(s1, s2) {
    if (s1.length !== s2.length) return false;
    if (s1 === s2) return true;

    const memo = new Map();

    function scramble(s1, s2) {
        const key = s1 + ',' + s2;
        if (memo.has(key)) return memo.get(key);

        if (s1 === s2) return true;
        if (s1.length !== s2.length) return false;

        const n = s1.length;
        if (s1.split('').sort().join('') !== s2.split('').sort().join('')) return false;

        for (let i = 1; i < n; i++) {
            // Check without swapping
            if (scramble(s1.substring(0, i), s2.substring(0, i)) &&
                scramble(s1.substring(i), s2.substring(i))) {
                memo.set(key, true);
                return true;
            }
            // Check with swapping
            if (scramble(s1.substring(0, i), s2.substring(n - i)) &&
                scramble(s1.substring(i), s2.substring(0, n - i))) {
                memo.set(key, true);
                return true;
            }
        }

        memo.set(key, false);
        return false;
    }

    return scramble(s1, s2);
}

// Example usage
console.log(isScramble("great", "rgeat")); // Output: true
console.log(isScramble("abcde", "caebd")); // Output: false
console.log(isScramble("a", "a"));         // Output: true