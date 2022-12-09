// Question 1
// Produces a list of integers from a to b,
// assuming a, b are integers.

function enum_list(a, b) {
    // YOUR SOLUTION HERE
    return a > b
        ? null
        : pair(a, enum_list(a + 1, b));
}


// Question 2
// Produces a list of integers from a to b,
// assuming a, b are integers.

function enum_list(a, b) {
    // YOUR SOLUTION HERE
    return build_list(x => x + a, b - a + 1);
}


// Question 3
// You must use the supplied filter function.

// Given a list of integers xs, returns a list that
//   contains only the odd integers in xs.
function odd_only(xs) {
    // YOUR SOLUTION HERE
    return filter(x => x % 2 === 1, xs);
}

// Given a list of positive integers xs, returns a list that
//   contains only the prime numbers in xs.
// Hint: write a helper function.
function prime_only(xs) {
    // YOUR SOLUTION HERE
    function prime(n, k) {
        return n === 1
            ? false
            : k === 1
            ? true
            : n % k === 0 && k < n && k > 1
            ? false
            : prime(n, k - 1);
    }
    return filter(x => prime(x, x), xs);
}


// Question 4
const display = custom_display; // DO NOT EDIT.

// Calls display on every item in the list xs.
function traverse(xs) {
    // YOUR SOLUTION HERE
    return map(display, xs);
}


// Question 5
const display = custom_display; // DO NOT EDIT.

// Calls display on every item in the tree xs.
function traverse(xs) {
    // Modify this function to work on trees.
    if (is_null(xs)) {
        return null;
    } else if(is_list(head(xs))) {
        traverse(head(xs));
        traverse(tail(xs));
    } else {
        display(head(xs));
        return traverse(tail(xs));
    }
}
