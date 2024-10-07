function simplifyPath(path: string): string {
    const stack: string[] = [];
    const parts = path.split('/');
    
    for (const part of parts) {
        if (part === '.' || part === '') continue;
        if (part === '..') {
            if (stack.length > 0) stack.pop();
        } else {
            stack.push(part);
        }
    }
    
    return '/' + stack.join('/');
};