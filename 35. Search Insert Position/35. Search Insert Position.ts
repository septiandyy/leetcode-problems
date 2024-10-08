function searchInsert(nums: number[], target: number): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    
    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2);
        
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return left;
}