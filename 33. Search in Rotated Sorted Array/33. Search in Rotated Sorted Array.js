const search = (nums, target) => {
    let left = 0;
    let right = nums.length - 1;

    // Find the pivot index
    while (left < right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] > nums[right]) {
            // Pivot is in the right half
            left = mid + 1;
        } else {
            // Pivot is in the left half
            right = mid;
        }
    }

    // The index of the smallest value
    const pivot = left;

    // Reset the search range
    left = 0;
    right = nums.length - 1;

    // Perform binary search in the appropriate half
    if (target >= nums[pivot] && target <= nums[right]) {
        left = pivot;
    } else {
        right = pivot - 1;
    }

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1; // Target not found
};

// Example usage
console.log(search([4,5,6,7,0,1,2], 0)); // Output: 4
console.log(search([4,5,6,7,0,1,2], 3)); // Output: -1
console.log(search([1], 0)); // Output: -1