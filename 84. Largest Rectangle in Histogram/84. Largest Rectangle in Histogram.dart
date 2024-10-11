class Solution {
  int largestRectangleArea(List<int> heights) {
    List<int> stack = [];
    int maxArea = 0;
    heights.add(0);

    for (int i = 0; i < heights.length; i++) {
      while (stack.isNotEmpty && heights[i] < heights[stack.last]) {
        int height = heights[stack.removeLast()];
        int width = stack.isEmpty ? i : i - stack.last - 1;
        maxArea = max(maxArea, height * width);
      }
      stack.add(i);
    }

    return maxArea;
  }
}