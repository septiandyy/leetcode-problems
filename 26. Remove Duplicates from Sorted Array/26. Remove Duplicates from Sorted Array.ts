function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) return 0;
    
    let k: number = 1;
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[k-1]) {
            nums[k] = nums[i];
            k++;
        }
    }
    return k;
};