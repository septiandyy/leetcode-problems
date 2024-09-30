func multiply(num1 string, num2 string) string {
    n1, n2 := len(num1), len(num2)
    res := make([]int, n1+n2)
    
    for i := n1 - 1; i >= 0; i-- {
        for j := n2 - 1; j >= 0; j-- {
            mul := int(num1[i] - '0') * int(num2[j] - '0')
            sum := res[i+j+1] + mul
            
            res[i+j+1] = sum % 10
            res[i+j] += sum / 10
        }
    }
    
    var sb strings.Builder
    leadingZero := true
    
    for _, digit := range res {
        if digit != 0 || !leadingZero {
            sb.WriteRune(rune(digit + '0'))
            leadingZero = false
        }
    }
    
    if sb.Len() == 0 {
        return "0"
    }
    
    return sb.String()
}