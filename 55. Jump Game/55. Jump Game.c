#include <stdbool.h>

bool canJump(int* nums, int numsSize) {
    int maxReach = 0;
    
    for (int i = 0; i <= maxReach && i < numsSize; i++) {
        maxReach = (maxReach < i + nums[i]) ? i + nums[i] : maxReach;
        if (maxReach >= numsSize - 1) {
            return true;
        }
    }
    
    return false;
}