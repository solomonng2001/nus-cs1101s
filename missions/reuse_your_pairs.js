// TASK 1
function d_split_list(xs) {

    // *** Your answer here. ***
    const mid = math_ceil(length(xs) / 2);
    const first_half = xs;
    let second_half = first_half;
    
    // skip until pair before mid
    let i = 0;
    while (i < mid - 1) {
        second_half = tail(second_half);
        i = i + 1;
    }
    
    // store actual second_half under temporary, to be assigned to 
    // second half later
    const temp = tail(second_half);
    
    // set tail of pair before mid to null
    set_tail(second_half, null);
    second_half = temp;
    return pair(first_half, second_half);
}

// TEST:
const my_list1 = list(1, 2, 3, 4, 5, 6);
const my_list2 = list(5, 4, 3, 2, 1);
d_split_list(my_list1);
// d_split_list(my_list2);


// TASK 2
function d_merge(xs, ys) {

    // *** Your answer here. ***
    //let pointer_x = xs;
    let pointer_x = xs; // track xs
    let pointer_start = pointer_x; // track first element of entire list
    let pointer_before = null; // track element before pointer_x
    let pointer_y = ys; // track ys
    
    while (!is_null(pointer_x) && !is_null(pointer_y)) {
        // insert 1st y element before pointer_x if its smaller
        if (head(pointer_y) < head(pointer_x)) {
            const insert = pointer_y;
            pointer_y = tail(pointer_y);
            set_tail(insert, pointer_x);
            
            // pointer_before is not null => insert not first element of 
            // entire list
            if (!is_null(pointer_before)) {
                set_tail(pointer_before, insert);
                
            // else, insert is first element of entire list
            } else {
                pointer_start = ys;
            }
            
            // track element before pointer_x
            // subsequent insertion is inserted into tail of pointer_before
            pointer_before = insert;
            
        // else, move on to next element in xs
        } else {
            pointer_before = pointer_x;
            pointer_x = tail(pointer_x);
        }
    }
    
    if (is_null(pointer_x)) {
        if (is_null(pointer_before)) {
            
            // xs is null, just return ys
            return ys;
        } else {
            
            // pointer_before not null => at ebd if xs
            // therefore, add remaining ys to xs
            set_tail(pointer_before, pointer_y);
        }
    }
    
    return pointer_start;
}

// TEST:
const my_list1 = list(2, 3);
const my_list2 = list(1, 4, 5);
d_merge(my_list1, my_list2);


// TASK 3
// Copy-and-paste your d_split_list function for Task 1 here.
function d_split_list(xs) {

    // *** Your answer here. ***
    const mid = math_ceil(length(xs) / 2);
    const first_half = xs;
    let second_half = first_half;
    
    // skip until pair before mid
    let i = 0;
    while (i < mid - 1) {
        second_half = tail(second_half);
        i = i + 1;
    }
    
    // store actual second_half under temporary, to be assigned to 
    // second half later
    const temp = tail(second_half);
    
    // set tail of pair before mid to null
    set_tail(second_half, null);
    second_half = temp;
    return pair(first_half, second_half);
}

// Copy-and-paste your d_merge function for Task 2 here.
function d_merge(xs, ys) {

    // *** Your answer here. ***
    //let pointer_x = xs;
    let pointer_x = xs; // track xs
    let pointer_start = pointer_x; // track first element of entire list
    let pointer_before = null; // track element before pointer_x
    let pointer_y = ys; // track ys
    
    while (!is_null(pointer_x) && !is_null(pointer_y)) {
        // insert 1st y element before pointer_x if its smaller
        if (head(pointer_y) < head(pointer_x)) {
            const insert = pointer_y;
            pointer_y = tail(pointer_y);
            set_tail(insert, pointer_x);
            
            // pointer_before is not null => insert not first element of 
            // entire list
            if (!is_null(pointer_before)) {
                set_tail(pointer_before, insert);
                
            // else, insert is first element of entire list
            } else {
                pointer_start = ys;
            }
            
            // track element before pointer_x
            // subsequent insertion is inserted into tail of pointer_before
            pointer_before = insert;
            
        // else, move on to next element in xs
        } else {
            pointer_before = pointer_x;
            pointer_x = tail(pointer_x);
        }
    }
    
    if (is_null(pointer_x)) {
        if (is_null(pointer_before)) {
            
            // xs is null, just return ys
            return ys;
        } else {
            
            // pointer_before not null => at ebd if xs
            // therefore, add remaining ys to xs
            set_tail(pointer_before, pointer_y);
        }
    }
    
    return pointer_start;
}

function d_merge_sort(xs) {

    // *** Your answer here. ***
    if (is_null(tail(xs))) {
        return xs;
    } else {
        const split = d_split_list(xs);
        return d_merge(d_merge_sort(head(split)), 
            d_merge_sort(tail(split)));
    }

}

// TEST:
const my_list = list(7, 2, 4, 6, 9, 1, 5, 8, 3, 6);
d_merge_sort(my_list);
