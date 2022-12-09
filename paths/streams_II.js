// Question 1
const alternating_ones = pair(1, 
    () => pair(-1, () => alternating_ones));


// Question 2
function make_alternating_stream(s) {

    // YOUR SOLUTION HERE
    return is_null(s)
        ? s
        : is_null(stream_tail(s))
        ? s
        : pair(head(s), () => pair(- head(stream_tail(s)), 
            () => make_alternating_stream(stream_tail(stream_tail(s)))));
}


// Question 3
function zip_streams(s1, s2) {

    // YOUR SOLUTION HERE
    return pair(head(s1), () => zip_streams(s2, stream_tail(s1)));

}


// Question 4
function every_other(s) {

    // YOUR SOLUTION HERE
    return pair(head(s), () => every_other(stream_tail(stream_tail(s))));

}


// Question 5
function partial_sums(s) {

    // YOUR SOLUTION HERE
    function helper(acc, stream) {
        return pair(head(stream) + acc, () => 
            helper(acc + head(stream), stream_tail(stream)));
    }
    return helper(0, s);

}
