function nextPermutation(nums) {
    let n = nums.length;
    
    // Step 1: Find the largest index k such that nums[k] < nums[k + 1]
    let k = n - 2;
    while (k >= 0 && nums[k] >= nums[k + 1]) {
        k--;
    }
    
    if (k >= 0) {
        // Step 2: Find the largest index l greater than k such that nums[k] < nums[l]
        let l = n - 1;
        while (nums[l] <= nums[k]) {
            l--;
        }
        
        // Step 3: Swap nums[k] and nums[l]
        [nums[k], nums[l]] = [nums[l], nums[k]];
    }
    
    // Step 4: Reverse the sequence from k + 1 to the end
    let start = k + 1;
    let end = n - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
}