class Solution {
  List<List<int>> insert(List<List<int>> intervals, List<int> newInterval) {
    List<List<int>> result = [];
    int i = 0;
    int n = intervals.length;

    // Add intervals before newInterval
    while (i < n && intervals[i][1] < newInterval[0]) {
      result.add(intervals[i]);
      i++;
    }

    // Merge overlapping intervals
    while (i < n && intervals[i][0] <= newInterval[1]) {
      newInterval[0] = newInterval[0] < intervals[i][0] ? newInterval[0] : intervals[i][0];
      newInterval[1] = newInterval[1] > intervals[i][1] ? newInterval[1] : intervals[i][1];
      i++;
    }

    // Add merged interval
    result.add(newInterval);

    // Add remaining intervals
    while (i < n) {
      result.add(intervals[i]);
      i++;
    }

    return result;
  }
}