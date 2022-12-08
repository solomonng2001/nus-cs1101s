// Task 1
function partition(xs, p) {
    // input: list and partition
    // output: pair of list1 (<= partition) and list2 (> partition)
    return pair(filter(x => x <= p, xs), filter(x => x > p, xs));
}

// Test
// const my_list = list(1, 2, 3, 4, 5, 6);
// partition(my_list, 4);


// Task 2
function partition(xs, p) {
    // input: list and partition
    // output: pair of list1 (<= partition) and list2 (> partition)
    return pair(filter(x => x <= p, xs), filter(x => x > p, xs));
}

function quicksort(xs) {
    // input: list
    // output: ordered list
    // recursively partition until empty list (base case)
    return is_null(xs)
        ? xs
        : append(quicksort(head(partition(tail(xs), head(xs)))), pair(head(xs), quicksort(tail(partition(tail(xs), head(xs))))));
}

// Test
// const my_list = list(23, 12, 56, 92, -2, 0);
// quicksort(my_list);
