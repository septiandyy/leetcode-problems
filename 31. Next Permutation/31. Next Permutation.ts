function nextPermutation(nums: number[]): void {
    const n: number = nums.length;
    let i: number = n - 2;
    
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    
    if (i >= 0) {
        let j: number = n - 1;
        while (j >= 0 && nums[j] <= nums[i]) {
            j--;
        }
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    
    reverse(nums, i + 1);
}

function reverse(nums: number[], start: number): void {
    let left: number = start;
    let right: number = nums.length - 1;
    while (left < right) {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
    }
}