function insert(intervals, newInterval) {
    // Initialize result array with the new interval
    let result = [];

    // Initialize index to track the current position in the intervals array
    let i = 0;

    // Iterate through the intervals array
    while (i < intervals.length && intervals[i][1] < newInterval[0]) {
        // Add non-overlapping intervals to the result array
        result.push(intervals[i]);
        i++;
    }

    // Merge overlapping intervals with the new interval
    while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
        newInterval = [Math.min(newInterval[0], intervals[i][0]), Math.max(newInterval[1], intervals[i][1])];
        i++;
    }

    // Add the merged new interval to the result array
    result.push(newInterval);

    // Add remaining non-overlapping intervals to the result array
    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;
}

// Example usage:
let intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
let newInterval = [4, 8];
console.log(insert(intervals, newInterval));  // Output: [[1, 2], [3, 10], [12, 16]]

intervals = [[1, 4], [4, 5]];
newInterval = [1, 5];
console.log(insert(intervals, newInterval));  // Output: [[1, 5]]