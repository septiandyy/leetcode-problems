func insert(intervals [][]int, newInterval []int) [][]int {
    result := make([][]int, 0)
    i := 0
    n := len(intervals)

    // Add intervals before newInterval
    for i < n && intervals[i][1] < newInterval[0] {
        result = append(result, intervals[i])
        i++
    }

    // Merge overlapping intervals
    for i < n && intervals[i][0] <= newInterval[1] {
        newInterval[0] = min(newInterval[0], intervals[i][0])
        newInterval[1] = max(newInterval[1], intervals[i][1])
        i++
    }

    // Add merged interval
    result = append(result, newInterval)

    // Add remaining intervals
    for i < n {
        result = append(result, intervals[i])
        i++
    }

    return result
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}