// Question 6
function n_of_n_stream() {
    // YOUR SOLUTION HERE
    function helper(a, b) {
        return a > b
            ? helper(1, b + 1)
            : pair(b, () => helper(a + 1, b));
    }
    return helper(1, 1);
}


// Question 7
function shorten_stream(s, k) {
    // YOUR SOLUTION HERE
    return is_null(s) || k === 0
        ? null
        :pair(head(s), () => shorten_stream(stream_tail(s), k - 1));
}
