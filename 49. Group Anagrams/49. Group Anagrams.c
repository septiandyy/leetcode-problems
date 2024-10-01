#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#define MAX_STR_LEN 101
#define TABLE_SIZE 10007

typedef struct Node {
    char* key;
    char** group;
    int groupSize;
    int capacity;
    struct Node* next;
} Node;

unsigned long hash(char* str) {
    unsigned long hash = 5381;
    int c;
    while ((c = *str++))
        hash = ((hash << 5) + hash) + c;
    return hash % TABLE_SIZE;
}

void insertGroup(Node** table, char* key, char* str) {
    unsigned long index = hash(key);
    Node* current = table[index];
    while (current) {
        if (strcmp(current->key, key) == 0) {
            if (current->groupSize == current->capacity) {
                current->capacity *= 2;
                current->group = realloc(current->group, current->capacity * sizeof(char*));
            }
            current->group[current->groupSize++] = strdup(str);
            return;
        }
        current = current->next;
    }
    Node* newNode = malloc(sizeof(Node));
    newNode->key = strdup(key);
    newNode->capacity = 2;
    newNode->group = malloc(newNode->capacity * sizeof(char*));
    newNode->group[0] = strdup(str);
    newNode->groupSize = 1;
    newNode->next = table[index];
    table[index] = newNode;
}

char*** groupAnagrams(char** strs, int strsSize, int* returnSize, int** returnColumnSizes) {
    Node* table[TABLE_SIZE] = {0};
    for (int i = 0; i < strsSize; i++) {
        char key[MAX_STR_LEN];
        strcpy(key, strs[i]);
        int count[26] = {0};
        for (int j = 0; key[j]; j++)
            count[key[j] - 'a']++;
        for (int j = 0, k = 0; j < 26; j++)
            for (int l = 0; l < count[j]; l++)
                key[k++] = j + 'a';
        insertGroup(table, key, strs[i]);
    }

    char*** result = malloc(strsSize * sizeof(char**));
    *returnColumnSizes = malloc(strsSize * sizeof(int));
    *returnSize = 0;

    for (int i = 0; i < TABLE_SIZE; i++) {
        Node* current = table[i];
        while (current) {
            result[*returnSize] = current->group;
            (*returnColumnSizes)[*returnSize] = current->groupSize;
            (*returnSize)++;
            Node* temp = current;
            current = current->next;
            free(temp->key);
            free(temp);
        }
    }

    return result;
}