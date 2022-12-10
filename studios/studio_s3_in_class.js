// Question 1
function moony_1(bottom_right) {
    return beside(stack(circle, square),
            stack(blank, bottom_right));
}

show(moony_1(ribbon));


// Question 2
function moony_2(n) {
    return n === 1 
           ? circle
           : stack(beside(circle, blank), beside(square, moony_2(n - 1)));
}

show(moony_2(5));


// Question 3
function moony(n) {
     return n === 1
        ? circle
        : stack_frac(1 / n, beside_frac(1 / n, circle, blank), 
            beside_frac(1 / n, square, moony(n - 1)));
}

show(moony(5));


// Question 4
/*
recursive process
O(n)
size of the given problem is the number of deferred operations, as n
increases the number of deferred operations increase linearly

primitive runes are O(1)
primitive operations on runes are O(1) for stack_frac and beside_frac but 
operations like stack_n and beside_n are O(n)
*/
