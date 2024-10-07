char * addBinary(char * a, char * b){
    int len_a = strlen(a), len_b = strlen(b);
    int max_len = len_a > len_b ? len_a : len_b;
    char *result = (char*)malloc(sizeof(char) * (max_len + 2));
    result[max_len + 1] = '\0';
    
    int carry = 0;
    int i = len_a - 1, j = len_b - 1, k = max_len;
    
    while (i >= 0 || j >= 0 || carry) {
        int sum = carry;
        if (i >= 0) sum += a[i--] - '0';
        if (j >= 0) sum += b[j--] - '0';
        result[k--] = (sum % 2) + '0';
        carry = sum / 2;
    }
    
    return result + k + 1;
}