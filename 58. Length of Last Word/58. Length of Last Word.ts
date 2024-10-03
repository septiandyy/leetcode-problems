function lengthOfLastWord(s: string): number {
    let length: number = 0;
    let i: number = s.length - 1;
    
    // Skip trailing spaces
    while (i >= 0 && s[i] === ' ') {
        i--;
    }
    
    // Count characters of the last word
    while (i >= 0 && s[i] !== ' ') {
        length++;
        i--;
    }
    
    return length;
}