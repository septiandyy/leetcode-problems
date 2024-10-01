/**
 * @param {number[]} nums
 * @return {number}
 */
function jump(nums) {
    let jumps = 0;
    let currentJumpEnd = 0;
    let farthest = 0;
    
    // We don't need to check the last element
    for (let i = 0; i < nums.length - 1; i++) {
        // Update the farthest index we can reach
        farthest = Math.max(farthest, i + nums[i]);
        
        // If we've come to the end of the current jump,
        // we need to make another jump
        if (i === currentJumpEnd) {
            jumps++;
            currentJumpEnd = farthest;
        }
    }
    
    return jumps;
}

console.log(jump([2,3,1,1,4]));  // Output: 2
console.log(jump([2,3,0,1,4]));  // Output: 2