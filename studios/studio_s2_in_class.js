// Question 9
function discounted_price(queue_number, price) {
    return queue_number % 2 === 0 ? 0.9 * price : price;
} 

// Question 10
function last_n_combos(order, n) {
    return order % math_pow(10, n);
}

// Question 11
function first_n_combos(order, n) {
    return math_floor(order / math_pow(10, 
            ((math_floor(math_log10(order)) + 1) - n)));
}
first_n_combos(54321, 3);

// Question 12
function max3(a, b, c) {
    return a > b
        ? a > c
            ? a : c
        : b > c
            ? b : c;
}

display(max3(1, 2, 3));
display(max3(2, 1, 3));

display(max3(3, 2, 1));
display(max3(3, 1, 2));

display(max3(1, 3, 2));
display(max3(2, 3, 1));
