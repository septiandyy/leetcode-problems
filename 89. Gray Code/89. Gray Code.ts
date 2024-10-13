function grayCode(n: number): number[] {
    const size: number = 1 << n;  // 2^n
    const result: number[] = new Array(size);
    
    for (let i = 0; i < size; i++) {
        result[i] = i ^ (i >> 1);
    }
    
    return result;
};