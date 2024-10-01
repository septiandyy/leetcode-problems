function myPow(x: number, n: number): number {
    if (n === 0) return 1;
    if (n === -2147483648) {
        x = 1 / x;
        n = -(n + 1);
        return x * myPow(x, n);
    }
    if (n < 0) {
        x = 1 / x;
        n = -n;
    }
    let result = 1;
    while (n > 0) {
        if (n & 1) result *= x;
        x *= x;
        n >>= 1;
    }
    return result;
};