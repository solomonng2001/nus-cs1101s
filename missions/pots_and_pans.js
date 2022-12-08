// Task 1
// Function type: Number -> pair_of_numbers
// where input is between 0 - 15 inclusive.
// where 0 - 9 represent the digits
// 10 represents *, 11 represents #,
// and 12 - 15 represent the letters A-D.

function get_dtmf_frequencies(number) {
    const col = list(1209, 1336, 1477, 1633);
    const row = list(697, 770, 852, 941);
    return list_ref(list(
        pair(list_ref(row, 3), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 0)),
        pair(list_ref(row, 0), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 2)),
        pair(list_ref(row, 1), list_ref(col, 0)),
        pair(list_ref(row, 1), list_ref(col, 1)),
        pair(list_ref(row, 1), list_ref(col, 2)),
        pair(list_ref(row, 2), list_ref(col, 0)),
        pair(list_ref(row, 2), list_ref(col, 1)),
        pair(list_ref(row, 2), list_ref(col, 2)),
        pair(list_ref(row, 3), list_ref(col, 0)),
        pair(list_ref(row, 3), list_ref(col, 2)),
        pair(list_ref(row, 0), list_ref(col, 3)),
        pair(list_ref(row, 1), list_ref(col, 3)),
        pair(list_ref(row, 2), list_ref(col, 3)),
        pair(list_ref(row, 3), list_ref(col, 3))
    ), number);
}


// Task 2
// Copy your function get_dtmf_frequencies here.
function get_dtmf_frequencies(number) {
    const col = list(1209, 1336, 1477, 1633);
    const row = list(697, 770, 852, 941);
    return list_ref(list(
        pair(list_ref(row, 3), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 0)),
        pair(list_ref(row, 0), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 2)),
        pair(list_ref(row, 1), list_ref(col, 0)),
        pair(list_ref(row, 1), list_ref(col, 1)),
        pair(list_ref(row, 1), list_ref(col, 2)),
        pair(list_ref(row, 2), list_ref(col, 0)),
        pair(list_ref(row, 2), list_ref(col, 1)),
        pair(list_ref(row, 2), list_ref(col, 2)),
        pair(list_ref(row, 3), list_ref(col, 0)),
        pair(list_ref(row, 3), list_ref(col, 2)),
        pair(list_ref(row, 0), list_ref(col, 3)),
        pair(list_ref(row, 1), list_ref(col, 3)),
        pair(list_ref(row, 2), list_ref(col, 3)),
        pair(list_ref(row, 3), list_ref(col, 3))
    ), number);
}

function make_dtmf_tone(frequency_pair) {
    return simultaneously(list(
        sine_sound(head(frequency_pair), 0.5),
        sine_sound(tail(frequency_pair)), 0.5));
}


// Task 3
// Copy your functions get_dtmf_frequencies and make_dtmf_tone here.
function get_dtmf_frequencies(number) {
    const col = list(1209, 1336, 1477, 1633);
    const row = list(697, 770, 852, 941);
    return list_ref(list(
        pair(list_ref(row, 3), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 0)),
        pair(list_ref(row, 0), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 2)),
        pair(list_ref(row, 1), list_ref(col, 0)),
        pair(list_ref(row, 1), list_ref(col, 1)),
        pair(list_ref(row, 1), list_ref(col, 2)),
        pair(list_ref(row, 2), list_ref(col, 0)),
        pair(list_ref(row, 2), list_ref(col, 1)),
        pair(list_ref(row, 2), list_ref(col, 2)),
        pair(list_ref(row, 3), list_ref(col, 0)),
        pair(list_ref(row, 3), list_ref(col, 2)),
        pair(list_ref(row, 0), list_ref(col, 3)),
        pair(list_ref(row, 1), list_ref(col, 3)),
        pair(list_ref(row, 2), list_ref(col, 3)),
        pair(list_ref(row, 3), list_ref(col, 3))
    ), number);
}

function make_dtmf_tone(frequency_pair) {
    return simultaneously(list(
        sine_sound(head(frequency_pair), 0.5),
        sine_sound(tail(frequency_pair), 0.5)));
}

function dial(list_of_digits) {
    return is_null(list_of_digits)
        ? silence_sound(0)
        : consecutively(list(
            make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))), 
            silence_sound(0.1), dial(tail(list_of_digits))));
}

// Test
//play(dial(list(6,2,3,5,8,5,7,7)));


// Task 4
// Copy your functions get_dtmf_frequencies,
function get_dtmf_frequencies(number) {
    const col = list(1209, 1336, 1477, 1633);
    const row = list(697, 770, 852, 941);
    return list_ref(list(
        pair(list_ref(row, 3), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 0)),
        pair(list_ref(row, 0), list_ref(col, 1)),
        pair(list_ref(row, 0), list_ref(col, 2)),
        pair(list_ref(row, 1), list_ref(col, 0)),
        pair(list_ref(row, 1), list_ref(col, 1)),
        pair(list_ref(row, 1), list_ref(col, 2)),
        pair(list_ref(row, 2), list_ref(col, 0)),
        pair(list_ref(row, 2), list_ref(col, 1)),
        pair(list_ref(row, 2), list_ref(col, 2)),
        pair(list_ref(row, 3), list_ref(col, 0)),
        pair(list_ref(row, 3), list_ref(col, 2)),
        pair(list_ref(row, 0), list_ref(col, 3)),
        pair(list_ref(row, 1), list_ref(col, 3)),
        pair(list_ref(row, 2), list_ref(col, 3)),
        pair(list_ref(row, 3), list_ref(col, 3))
    ), number);
}

// make_dtmf_tone and dial here.
function make_dtmf_tone(frequency_pair) {
    return simultaneously(list(
        sine_sound(head(frequency_pair), 0.5),
        sine_sound(tail(frequency_pair), 0.5)));
}

function dial(list_of_digits) {
    return is_null(list_of_digits)
        ? silence_sound(0)
        : consecutively(list(
            make_dtmf_tone(get_dtmf_frequencies(head(list_of_digits))), 
            silence_sound(0.1), dial(tail(list_of_digits))));
}

function dial_all(list_of_numbers) {
    const rej_digit_lst = list(1, 8, 0, 0, 5, 2, 1, 1, 9, 8, 0);
    // For every element in number and rejected number, check digit
    // If reached end of list, number is a rejected number
    function check_number(digit_lst, rej_digit_lst) {
        return is_null(digit_lst) || is_null(rej_digit_lst)
        ? false
        : head(digit_lst) === head(rej_digit_lst)
        ? check_number(tail(digit_lst), tail(rej_digit_lst))
        : true;
    }
    // Filter out rejected number
    const num_lst_without_rej = filter(x => check_number(x, rej_digit_lst), 
        list_of_numbers);
    // End all numbers with #
    const num_lst_with_end = map(x => append(x, list(11)), 
        num_lst_without_rej);
    // Convert tree to a single list
    const tree_to_list = accumulate((x, y) => append(x, y), null, 
        num_lst_with_end);
    return dial(tree_to_list);
    
}

// Test
// play(dial_all(
//  list(
//      list(1,8,0,0,5,2,1,1,9,8,0),  // not played!!!
//      list(6,2,3,5,8,5,7,7),
//      list(0,0,8,6,1,3,7,7,0,9,5,0,0,6,1))
// ));
