// Question 1
function diagonal(t) {
    // your answer here
    return make_point(t, t);
}

// Test
draw_points(50)(diagonal);


// Question 2
function unit_square(t) {
    // your answer here
    return make_point(x_coordinate(t), y_coordinate(t));
}

function y_coordinate(t) {
    return t <= 1 / 4
        ? 0
        : t <= 1 / 2
        ? (t - 1 / 4) * 4
        : t <= 3 / 4
        ? 1
        : 1 - (t - 3 / 4) * 4;
}

function x_coordinate(t) {
    return t <= 1 / 4
            ? t * 4
            : t <= 1 / 2
            ? 1
            : t <= 3 / 4
            ? 1 - (t - 1 / 2) * 4
            : 0;
}

// Test
draw_points_full_view_proportional(80)(unit_square);
