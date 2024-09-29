#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_WORD_LENGTH 30

typedef struct {
    char word[MAX_WORD_LENGTH];
    int count;
} WordCount;

int* findSubstring(char* s, char** words, int wordsSize, int* returnSize) {
    int* result = NULL;
    *returnSize = 0;
    
    if (s == NULL || words == NULL || wordsSize == 0) {
        return result;
    }
    
    int wordLength = strlen(words[0]);
    int totalLength = wordLength * wordsSize;
    int sLength = strlen(s);
    
    if (sLength < totalLength) {
        return result;
    }
    
    result = (int*)malloc(sLength * sizeof(int));
    
    WordCount* wordCount = (WordCount*)malloc(wordsSize * sizeof(WordCount));
    for (int i = 0; i < wordsSize; i++) {
        strcpy(wordCount[i].word, words[i]);
        wordCount[i].count = 1;
        for (int j = 0; j < i; j++) {
            if (strcmp(wordCount[j].word, words[i]) == 0) {
                wordCount[j].count++;
                wordCount[i].count = 0;
                break;
            }
        }
    }
    
    for (int i = 0; i <= sLength - totalLength; i++) {
        WordCount* seenWords = (WordCount*)calloc(wordsSize, sizeof(WordCount));
        bool isValid = true;
        
        for (int j = 0; j < wordsSize; j++) {
            char currentWord[MAX_WORD_LENGTH];
            strncpy(currentWord, s + i + j * wordLength, wordLength);
            currentWord[wordLength] = '\0';
            
            bool found = false;
            for (int k = 0; k < wordsSize; k++) {
                if (strcmp(wordCount[k].word, currentWord) == 0) {
                    seenWords[k].count++;
                    if (seenWords[k].count > wordCount[k].count) {
                        isValid = false;
                    }
                    found = true;
                    break;
                }
            }
            
            if (!found) {
                isValid = false;
                break;
            }
        }
        
        if (isValid) {
            result[(*returnSize)++] = i;
        }
        
        free(seenWords);
    }
    
    free(wordCount);
    return result;
}