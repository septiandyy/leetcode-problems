function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let i: number = m - 1;  // Last element index of nums1
    let j: number = n - 1;  // Last element index of nums2
    let k: number = m + n - 1;  // Last element index of merged array

    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) {
            nums1[k--] = nums1[i--];
        } else {
            nums1[k--] = nums2[j--];
        }
    }
};