function simplifyPath(path) {
    // Split the path by '/'
    const parts = path.split('/');
    const stack = [];

    for (const part of parts) {
        if (part === '.' || part === '') {
            // Ignore current directory (.) and empty parts (consecutive slashes)
            continue;
        }
        if (part === '..') {
            // Move up one directory
            if (stack.length > 0) {
                stack.pop();
            }
        } else {
            // Add directory or file name to the stack
            stack.push(part);
        }
    }

    // Join the stack into a canonical path
    return '/' + stack.join('/');
}

// Example usage:
console.log(simplifyPath("/home/")); // Output: "/home"
console.log(simplifyPath("/home//foo/")); // Output: "/home/foo"
console.log(simplifyPath("/home/user/Documents/../Pictures")); // Output: "/home/user/Pictures"
console.log(simplifyPath("/../")); // Output: "/"
console.log(simplifyPath("/.../a/../b/c/../d/./")); // Output: "/.../b/d"