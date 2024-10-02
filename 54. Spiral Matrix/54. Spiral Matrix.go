func spiralOrder(matrix [][]int) []int {
    if len(matrix) == 0 || len(matrix[0]) == 0 {
        return []int{}
    }
    
    m, n := len(matrix), len(matrix[0])
    result := make([]int, 0, m*n)
    left, right, top, bottom := 0, n-1, 0, m-1
    
    for left <= right && top <= bottom {
        for i := left; i <= right; i++ {
            result = append(result, matrix[top][i])
        }
        top++
        
        for i := top; i <= bottom; i++ {
            result = append(result, matrix[i][right])
        }
        right--
        
        if top <= bottom {
            for i := right; i >= left; i-- {
                result = append(result, matrix[bottom][i])
            }
            bottom--
        }
        
        if left <= right {
            for i := bottom; i >= top; i-- {
                result = append(result, matrix[i][left])
            }
            left++
        }
    }
    
    return result
}