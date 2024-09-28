function myAtoi(s: string): number {
    let i = 0;
    const n = s.length;
    
    // Step 1: Ignore leading whitespace
    while (i < n && s[i] === ' ') {
        i++;
    }
    
    // Step 2: Check for sign
    let sign = 1;
    if (i < n && (s[i] === '-' || s[i] === '+')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }
    
    // Step 3: Convert digits
    let result = 0;
    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = parseInt(s[i]);
        // Check for overflow
        if (result > Math.floor((2**31 - 1) / 10) || (result === Math.floor((2**31 - 1) / 10) && digit > 7)) {
            return sign === 1 ? 2**31 - 1 : -(2**31);
        }
        result = result * 10 + digit;
        i++;
    }
    
    return sign * result;
};