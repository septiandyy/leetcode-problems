function letterCombinations(digits: string): string[] {
    if (digits.length === 0) return [];
    
    const letterMap: string[] = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
    const result: string[] = [];
    
    function backtrack(index: number, current: string): void {
        if (index === digits.length) {
            result.push(current);
            return;
        }
        
        const letters = letterMap[parseInt(digits[index])];
        for (let i = 0; i < letters.length; i++) {
            backtrack(index + 1, current + letters[i]);
        }
    }
    
    backtrack(0, "");
    return result;
}