var letterMap = []string{"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"}

func letterCombinations(digits string) []string {
    var result []string
    if len(digits) == 0 {
        return result
    }
    
    var backtrack func(index int, current []byte)
    backtrack = func(index int, current []byte) {
        if index == len(digits) {
            result = append(result, string(current))
            return
        }
        
        letters := letterMap[digits[index] - '0']
        for i := 0; i < len(letters); i++ {
            current = append(current, letters[i])
            backtrack(index + 1, current)
            current = current[:len(current)-1]
        }
    }
    
    backtrack(0, []byte{})
    return result
}