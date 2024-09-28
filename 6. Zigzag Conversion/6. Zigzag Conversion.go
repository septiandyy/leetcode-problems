func convert(s string, numRows int) string {
    if numRows == 1 {
        return s
    }
    
    rows := make([]strings.Builder, min(numRows, len(s)))
    curRow := 0
    goingDown := false
    
    for _, c := range s {
        rows[curRow].WriteRune(c)
        if curRow == 0 || curRow == numRows-1 {
            goingDown = !goingDown
        }
        if goingDown {
            curRow++
        } else {
            curRow--
        }
    }
    
    var result strings.Builder
    for _, row := range rows {
        result.WriteString(row.String())
    }
    
    return result.String()
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}