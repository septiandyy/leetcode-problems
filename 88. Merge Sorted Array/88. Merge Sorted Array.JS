function merge(nums1, m, nums2, n) {
    // Initialize pointers for nums1, nums2, and the end of nums1
    let i = m - 1;  // Pointer for the end of valid elements in nums1
    let j = n - 1;  // Pointer for the end of nums2
    let k = m + n - 1; // Pointer for the end of nums1

    // Merge nums1 and nums2 from end to start
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }

    // If there are remaining elements in nums2, copy them
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}