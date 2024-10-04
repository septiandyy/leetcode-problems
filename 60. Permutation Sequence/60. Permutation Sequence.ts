function getPermutation(n: number, k: number): string {
    const factorial: number[] = [1];
    const nums: number[] = [];
    let result: string = '';
    
    for (let i = 1; i <= n; i++) {
        factorial[i] = factorial[i-1] * i;
        nums.push(i);
    }
    
    k--;  // Convert to 0-based index
    
    for (let i = 0; i < n; i++) {
        const index = Math.floor(k / factorial[n-1-i]);
        result += nums[index].toString();
        nums.splice(index, 1);
        k %= factorial[n-1-i];
    }
    
    return result;
}