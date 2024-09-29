use std::collections::{HashMap,HashSet};

impl Solution {
    pub fn find_substring(s: String, words: Vec<String>) -> Vec<i32> {
        fn is_match(s: &str, words_hash: &HashMap<&str,i32>,word_len: usize,total_words: usize, cache: &mut HashSet<String>) -> bool {
            if cache.contains(&s.to_string()) { return true }
            let (mut found_words, mut words_count) = (HashMap::new(),0);
            for idx in (0..s.len()).step_by(word_len) {
                let sub = &s[idx..idx+word_len];
                if words_hash.contains_key(sub) && 
                    (!found_words.contains_key(sub) || found_words[sub] < words_hash[sub]) {                    
                        *found_words.entry(sub).or_insert(0) += 1;
                        words_count += 1;
                        if words_count == total_words { cache.insert(s.to_string()); break }
                }
            }
            words_count == total_words
        }
        if words.len() == 0 { return vec![] }
        let mut words_hash = HashMap::new();
        for word in &words { *words_hash.entry(word.as_str()).or_insert(0) += 1; }
        let (total_words,word_len) = (words.len(),words[0].len());
        if s.len() < word_len * total_words { return vec![] }        
        let mut cache = HashSet::new();
        (0..s.len() - word_len*total_words + 1)
            .filter(|idx| is_match(&s[*idx..*idx+word_len*total_words], &words_hash, word_len, total_words,&mut cache) )
            .map(|item| item as i32)
            .collect()
    }
}