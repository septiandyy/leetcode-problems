function trap(height) {
    const n = height.length;
    if (n === 0) return 0;
  
    let left = 0;
    let right = n - 1;
    let leftMax = 0;
    let rightMax = 0;
    let waterTrapped = 0;
  
    while (left <= right) {
      if (height[left] <= height[right]) {
        if (height[left] >= leftMax) {
          leftMax = height[left];
        } else {
          waterTrapped += leftMax - height[left];
        }
        left++;
      } else {
        if (height[right] >= rightMax) {
          rightMax = height[right];
        } else {
          waterTrapped += rightMax - height[right];
        }
        right--;
      }
    }
  
    return waterTrapped;
  }
  
  // Example usage:
  console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1])); // Output: 6
  console.log(trap([4,2,0,3,2,5])); // Output: 9