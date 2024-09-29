#include <stdlib.h>
#include <string.h>

int longestValidParentheses(char* s) {
    int n = strlen(s);
    int maxLen = 0;
    int* stack = (int*)malloc((n + 1) * sizeof(int));
    int top = -1;
    stack[++top] = -1;

    for (int i = 0; i < n; i++) {
        if (s[i] == '(') {
            stack[++top] = i;
        } else {
            top--;
            if (top == -1) {
                stack[++top] = i;
            } else {
                maxLen = (maxLen > i - stack[top]) ? maxLen : i - stack[top];
            }
        }
    }

    free(stack);
    return maxLen;
}