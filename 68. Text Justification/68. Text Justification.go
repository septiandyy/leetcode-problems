import (
    "bytes"
    "strings"
)

func fullJustify(words []string, maxWidth int) []string {
    var result []string
    start, length := 0, 0
    
    for i := 0; i <= len(words); i++ {
        if i == len(words) || length+len(words[i])+i-start > maxWidth {
            var buffer bytes.Buffer
            spaces := maxWidth - length
            gaps := i - start - 1
            
            for j := start; j < i; j++ {
                buffer.WriteString(words[j])
                if j == i-1 {
                    break
                }
                
                var extraSpaces int
                if i == len(words) || gaps == 0 {
                    extraSpaces = 1
                } else {
                    extraSpaces = spaces/gaps
                    if spaces%gaps > 0 {
                        extraSpaces++
                    }
                }
                buffer.WriteString(strings.Repeat(" ", extraSpaces))
                spaces -= extraSpaces
                gaps--
            }
            
            buffer.WriteString(strings.Repeat(" ", spaces))
            result = append(result, buffer.String())
            
            start = i
            length = 0
        }
        if i < len(words) {
            length += len(words[i])
        }
    }
    
    return result
}