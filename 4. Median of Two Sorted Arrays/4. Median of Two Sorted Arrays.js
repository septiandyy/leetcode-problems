function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length > nums2.length) {
        // Ensure nums1 is the smaller array
        [nums1, nums2] = [nums2, nums1];
    }

    const m = nums1.length;
    const n = nums2.length;
    let imin = 0, imax = m, halfLen = Math.floor((m + n + 1) / 2);

    while (imin <= imax) {
        let i = Math.floor((imin + imax) / 2);
        let j = halfLen - i;

        if (i < m && nums2[j - 1] > nums1[i]) {
            imin = i + 1; // i is too small, must increase it
        } else if (i > 0 && nums1[i - 1] > nums2[j]) {
            imax = i - 1; // i is too big, must decrease it
        } else {
            // i is perfect
            let maxOfLeft, minOfRight;

            if (i === 0) { maxOfLeft = nums2[j - 1]; }
            else if (j === 0) { maxOfLeft = nums1[i - 1]; }
            else { maxOfLeft = Math.max(nums1[i - 1], nums2[j - 1]); }

            if ((m + n) % 2 === 1) {
                return maxOfLeft; // Odd case
            }

            if (i === m) { minOfRight = nums2[j]; }
            else if (j === n) { minOfRight = nums1[i]; }
            else { minOfRight = Math.min(nums1[i], nums2[j]); }

            return (maxOfLeft + minOfRight) / 2.0; // Even case
        }
    }

    return 0; // If inputs are invalid, should not reach here with valid input
}

// Example usage:
console.log(findMedianSortedArrays([1, 3], [2])); // Output: 2.0
console.log(findMedianSortedArrays([1, 2], [3, 4])); // Output: 2.5