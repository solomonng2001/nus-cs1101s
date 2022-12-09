// Question 9
// put the first n elements of xs into a list
function take(xs, n) {
    // YOUR SOLUTION HERE
    return n === 0
        ? null
        : pair(head(xs), take(tail(xs), n - 1));
}

// drop the first n elements from list, return rest
function drop(xs, n) {
    // YOUR SOLUTION HERE
    return n === 0
        ? xs
        : drop(tail(xs), n - 1);
}


// Question 10
function min(a, b) {
    return a < b ? a : b;
}

// given a non-empty list xs, returns the smallest item in xs
function smallest(xs) {
    // YOUR SOLUTION HERE
    return length(xs) === 1
        ? head(xs)
        : min(head(xs), smallest(tail(xs)));
}


// Question 11
// removes the first instance of x from xs
function remove(x, xs) {
    // YOUR SOLUTION HERE
    return is_null(xs)
        ? null
        : head(xs) === x
        ? tail(xs)
        : pair(head(xs), remove(x, tail(xs)));
}


// Question 12
function selection_sort(xs) {
    if (is_null(xs)) {
        return null;
    } else {
        // We pick the smallest element, where should it go?
        // What should we recurse on?
        // YOUR SOLUTION HERE
        const smallest_value = smallest(xs);
        return pair(smallest_value, selection_sort(remove(smallest_value, xs)));
    }
}
