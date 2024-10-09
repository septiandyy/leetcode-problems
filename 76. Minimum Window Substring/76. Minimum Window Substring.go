func minWindow(s string, t string) string {
    need, have := [128]int{}, [128]int{}
    needCount, haveCount := 0, 0
    left, start, minLen := 0, 0, len(s)+1

    for _, c := range t {
        if need[c]++; need[c] == 1 {
            needCount++
        }
    }

    for right := 0; right < len(s); right++ {
        if have[s[right]]++; have[s[right]] == need[s[right]] {
            haveCount++
        }

        for haveCount == needCount {
            if right-left+1 < minLen {
                start = left
                minLen = right - left + 1
            }
            if have[s[left]]--; have[s[left]] < need[s[left]] {
                haveCount--
            }
            left++
        }
    }

    if minLen > len(s) {
        return ""
    }
    return s[start : start+minLen]
}