use std::collections::HashMap;

impl Solution {
    pub fn group_anagrams(strs: Vec<String>) -> Vec<Vec<String>> {
        let mut anagram_groups: HashMap<Vec<char>, Vec<String>> = HashMap::new();
        
        for s in strs {
            let mut sorted_chars: Vec<char> = s.chars().collect();
            sorted_chars.sort_unstable();
            anagram_groups.entry(sorted_chars).or_insert(Vec::new()).push(s);
        }
        
        anagram_groups.into_values().collect()
    }
}