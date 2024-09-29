function removeElement(nums, val) {
    let writeIndex = 0; // Index where the next non-val element will be written

    // Iterate through the array
    for (let readIndex = 0; readIndex < nums.length; readIndex++) {
        // If the current element is not equal to the target value, write it at the writeIndex
        if (nums[readIndex] !== val) {
            nums[writeIndex] = nums[readIndex];
            writeIndex++; // Move to the next position
        }
    }

    return writeIndex; // The number of elements not equal to val
}

// Example usage:
let nums1 = [3, 2, 2, 3];
let val1 = 3;
let k1 = removeElement(nums1, val1);
console.log(k1); // Output: 2
console.log(nums1.slice(0, k1)); // Output: [2, 2]

let nums2 = [0, 1, 2, 2, 3, 0, 4, 2];
let val2 = 2;
let k2 = removeElement(nums2, val2);
console.log(k2); // Output: 5
console.log(nums2.slice(0, k2)); // Output: [0, 1, 3, 0, 4]

// Additional example
let nums3 = [1, 1, 1, 1, 2, 2, 3];
let val3 = 1;
let k3 = removeElement(nums3, val3);
console.log(k3); // Output: 3
console.log(nums3.slice(0, k3)); // Output: [2, 2, 3]