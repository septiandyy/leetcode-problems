class Solution {
    public int largestRectangleArea(int[] heights) {
        Stack<Integer> stack = new Stack<>();
        int maxArea = 0;
        int[] h = new int[heights.length + 1];
        System.arraycopy(heights, 0, h, 0, heights.length);
        
        for (int i = 0; i <= h.length; i++) {
            int height = (i == h.length) ? 0 : h[i];
            while (!stack.isEmpty() && height < h[stack.peek()]) {
                int hh = h[stack.pop()];
                int width = stack.isEmpty() ? i : i - stack.peek() - 1;
                maxArea = Math.max(maxArea, hh * width);
            }
            stack.push(i);
        }
        
        return maxArea;
    }
}