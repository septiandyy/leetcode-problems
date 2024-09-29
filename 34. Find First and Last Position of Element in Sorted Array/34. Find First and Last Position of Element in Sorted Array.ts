function searchRange(nums: number[], target: number): number[] {
    const left: number = findBound(nums, target, true);
    if (left === -1) return [-1, -1];
    const right: number = findBound(nums, target, false);
    return [left, right];
}

function findBound(nums: number[], target: number, isLeft: boolean): number {
    let left: number = 0;
    let right: number = nums.length - 1;
    let result: number = -1;
    
    while (left <= right) {
        const mid: number = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            result = mid;
            if (isLeft) right = mid - 1;
            else left = mid + 1;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    
    return result;
}