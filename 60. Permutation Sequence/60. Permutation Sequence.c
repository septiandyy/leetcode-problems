#include <stdlib.h>
#include <string.h>

char* getPermutation(int n, int k) {
    int factorial[10] = {1};
    int nums[9];
    char* result = (char*)malloc((n + 1) * sizeof(char));
    int i, j, index;
    
    for (i = 1; i <= n; i++) {
        factorial[i] = factorial[i-1] * i;
        nums[i-1] = i;
    }
    
    k--;  // Convert to 0-based index
    result[n] = '\0';
    
    for (i = 0; i < n; i++) {
        index = k / factorial[n-1-i];
        result[i] = nums[index] + '0';
        
        for (j = index; j < n-1-i; j++) {
            nums[j] = nums[j+1];
        }
        
        k %= factorial[n-1-i];
    }
    
    return result;
}