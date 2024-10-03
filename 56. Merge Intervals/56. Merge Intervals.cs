public class Solution {
    public int[][] Merge(int[][] intervals) {
        if (intervals.Length <= 1)
            return intervals;

        Array.Sort(intervals, (a, b) => a[0].CompareTo(b[0]));
        var result = new List<int[]>();
        var current = intervals[0];
        result.Add(current);

        foreach (var interval in intervals) {
            if (current[1] >= interval[0]) {
                current[1] = Math.Max(current[1], interval[1]);
            } else {
                current = interval;
                result.Add(current);
            }
        }

        return result.ToArray();
    }
}