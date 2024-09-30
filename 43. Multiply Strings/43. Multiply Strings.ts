function multiply(num1: string, num2: string): string {
    const n1 = num1.length, n2 = num2.length;
    const res = new Array(n1 + n2).fill(0);
    
    for (let i = n1 - 1; i >= 0; i--) {
        for (let j = n2 - 1; j >= 0; j--) {
            const mul = parseInt(num1[i]) * parseInt(num2[j]);
            const sum = res[i + j + 1] + mul;
            
            res[i + j + 1] = sum % 10;
            res[i + j] += Math.floor(sum / 10);
        }
    }
    
    while (res.length > 1 && res[0] === 0) {
        res.shift();
    }
    
    return res.join('');
}