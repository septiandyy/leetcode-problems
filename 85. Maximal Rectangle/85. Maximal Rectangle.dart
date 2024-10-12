class Solution {
  int maximalRectangle(List<List<String>> matrix) {
    if (matrix.isEmpty || matrix[0].isEmpty) return 0;
    int rows = matrix.length, cols = matrix[0].length;
    List<int> heights = List.filled(cols, 0);
    int maxArea = 0;

    for (int i = 0; i < rows; i++) {
      for (int j = 0; j < cols; j++) {
        if (matrix[i][j] == '1') {
          heights[j]++;
        } else {
          heights[j] = 0;
        }
      }
      maxArea = max(maxArea, largestRectangleArea(heights));
    }

    return maxArea;
  }

  int largestRectangleArea(List<int> heights) {
    List<int> stack = [];
    int maxArea = 0;
    int i = 0;

    while (i <= heights.length) {
      int h = (i == heights.length) ? 0 : heights[i];
      if (stack.isEmpty || h >= heights[stack.last]) {
        stack.add(i);
        i++;
      } else {
        int height = heights[stack.removeLast()];
        int width = stack.isEmpty ? i : i - stack.last - 1;
        maxArea = max(maxArea, height * width);
      }
    }

    return maxArea;
  }

  int max(int a, int b) => a > b ? a : b;
}