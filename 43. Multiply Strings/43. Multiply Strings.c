char* multiply(char* num1, char* num2) {
    int len1 = strlen(num1);
    int len2 = strlen(num2);
    int len = len1 + len2;
    
    int* result = (int*)calloc(len, sizeof(int));
    
    for (int i = len1 - 1; i >= 0; i--) {
        for (int j = len2 - 1; j >= 0; j--) {
            int mul = (num1[i] - '0') * (num2[j] - '0');
            int sum = result[i + j + 1] + mul;
            
            result[i + j + 1] = sum % 10;
            result[i + j] += sum / 10;
        }
    }
    
    char* output = (char*)malloc((len + 1) * sizeof(char));
    int start = 0;
    int k = 0;
    
    while (start < len && result[start] == 0) {
        start++;
    }
    
    if (start == len) {
        output[k++] = '0';
    } else {
        for (int i = start; i < len; i++) {
            output[k++] = result[i] + '0';
        }
    }
    
    output[k] = '\0';
    free(result);
    
    return output;
}