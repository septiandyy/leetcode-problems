function combinationSum(candidates: number[], target: number): number[][] {
    candidates.sort((a, b) => a - b);
    const result: number[][] = [];
    
    function backtrack(index: number, current: number[], remainingTarget: number): void {
        if (remainingTarget === 0) {
            result.push([...current]);
            return;
        }
        
        for (let i = index; i < candidates.length; i++) {
            if (candidates[i] > remainingTarget) break;
            current.push(candidates[i]);
            backtrack(i, current, remainingTarget - candidates[i]);
            current.pop();
        }
    }
    
    backtrack(0, [], target);
    return result;
}