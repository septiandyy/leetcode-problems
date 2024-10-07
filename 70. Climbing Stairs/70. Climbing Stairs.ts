function climbStairs(n: number): number {
    if (n <= 2) return n;
    
    let first = 1, second = 2, result = 0;
    for (let i = 3; i <= n; i++) {
        result = first + second;
        first = second;
        second = result;
    }
    return result;
};