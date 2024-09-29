func removeElement(nums []int, val int) int {
    k := 0 // Counter for elements not equal to val
    for _, num := range nums {
        if num != val {
            nums[k] = num // Place the element at the next position
            k++
        }
    }
    return k // Return the count of elements not equal to val
}