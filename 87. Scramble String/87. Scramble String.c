#include <stdbool.h>
#include <string.h>
#include <stdlib.h>

bool isScramble(char* s1, char* s2) {
    int n = strlen(s1);
    if (n != strlen(s2)) return false;
    if (n == 0) return true;
    if (n == 1) return *s1 == *s2;

    bool*** dp = (bool***)malloc(n * sizeof(bool**));
    for (int i = 0; i < n; i++) {
        dp[i] = (bool**)malloc(n * sizeof(bool*));
        for (int j = 0; j < n; j++) {
            dp[i][j] = (bool*)calloc(n + 1, sizeof(bool));
        }
    }

    // Initialize for substrings of length 1
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            if (s1[i] == s2[j]) {
                dp[i][j][1] = true;
            }
        }
    }

    // Build up the dp table
    for (int len = 2; len <= n; len++) {
        for (int i = 0; i <= n - len; i++) {
            for (int j = 0; j <= n - len; j++) {
                for (int k = 1; k < len; k++) {
                    if ((dp[i][j][k] && dp[i+k][j+k][len-k]) || 
                        (dp[i][j+len-k][k] && dp[i+k][j][len-k])) {
                        dp[i][j][len] = true;
                        break;
                    }
                }
            }
        }
    }

    bool result = dp[0][0][n];

    // Free allocated memory
    for (int i = 0; i < n; i++) {
        for (int j = 0; j < n; j++) {
            free(dp[i][j]);
        }
        free(dp[i]);
    }
    free(dp);

    return result;
}