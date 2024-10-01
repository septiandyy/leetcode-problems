func groupAnagrams(strs []string) [][]string {
    anagramGroups := make(map[string][]string)
    
    for _, str := range strs {
        sortedStr := sortString(str)
        anagramGroups[sortedStr] = append(anagramGroups[sortedStr], str)
    }
    
    result := make([][]string, 0, len(anagramGroups))
    for _, group := range anagramGroups {
        result = append(result, group)
    }
    
    return result
}

func sortString(s string) string {
    chars := []rune(s)
    sort.Slice(chars, func(i, j int) bool {
        return chars[i] < chars[j]
    })
    return string(chars)
}