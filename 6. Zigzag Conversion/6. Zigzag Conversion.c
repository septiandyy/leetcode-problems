#include <stdlib.h>
#include <string.h>

char* convert(char* s, int numRows) {
    if (numRows == 1) return s;
    
    int len = strlen(s);
    char* result = (char*)malloc((len + 1) * sizeof(char));
    int index = 0;
    
    for (int i = 0; i < numRows; i++) {
        int step = 2 * (numRows - 1);
        for (int j = i; j < len; j += step) {
            result[index++] = s[j];
            if (i != 0 && i != numRows - 1 && j + step - 2 * i < len) {
                result[index++] = s[j + step - 2 * i];
            }
        }
    }
    
    result[len] = '\0';
    return result;
}