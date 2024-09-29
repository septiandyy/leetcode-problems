int findBound(int* nums, int numsSize, int target, bool isLeft) {
    int left = 0, right = numsSize - 1;
    int result = -1;
    
    while (left <= right) {
        int mid = left + (right - left) / 2;
        if (nums[mid] == target) {
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

int* searchRange(int* nums, int numsSize, int target, int* returnSize) {
    *returnSize = 2;
    int* result = (int*)malloc(2 * sizeof(int));
    
    int left = findBound(nums, numsSize, target, true);
    if (left == -1) {
        result[0] = -1;
        result[1] = -1;
        return result;
    }
    
    int right = findBound(nums, numsSize, target, false);
    result[0] = left;
    result[1] = right;
    
    return result;
}