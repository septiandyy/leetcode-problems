function merge(intervals) {
    // Sort the intervals based on their start values
    intervals.sort((a, b) => a[0] - b[0]);

    // Initialize result with the first interval
    let result = [intervals[0]];

    // Iterate through the remaining intervals
    for (let i = 1; i < intervals.length; i++) {
        // Get the last merged interval
        let lastMerged = result[result.length - 1];

        // Check if the current interval overlaps with the last merged interval
        if (intervals[i][0] <= lastMerged[1]) {
            // Merge the current interval with the last merged interval
            result[result.length - 1] = [lastMerged[0], Math.max(lastMerged[1], intervals[i][1])];
        } else {
            // Add the current interval to the result list
            result.push(intervals[i]);
        }
    }

    return result;
}

// Example usage:
let intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(intervals));  // Output: [[1, 6], [8, 10], [15, 18]]

intervals = [[1, 4], [4, 5]];
console.log(merge(intervals));  // Output: [[1, 5]]