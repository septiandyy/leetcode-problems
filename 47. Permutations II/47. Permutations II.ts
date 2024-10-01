function permuteUnique(nums: number[]): number[][] {
    const result: number[][] = [];
    nums.sort((a, b) => a - b);
    
    function backtrack(start: number): void {
        if (start === nums.length) {
            result.push([...nums]);
            return;
        }
        
        const used = new Set<number>();
        for (let i = start; i < nums.length; i++) {
            if (used.has(nums[i]) || (i > start && nums[i] === nums[start])) continue;
            used.add(nums[i]);
            [nums[start], nums[i]] = [nums[i], nums[start]];
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]];
        }
    }
    
    backtrack(0);
    return result;
};