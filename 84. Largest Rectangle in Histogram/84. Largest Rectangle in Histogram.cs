public class Solution {
    public int LargestRectangleArea(int[] heights) {
        Stack<int> stack = new Stack<int>();
        int maxArea = 0;
        int[] h = new int[heights.Length + 1];
        Array.Copy(heights, h, heights.Length);

        for (int i = 0; i <= h.Length; i++) {
            int height = (i == h.Length) ? 0 : h[i];
            while (stack.Count > 0 && height < h[stack.Peek()]) {
                int hh = h[stack.Pop()];
                int width = stack.Count == 0 ? i : i - stack.Peek() - 1;
                maxArea = Math.Max(maxArea, hh * width);
            }
            stack.Push(i);
        }

        return maxArea;
    }
}