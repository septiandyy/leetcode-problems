const searchRange = (nums, target) => {
    const findFirst = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                right = mid - 1; // continue searching to the left
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    };

    const findLast = (nums, target) => {
        let left = 0;
        let right = nums.length - 1;
        let result = -1;

        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
            if (nums[mid] === target) {
                result = mid;
                left = mid + 1; // continue searching to the right
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return result;
    };

    const firstPos = findFirst(nums, target);
    if (firstPos === -1) return [-1, -1]; // target not found

    const lastPos = findLast(nums, target);
    return [firstPos, lastPos];
};

// Example usage
console.log(searchRange([5,7,7,8,8,10], 8)); // Output: [3,4]
console.log(searchRange([5,7,7,8,8,10], 6)); // Output: [-1,-1]
console.log(searchRange([], 0)); // Output: [-1,-1]