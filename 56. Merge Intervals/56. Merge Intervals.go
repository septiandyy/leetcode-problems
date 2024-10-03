import "sort"

func merge(intervals [][]int) [][]int {
    if len(intervals) <= 1 {
        return intervals
    }
    
    sort.Slice(intervals, func(i, j int) bool {
        return intervals[i][0] < intervals[j][0]
    })
    
    merged := [][]int{intervals[0]}
    
    for _, interval := range intervals[1:] {
        if interval[0] <= merged[len(merged)-1][1] {
            if interval[1] > merged[len(merged)-1][1] {
                merged[len(merged)-1][1] = interval[1]
            }
        } else {
            merged = append(merged, interval)
        }
    }
    
    return merged
}