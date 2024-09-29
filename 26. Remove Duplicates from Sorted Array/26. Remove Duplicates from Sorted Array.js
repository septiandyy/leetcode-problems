function removeDuplicates(nums) {
    if (nums.length === 0) return 0;

    let uniqueIndex = 0; // Index to place the next unique element

    // Iterate over the array starting from the second element
    for (let i = 1; i < nums.length; i++) {
        // If the current element is not equal to the last unique element
        if (nums[i] !== nums[uniqueIndex]) {
            uniqueIndex++; // Move to the next position
            nums[uniqueIndex] = nums[i]; // Update the array with the new unique element
        }
    }

    return uniqueIndex + 1; // The length of unique elements
}

// Example usage:
let nums1 = [1, 1, 2];
let k1 = removeDuplicates(nums1);
console.log(k1); // Output: 2
console.log(nums1.slice(0, k1)); // Output: [1, 2]

let nums2 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
let k2 = removeDuplicates(nums2);
console.log(k2); // Output: 5
console.log(nums2.slice(0, k2)); // Output: [0, 1, 2, 3, 4]

// Additional example
let nums3 = [-10, -10, -5, -5, 0, 1, 2, 2, 2, 3];
let k3 = removeDuplicates(nums3);
console.log(k3); // Output: 7
console.log(nums3.slice(0, k3)); // Output: [-10, -5, 0, 1, 2, 3]