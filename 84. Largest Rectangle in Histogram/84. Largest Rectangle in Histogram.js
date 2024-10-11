function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    let index = 0;

    while (index < heights.length) {
        // If stack is empty or the current bar is higher than the bar at stack's top index
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {
            // Calculate the area with the height of the bar at stack's top index
            const topOfStack = stack.pop();
            const height = heights[topOfStack];
            const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
    }

    // Process the remaining bars in the stack
    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const height = heights[topOfStack];
        const width = stack.length === 0 ? index : index - stack[stack.length - 1] - 1;
        maxArea = Math.max(maxArea, height * width);
    }

    return maxArea;
}