def minimum_total(triangle)
    dp = triangle.last.dup
    
    (triangle.size - 2).downto(0) do |i|
        (0..i).each do |j|
            dp[j] = triangle[i][j] + [dp[j], dp[j + 1]].min
        end
    end
    
    dp[0]
end