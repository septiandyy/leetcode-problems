function climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    let a = 1, b = 2;
    
    for (let i = 3; i <= n; i++) {
        let temp = a + b;
        a = b;
        b = temp;
    }

    return b;
}

// Example usage:
console.log(climbStairs(2)); // Output: 2
console.log(climbStairs(3)); // Output: 3
console.log(climbStairs(10)); // Output: 89