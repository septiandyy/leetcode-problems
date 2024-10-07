func simplifyPath(path string) string {
    stack := []string{}
    parts := strings.Split(path, "/")
    
    for _, part := range parts {
        if part == "." || part == "" {
            continue
        }
        if part == ".." {
            if len(stack) > 0 {
                stack = stack[:len(stack)-1]
            }
        } else {
            stack = append(stack, part)
        }
    }
    
    return "/" + strings.Join(stack, "/")
}