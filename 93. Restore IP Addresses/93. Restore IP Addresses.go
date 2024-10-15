func restoreIpAddresses(s string) []string { 
    res := []string{}

    for a := 1; a <= 3; a++ {
        for b := 1; b <= 3; b++ {
            for c := 1; c <= 3; c++ {

                d := len(s) - (a + b + c)
                if d > 0 && d <= 3 && a+b+c+d == len(s) {
                    A, _ := strconv.Atoi(s[:a])
                    B, _ := strconv.Atoi(s[a:a+b])
                    C, _ := strconv.Atoi(s[a+b:a+b+c])
                    D, _ := strconv.Atoi(s[a+b+c:])

                    if A <= 255 && B <= 255 && C <= 255 && D <= 255 {
                        addr := fmt.Sprintf("%d.%d.%d.%d", A, B, C, D)
                        
                        // To check if there was any leading zeros, 
                        // If leading zeros was there, then len will be reduced
                        // +3, for 3 '.'
                        if len(addr) == len(s) + 3 {
                            res = append(res, addr)
                        }
                    } 
                }
            }
        }
    }

    return res
}