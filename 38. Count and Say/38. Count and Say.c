char * countAndSay(int n) {
    char *prev = malloc(5000 * sizeof(char));
    char *curr = malloc(5000 * sizeof(char));
    strcpy(prev, "1");
    
    for (int i = 2; i <= n; i++) {
        int count = 1;
        int index = 0;
        for (int j = 1; j <= strlen(prev); j++) {
            if (j < strlen(prev) && prev[j] == prev[j-1]) {
                count++;
            } else {
                curr[index++] = count + '0';
                curr[index++] = prev[j-1];
                count = 1;
            }
        }
        curr[index] = '\0';
        strcpy(prev, curr);
    }
    
    return prev;
}