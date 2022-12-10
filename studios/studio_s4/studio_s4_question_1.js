// Question 1
function pascal(row, position) {
    return position === 0 || row === position
        ? 1
        : row < position
        ? 0
        : pascal(row - 1, position - 1) + pascal(row - 1, position);
}

// Recursive
