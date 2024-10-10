int removeDuplicates(int* nums, int numsSize) {
    if (numsSize <= 2) return numsSize;
    
    int k = 2;  // Start from the third element
    
    for (int i = 2; i < numsSize; i++) {
        if (nums[i] != nums[k-2]) {
            nums[k] = nums[i];
            k++;
        }
    }
    
    return k;
}