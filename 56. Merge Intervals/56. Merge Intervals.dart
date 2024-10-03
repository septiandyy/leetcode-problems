class Solution {
  List<List<int>> merge(List<List<int>> intervals) {
    if (intervals.isEmpty) return [];
    
    intervals.sort((a, b) => a[0].compareTo(b[0]));
    List<List<int>> merged = [];
    
    for (var interval in intervals) {
      if (merged.isEmpty || merged.last[1] < interval[0]) {
        merged.add(interval);
      } else {
        merged.last[1] = merged.last[1] > interval[1] ? merged.last[1] : interval[1];
      }
    }
    
    return merged;
  }
}