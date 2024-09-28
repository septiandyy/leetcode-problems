function maxArea(height: number[]): number {
    let left: number = 0, right: number = height.length - 1;
    let maxWater: number = 0;
    
    while (left < right) {
        const width: number = right - left;
        const h: number = Math.min(height[left], height[right]);
        const area: number = width * h;
        
        maxWater = Math.max(maxWater, area);
        
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
    }
    
    return maxWater;
}