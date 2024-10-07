/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
char** fullJustify(char** words, int wordsSize, int maxWidth, int* returnSize) {
    char** result = malloc(wordsSize * sizeof(char*));
    *returnSize = 0;
    int start = 0, len = 0;

    for (int i = 0; i <= wordsSize; i++) {
        if (i == wordsSize || len + strlen(words[i]) + i - start > maxWidth) {
            int spaces = maxWidth - len;
            int gaps = i - start - 1;
            
            result[*returnSize] = malloc((maxWidth + 1) * sizeof(char));
            int pos = 0;
            
            for (int j = start; j < i; j++) {
                strcpy(result[*returnSize] + pos, words[j]);
                pos += strlen(words[j]);
                
                if (j == i - 1) break;
                
                int extraSpaces = (i == wordsSize || gaps == 0) ? 1 : spaces / gaps + (spaces % gaps > 0);
                for (int k = 0; k < extraSpaces; k++) {
                    result[*returnSize][pos++] = ' ';
                }
                spaces -= extraSpaces;
                gaps--;
            }
            
            while (pos < maxWidth) result[*returnSize][pos++] = ' ';
            result[*returnSize][maxWidth] = '\0';
            
            (*returnSize)++;
            start = i;
            len = 0;
        }
        if (i < wordsSize) len += strlen(words[i]);
    }
    
    return result;
}