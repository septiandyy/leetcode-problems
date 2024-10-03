/**
 * @param {number[]} nums
 * @return {boolean}
 */
function canJump(nums) {
    let maxReach = 0;
    
    for (let i = 0; i <= maxReach && i < nums.length; i++) {
        maxReach = Math.max(maxReach, i + nums[i]);
        
        // If we can reach the last index, return true
        if (maxReach >= nums.length - 1) {
            return true;
        }
    }
    
    // If we exit the loop, it means we can't reach the end
    return false;
}