function sortColors(nums) {
    let low = 0;
    let mid = 0;
    let high = nums.length - 1;
    
    while (mid <= high) {
        if (nums[mid] === 0) {
            // Swap nums[low] and nums[mid], increment both low and mid
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++;
            mid++;
        } else if (nums[mid] === 1) {
            // Just move the mid pointer
            mid++;
        } else {
            // Swap nums[mid] and nums[high], decrement high
            [nums[high], nums[mid]] = [nums[mid], nums[high]];
            high--;
        }
    }
}