function minWindow(s: string, t: string): string {
    const need: number[] = new Array(128).fill(0);
    const have: number[] = new Array(128).fill(0);
    let needCount = 0, haveCount = 0;
    let left = 0, start = 0, minLen = s.length + 1;

    for (const c of t) {
        if (need[c.charCodeAt(0)]++ === 0) needCount++;
    }

    for (let right = 0; right < s.length; right++) {
        if (++have[s.charCodeAt(right)] === need[s.charCodeAt(right)]) haveCount++;

        while (haveCount === needCount) {
            if (right - left + 1 < minLen) {
                start = left;
                minLen = right - left + 1;
            }
            if (--have[s.charCodeAt(left)] < need[s.charCodeAt(left)]) haveCount--;
            left++;
        }
    }

    return minLen > s.length ? "" : s.slice(start, start + minLen);
}