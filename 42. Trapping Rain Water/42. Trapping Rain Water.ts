function trap(height: number[]): number {
    let sumVolume = 0;
  
    for (let times = 0; times < 2; times++) {
      let i = 0, j = 1, curVolume = 0;
      while(j < height.length) {
        if (height[i] <= height[j]) {
          i = j;
          sumVolume += curVolume;
          curVolume = 0;
        } 
        else {
          curVolume += height[i] - height[j];
        }
        j++;
      }
      height = height.slice(i).reverse();
    }
  
    return sumVolume;
  };