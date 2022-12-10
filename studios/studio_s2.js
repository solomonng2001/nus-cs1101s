// Question 1
function biggie_size(combo) {
    return combo + 4;
}


// Question 2
function unbiggie_size(combo) {
    return combo - 4;
}


// Question 3
function is_biggie_size(combo) {
    return combo > 4;
}


// Question 4
function combo_price(combo) {
    return is_biggie_size(combo) ? unbiggie_size(combo) * 1.17 + 0.5 : combo * 1.17;
}


// Question 5
function empty_order() {
    return 0;
}


// Question 6
function add_to_order(order, combo) {
    return order * 10 + combo;
}


// Question 7
function last_combo(order) {
    return order % 10;
}


// Question 8
function other_combos(order) {
    return math_floor(order / 10);
}
