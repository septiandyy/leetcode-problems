func generateParenthesis(n int) []string {
    var result []string
    backtrack(&result, "", 0, 0, n)
    return result
}

func backtrack(result *[]string, current string, open int, close int, max int) {
    if len(current) == max * 2 {
        *result = append(*result, current)
        return
    }
    
    if open < max {
        backtrack(result, current + "(", open + 1, close, max)
    }
    if close < open {
        backtrack(result, current + ")", open, close + 1, max)
    }
}