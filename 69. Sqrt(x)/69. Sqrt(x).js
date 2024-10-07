function mySqrt(x) {
    if (x < 2) return x; // Handle the cases for 0 and 1 directly

    let left = 0;
    let right = x;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let midSquared = mid * mid;

        if (midSquared === x) {
            return mid;
        } else if (midSquared < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right; // `right` is the floor of the square root of `x`
}

// Example usage:
console.log(mySqrt(4));  // Output: 2
console.log(mySqrt(8));  // Output: 2
console.log(mySqrt(16)); // Output: 4
console.log(mySqrt(0));  // Output: 0