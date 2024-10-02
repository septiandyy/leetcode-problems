#include <limits.h>

int maxSubArray(int* nums, int numsSize) {
    int max_sum = INT_MIN;
    int current_sum = 0;
    
    for (int i = 0; i < numsSize; i++) {
        current_sum = (current_sum + nums[i] > nums[i]) ? current_sum + nums[i] : nums[i];
        max_sum = (max_sum > current_sum) ? max_sum : current_sum;
    }
    
    return max_sum;
}

// Divide and Conquer approach
int max(int a, int b) {
    return (a > b) ? a : b;
}

int max_crossing_sum(int* nums, int low, int mid, int high) {
    int sum = 0;
    int left_sum = INT_MIN;
    for (int i = mid; i >= low; i--) {
        sum += nums[i];
        if (sum > left_sum)
            left_sum = sum;
    }
    
    sum = 0;
    int right_sum = INT_MIN;
    for (int i = mid + 1; i <= high; i++) {
        sum += nums[i];
        if (sum > right_sum)
            right_sum = sum;
    }
    
    return max(max(left_sum + right_sum, left_sum), right_sum);
}

int maxSubArrayRecursive(int* nums, int low, int high) {
    if (low == high)
        return nums[low];
    
    int mid = (low + high) / 2;
    return max(max(maxSubArrayRecursive(nums, low, mid),
                   maxSubArrayRecursive(nums, mid + 1, high)),
               max_crossing_sum(nums, low, mid, high));
}

int maxSubArrayDivideConquer(int* nums, int numsSize) {
    return maxSubArrayRecursive(nums, 0, numsSize - 1);
}