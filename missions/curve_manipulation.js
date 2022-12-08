// Question 1
function reflect_through_y_axis(curve) {
    // Reflect about the y-axis: negate x-coordinates
    return t => make_point(- x_of(curve(t)), y_of(curve(t)));
}


// Question 2
// you can define your own helper functions here

function close(curve) {
    // reflect about x and y axis, such that close(S) ends at top right
    return t => make_point(- x_of(curve(t)), - y_of(curve(t)));
}
