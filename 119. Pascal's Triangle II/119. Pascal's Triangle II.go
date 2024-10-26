func getRow(rowIndex int) []int {
    row := make([]int, rowIndex+1)
    row[0] = 1
    
    for i := 1; i <= rowIndex; i++ {
        prev := row[0]
        for j := 1; j < i; j++ {
            temp := row[j]
            row[j] = prev * (rowIndex - j + 1) / j
            prev = temp
        }
        row[i] = 1
    }
    
    return row
}