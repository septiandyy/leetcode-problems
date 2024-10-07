# @param {String} path
# @return {String}
def simplify_path(path)
    stack = []
    parts = path.split('/')
    
    parts.each do |part|
        next if part == '.' || part.empty?
        if part == '..'
            stack.pop if !stack.empty?
        else
            stack.push(part)
        end
    end
    
    '/' + stack.join('/')
end