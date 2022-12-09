// Question 1
function besiden(n, rune) {
    // Base case: return rune itself at last column
    return n === 1
    ? rune
    /* Recursively break up 1 / n of remaining space,
    resulting in evenly spaced columns
    eg. 1/4, 1/3 of 3/4, 1/2 of 2/4, 1/1 of 1/4 */
    : beside_frac(1 / n, rune, besiden(n - 1, rune));
}

// Test
show(besiden(7, heart));


// Question 2
// paste your besiden function from the
// previous question here
function besiden(n, rune) {
    // Base case: return rune itself at last column
    return n === 1
    ? rune
    /* Recursively break up 1 / n of remaining space,
    resulting in evenly spaced columns
    eg. 1/4, 1/3 of 3/4, 1/2 of 2/4, 1/1 of 1/4 */
    : beside_frac(1 / n, rune, besiden(n - 1, rune));
}

function carpet(n, m, rune) {
    /* m vertical repetitions of n horizontal 
    repetitions */
    return stackn(m, besiden(n, rune));
}

// Test
show(carpet(7, 5, heart));


// Question 3
/*
Enter your answers here
(answer each question in one or two complete sentences):

(a)
Result is 10 by 10 hearts of the same colour.

(b)
The argument of carpet(), random_color(), is evaluated
first, then the same rune is passed into the parameter
of the next recursive function. Therefore,
random_color() is not evaluated repeatedly but only
once when carpet() was called.

(c)
Result is 10 by 10 hearts of various random colours.
Argument of carpet(), random_color(), is not evaluated
and random_color(heart) is passed as a rune into
parameter of next recursive function. Therefore,
random_color() is evaluated repeatedly each time
recursive function is called.

*/


// Question 4
// you may need helper functions
function randomly_colored_besiden(n, rune) {
    // Base case: return rune itself at last column
    return n === 1
    ? random_color(rune)
    /* Recursively break up 1 / n of remaining space,
    resulting in evenly spaced columns
    eg. 1/4, 1/3 of 3/4, 1/2 of 2/4, 1/1 of 1/4 */
    : beside_frac(
        1 / n, 
        random_color(rune), 
        randomly_colored_besiden(n - 1, rune));
}

function randomly_colored_carpet(n, m, rune) {
    // Base case: return uniquely random row
    return m === 1
    ? randomly_colored_besiden(n, rune)
    /* Recursively break up 1 / n of remaining space,
    and call randomly_colored_besiden(),
    resulting in evenly spaced rows,
    each row being independently varied
    eg. 1/4, 1/3 of 3/4, 1/2 of 2/4, 1/1 of 1/4 */
    : stack_frac(
        1 / m, 
        randomly_colored_besiden(n, rune),
        randomly_colored_carpet(n, m - 1, rune));
}

// Test
show(randomly_colored_carpet(10, 10, heart));
// should produce a carpet as shown in the title picture of this quest.
