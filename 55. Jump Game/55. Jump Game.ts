function canJump(nums: number[]): boolean {
    let maxReach: number = 0;
    
    for (let i = 0; i <= maxReach && i < nums.length; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    return false;
}