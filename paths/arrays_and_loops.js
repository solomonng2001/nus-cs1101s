// Question 9
function dot_product(A, B) {
    // YOUR SOLUTION HERE
    const len = array_length(A);
    let acc = 0;
    for (let i = 0; i < len; i = i + 1) {
        acc = acc + A[i] * B[i];
    }
    return acc;
}


// Question 10
function accumulate_array(op, init, A) {
    // YOUR SOLUTION HERE
    const len = array_length(A);
    let acc = init;
    for (let i = 0; i < len; i = i + 1) {
        acc = op(acc, A[i]);
    }
    return acc;
}


// Question 11
function filter_array(pred, A) {
    // YOUR SOLUTION HERE
    const len = array_length(A);
    const arr = [];
    for (let i = 0; i < len; i = i + 1) {
        if (pred(A[i])) {
            arr[array_length(arr)] = A[i];
        }
    }
    return arr;
}


// Question 12
function transpose(M) {
    // YOUR SOLUTION HERE
    let T = [];
    const M_rows = array_length(M);
    const M_cols = array_length(M[0]);
    for (let r = 0; r < M_cols; r = r + 1) {
        T[r] = [];
        for (let c = 0; c < M_rows; c = c + 1) {
            T[r][c] = M[c][r];
        }
    }
    return T;
}
