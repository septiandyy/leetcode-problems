function reverse(x: number): number {
    let rev: number = 0;
    
    while (x !== 0) {
        const pop: number = x % 10;
        x = Math.trunc(x / 10);
        
        // Check for overflow
        if (rev > Math.floor((2**31 - 1) / 10) || (rev === Math.floor((2**31 - 1) / 10) && pop > 7)) return 0;
        if (rev < Math.ceil(-(2**31) / 10) || (rev === Math.ceil(-(2**31) / 10) && pop < -8)) return 0;
        
        rev = rev * 10 + pop;
    }
    
    return rev;
}