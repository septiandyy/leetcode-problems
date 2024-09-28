function isPalindrome(x) {
    // Edge case: negative numbers and numbers ending with 0 (except 0 itself) are not palindromes
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let original = x;
    let reversed = 0;

    // Reverse the second half of the number
    while (x > reversed) {
        reversed = reversed * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // Check if the original number is equal to the reversed number
    // For even length numbers, x should be equal to reversed
    // For odd length numbers, the middle digit is ignored by reversed / 10
    return x === reversed || x === Math.floor(reversed / 10);
}

// Example usage:
console.log(isPalindrome(121));   // Output: true
console.log(isPalindrome(-121));  // Output: false
console.log(isPalindrome(10));    // Output: false