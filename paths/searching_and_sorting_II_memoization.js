// Question 8
function search_cond(A, cond) {

    // YOUR SOLUTION HERE
    const len = array_length(A);
    let i = 0;
    while (i < len && !cond(A[i])) {
        i = i + 1;
    }
    if (i < len) {
        return i;
    } else {
        return -1;
    }
}


// Question 9
function insert(A, pos, x) {

    // YOUR SOLUTION HERE
    const len = array_length(A);
    let i = len - 1;
    while (i >= pos) {
        A[i + 1] = A[i];
        i = i - 1;
    }
    A[pos] = x;

}


// Question 10
function insertion_sort(A) {

    // YOUR SOLUTION HERE
    const sorted = [A[0]];
    const len = array_length(A);
    for (let i = 1; i < len; i = i + 1) {
        const pos = search_cond(sorted, x => A[i] < x);
        if (pos === -1) {
            sorted[i] = A[i];
        } else {
            insert(sorted, pos, A[i]);
        }
    }
    return sorted;
}
