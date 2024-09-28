function fourSum(nums, target) {
    nums.sort((a, b) => a - b); // Sort the array
    const result = [];
    
    const n = nums.length;
    
    for (let i = 0; i < n - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicates for i
        
        for (let j = i + 1; j < n - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) continue; // Skip duplicates for j
            
            let left = j + 1;
            let right = n - 1;
            
            while (left < right) {
                const sum = nums[i] + nums[j] + nums[left] + nums[right];
                
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[left], nums[right]]);
                    
                    // Skip duplicates for left
                    while (left < right && nums[left] === nums[left + 1]) left++;
                    // Skip duplicates for right
                    while (left < right && nums[right] === nums[right - 1]) right--;
                    
                    left++;
                    right--;
                } else if (sum < target) {
                    left++;
                } else {
                    right--;
                }
            }
        }
    }
    
    return result;
}

// Example usage
console.log(fourSum([1,0,-1,0,-2,2], 0)); // Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
console.log(fourSum([2,2,2,2,2], 8));    // Output: [[2,2,2,2]]