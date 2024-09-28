int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int threeSumClosest(int* nums, int numsSize, int target) {
    qsort(nums, numsSize, sizeof(int), compare);
    
    int closest_sum = nums[0] + nums[1] + nums[2];
    
    for (int i = 0; i < numsSize - 2; i++) {
        int left = i + 1;
        int right = numsSize - 1;
        
        while (left < right) {
            int current_sum = nums[i] + nums[left] + nums[right];
            
            if (abs(target - current_sum) < abs(target - closest_sum)) {
                closest_sum = current_sum;
            }
            
            if (current_sum > target) {
                right--;
            } else if (current_sum < target) {
                left++;
            } else {
                return target;  // Found exact sum
            }
        }
    }
    
    return closest_sum;
}