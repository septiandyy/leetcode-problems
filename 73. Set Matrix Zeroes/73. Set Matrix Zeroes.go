func setZeroes(matrix [][]int)  {
    m, n := len(matrix), len(matrix[0])
    firstRow, firstCol := false, false
    
    // Check if first row should be set to zero
    for j := 0; j < n; j++ {
        if matrix[0][j] == 0 {
            firstRow = true
            break
        }
    }
    
    // Check if first column should be set to zero
    for i := 0; i < m; i++ {
        if matrix[i][0] == 0 {
            firstCol = true
            break
        }
    }
    
    // Use first row and column as markers
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            if matrix[i][j] == 0 {
                matrix[i][0] = 0
                matrix[0][j] = 0
            }
        }
    }
    
    // Set zeros based on markers
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            if matrix[i][0] == 0 || matrix[0][j] == 0 {
                matrix[i][j] = 0
            }
        }
    }
    
    // Set first row to zero if needed
    if firstRow {
        for j := 0; j < n; j++ {
            matrix[0][j] = 0
        }
    }
    
    // Set first column to zero if needed
    if firstCol {
        for i := 0; i < m; i++ {
            matrix[i][0] = 0
        }
    }
}