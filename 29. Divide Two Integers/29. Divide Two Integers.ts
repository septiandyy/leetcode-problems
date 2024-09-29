// TypeScript implementation (optimized)
function divide(dividend: number, divisor: number): number {
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    if (divisor === 1) return dividend;
    if (divisor === -1) return -dividend;
    
    const MAX_INT = 2147483647;
    const MIN_INT = -2147483648;
    
    let dvd = Math.abs(dividend);
    let dvs = Math.abs(divisor);
    let sign = (dividend > 0) !== (divisor > 0) ? -1 : 1;
    let quotient = 0;
    
    while (dvd >= dvs) {
        let temp = dvs;
        let multiple = 1;
        while (dvd >= (temp << 1) && (temp << 1) > 0) {
            temp <<= 1;
            multiple <<= 1;
        }
        dvd -= temp;
        quotient += multiple;
    }
    
    let result = sign * quotient;
    if (result > MAX_INT) return MAX_INT;
    if (result < MIN_INT) return MIN_INT;
    return result;
};