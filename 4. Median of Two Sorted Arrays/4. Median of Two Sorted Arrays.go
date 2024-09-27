import (
    "math"
)

func findMedianSortedArrays(nums1 []int, nums2 []int) float64 {
    if len(nums1) > len(nums2) {
        return findMedianSortedArrays(nums2, nums1)
    }
    
    m, n := len(nums1), len(nums2)
    left, right := 0, m
    
    for left <= right {
        partitionX := (left + right) / 2
        partitionY := (m + n + 1) / 2 - partitionX
        
        maxLeftX := math.MinInt32
        if partitionX > 0 {
            maxLeftX = nums1[partitionX-1]
        }
        
        minRightX := math.MaxInt32
        if partitionX < m {
            minRightX = nums1[partitionX]
        }
        
        maxLeftY := math.MinInt32
        if partitionY > 0 {
            maxLeftY = nums2[partitionY-1]
        }
        
        minRightY := math.MaxInt32
        if partitionY < n {
            minRightY = nums2[partitionY]
        }
        
        if maxLeftX <= minRightY && maxLeftY <= minRightX {
            if (m+n)%2 == 0 {
                return float64(max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2.0
            }
            return float64(max(maxLeftX, maxLeftY))
        } else if maxLeftX > minRightY {
            right = partitionX - 1
        } else {
            left = partitionX + 1
        }
    }
    
    panic("Input arrays are not sorted.")
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}