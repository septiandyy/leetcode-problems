function isNumber(s: string): boolean {
    let i: number = 0;
    let seenDigit: boolean = false;
    let seenDot: boolean = false;
    let seenE: boolean = false;
    
    // Handle sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) i++;
    
    for (; i < s.length; i++) {
        if (s[i] >= '0' && s[i] <= '9') {
            seenDigit = true;
        } else if (s[i] === '.') {
            if (seenDot || seenE) return false;
            seenDot = true;
        } else if (s[i] === 'e' || s[i] === 'E') {
            if (seenE || !seenDigit) return false;
            seenE = true;
            seenDigit = false;
            if (i + 1 < s.length && (s[i+1] === '+' || s[i+1] === '-')) i++;
        } else {
            return false;
        }
    }
    
    return seenDigit;
}