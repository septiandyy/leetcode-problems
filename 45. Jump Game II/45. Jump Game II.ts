function jump(nums: number[]): number {
    if (nums.length <= 1) return 0;
    
    let jumps = 0;
    let currentMax = 0;
    let nextMax = 0;
    
    for (let i = 0; i < nums.length - 1; i++) {
        nextMax = Math.max(nextMax, i + nums[i]);
        
        if (i === currentMax) {
            jumps++;
            currentMax = nextMax;
            
            if (currentMax >= nums.length - 1) {
                break;
            }
        }
    }
    
    return jumps;
};