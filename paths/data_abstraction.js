// Question 7
/* You can use only the following pre-declared functions in your solution:
- `make_rat`
- `numer`
- `denom`
- `add_rat`
- `sub_rat`
- `mul_rat`
- `div_rat`
- `equal_rat`
- `gcd`
*/

// Given two rational numbers rat1, rat2,
// return true iff rat1 <= rat2.

function lte(rat1, rat2) {
    // YOUR SOLUTION HERE
    return numer(rat1) / denom(rat1) <= numer(rat2) / denom(rat2);
}


// Question 8
// The function lte has been pre-declared for you.

function gte(x, y) {
    // YOUR SOLUTION HERE
    return !lte(x, y) || x === y;
}

function eq(x, y) {
    // YOUR SOLUTION HERE
    return lte(x, y) && x === y;
}

function lt(x, y) {
    // YOUR SOLUTION HERE
    return lte(x, y) && x!== y;
}

function gt(x, y) {
    // YOUR SOLUTION HERE
    return !lte(x, y);
}


// Question 9
/* For reference:

function length(xs) {
    return is_null(xs) ? 0 : 1 + length(tail(xs));
}
*/

// Given a list of numbers xs,
// return the sum of all numbers in xs.

function sum(xs) {
    // YOUR SOLUTION HERE
    return is_null(xs)
        ? 0
        : head(xs) + sum(tail(xs));
}
