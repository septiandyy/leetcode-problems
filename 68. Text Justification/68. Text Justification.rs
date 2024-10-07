impl Solution {
    pub fn full_justify(words: Vec<String>, max_width: i32) -> Vec<String> {
        let max_width = max_width as usize;
        let mut result = Vec::new();
        let mut current_line: Vec<String> = Vec::new();
        let mut current_length = 0;

        for word in words {
            if current_length + word.len() + current_line.len() > max_width {
                // Justify current line
                let spaces_to_distribute = max_width - current_length;
                let gaps = current_line.len().saturating_sub(1);
                
                if gaps > 0 {
                    let spaces_per_gap = spaces_to_distribute / gaps;
                    let extra_spaces = spaces_to_distribute % gaps;
                    
                    let mut line = String::new();
                    for (i, w) in current_line.iter().enumerate() {
                        line.push_str(w);
                        if i < gaps {
                            line.push_str(&" ".repeat(spaces_per_gap + if i < extra_spaces { 1 } else { 0 }));
                        }
                    }
                    result.push(line);
                } else {
                    // Only one word in the line
                    result.push(format!("{}{}", current_line[0], " ".repeat(spaces_to_distribute)));
                }

                // Reset for next line
                current_line.clear();
                current_length = 0;
            }

            current_length += word.len();
            current_line.push(word);
        }

        // Handle last line (left-justified)
        if !current_line.is_empty() {
            let mut last_line = current_line.join(" ");
            last_line.push_str(&" ".repeat(max_width - last_line.len()));
            result.push(last_line);
        }

        result
    }
}