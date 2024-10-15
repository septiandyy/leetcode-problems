function restoreIpAddresses(s: string): string[] {
    // creating empty lists for storing valid IP
    // addresses, and each segment of IP
    var result = [];
    var segments = [];
    backtrack({ s, prevDot: -1, dots: 3, segments, result });
    return result;
};

function valid(segment) {
    var m = segment.length; // storing the length of each segment
    if (m > 3) {
        // each segment's length should be less than 3
        return false;
    }
    /* 
        Check if the current segment is valid for either
        one of following conditions:
        1. Check if the current segment is less or equal
           to 255.  
        2. Check if the length of segment is 1. the first
           character of segment can be `0` only if length
           of segment is 1.
      */
    return segment[0] != "0"
        ? parseInt(segment) <= 255
        : m == 1;
}

type UpdateSegmentArgs = {
    s: string;
    currDot: number;
    segments: string[];
    result: string[];
};

function updateSegment({
    s,
    currDot,
    segments,
    result,
}: UpdateSegmentArgs) {
    /*
        updateSegment will append the current list of
        segments to the list of result.
      */
    var segment = s.substring(currDot + 1, s.length);
    if (valid(segment)) {
        // if the segment is acceptable
        segments.push(segment); // add it to the list of segments
        // Utility function to concate the entries of the
        // segments list separated by the dot delimeter
        var ip = segments.join(".");
        result.push(ip);
        segments.pop(); // remove the top segment
    }
}

type BackTrackArgs = {
    /**
     * the input string
     */
    s: string;
    /**
     * the position of the previously placed
     */
    prevDot: number;
    /**
     * number of dots to place
     */
    dots: number;
    /**
     *
     */
    segments: string[];
    result: string[];
};

function backtrack({
    s,
    prevDot,
    dots,
    segments,
    result,
}: BackTrackArgs) {
    var size = s.length;

    // The current dot currDot could be placed in a range
    // from prevDot + 1 to prevDot + 4. The dot couldn't
    // be placed after the last character in the string.
    var maxPos = Math.min(size - 1, prevDot + 4);
    for (
        var currDot = prevDot + 1;
        currDot < maxPos;
        currDot++
    ) {
        var segment = s.substring(prevDot + 1, currDot + 1);
        if (valid(segment)) {
            // place dot
            segments.push(segment);
            // if all 3 dots are placed,
            // Add the solution to the output
            if (dots - 1 == 0) {
                updateSegment({ s, currDot, segments, result });
            } else {
                // continue to place dots
                backtrack({
                    s,
                    prevDot: currDot,
                    dots: dots - 1,
                    segments,
                    result,
                });
            }
            // remove the last placed dot
            segments.pop();
        }
    }
}