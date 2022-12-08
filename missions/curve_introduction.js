// Question 1
// Part 1
// unit_line_at: Number -> Curve

// Part 2
function vertical_line(pt, length) {
    // x coordinate of pt remains same, while adding to y coordinate of pt
    // also, scale each addition to y coordinate
    return t => make_point(x_of(pt), y_of(pt) + t * length);
}

// Part 3
// vertical_line: (Point, Number) -> Curve

// Part 4
// starting from point (0.5, 0.25), draw line of length 0.5
const point = make_point(0.5, 0.25);
draw_connected(1)(vertical_line(point, 0.5));


// Question 2
function three_quarters(pt) {
    // Translate circle by adding to every x, y coordinate of circle
    // Limit Sine/Cosine cycle to max of radian 3PI/2 (3/4 of 2PI)
    return t => make_point(math_cos(2 * math_PI * t * 0.75) + x_of(pt), 
        math_sin(2 * math_PI * t * 0.75) + y_of(pt));
}

// Test
draw_connected_full_view_proportional(200)
    (three_quarters(make_point(0.5, 0.25)));


// Question 3
function s_generator(pt) {
    return t => t <= 0.5
        ? upper_s(pt, t)
        : lower_s(pt, t);
}

function upper_s(pt, t) {
    // Translate circle by x, y + 1
    // Limit Sine/Cosine cycle to 0 < x <= 3PI/2 (when 0 < t <= 0.5)
    return make_point(math_cos(2 * math_PI * t * 1.5) + x_of(pt), 
        math_sin(2 * math_PI * t * 1.5) + y_of(pt) + 1);
}

function lower_s(pt, t) {
    // Translate circle by x, y - 1
    // Limit Sine/Cosine cycle to 3PI/2 < x <= 3PI (when 0.5 < t < 1)
    // Invert lower_s
    return make_point(math_cos(2 * math_PI * t * 1.5) + x_of(pt), 
        - math_sin(2 * math_PI * t * 1.5) + y_of(pt) - 1);
}

// Test
draw_connected_full_view_proportional(200)(s_generator(make_point(0.5, 0.25)));
