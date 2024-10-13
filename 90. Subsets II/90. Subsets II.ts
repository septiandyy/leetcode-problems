function subsetsWithDup(nums: number[]): number[][] {
    nums.sort((a, b) => a - b);
    const result: number[][] = [];
    
    function backtrack(start: number, current: number[]): void {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            if (i > start && nums[i] === nums[i-1]) continue;
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
};