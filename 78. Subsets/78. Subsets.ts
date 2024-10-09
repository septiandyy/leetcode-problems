function subsets(nums: number[]): number[][] {
    const result: number[][] = [];
    
    function backtrack(start: number, current: number[]): void {
        result.push([...current]);
        
        for (let i = start; i < nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    
    backtrack(0, []);
    return result;
}