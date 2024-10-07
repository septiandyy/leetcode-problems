char* simplifyPath(char* path) {
    int len = strlen(path);
    char** stack = (char**)malloc(len * sizeof(char*));
    int top = 0;
    
    char* token = strtok(path, "/");
    while (token != NULL) {
        if (strcmp(token, "..") == 0) {
            if (top > 0) top--;
        } else if (strcmp(token, ".") != 0 && strlen(token) > 0) {
            stack[top++] = token;
        }
        token = strtok(NULL, "/");
    }
    
    char* result = (char*)malloc(len + 1);
    result[0] = '/';
    int index = 1;
    
    for (int i = 0; i < top; i++) {
        strcpy(result + index, stack[i]);
        index += strlen(stack[i]);
        if (i < top - 1) result[index++] = '/';
    }
    
    // If index is still 1, it means we're at root, so we don't need to add anything
    if (index == 1) {
        result[1] = '\0';
    } else {
        result[index] = '\0';
    }
    
    free(stack);
    return result;
}