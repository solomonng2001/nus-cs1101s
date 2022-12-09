// Question 1
const test_curve =
    t => make_point(t, 0.5 + (math_sin(4 * (math_PI * t)) / 2));

function stack(c1, c2) {
    // scale both curves by factor of 1/2 in x-direction
    // and translate c1 up in x-direction
    const curve1 = translate(0, 0.5, 0)((scale(1, 0.5, 1)(c1)));
    const curve2 = scale(1, 0.5, 1)(c2);
    return connect_rigidly(curve1, curve2);
}

// Test
draw_points(10000)(stack(test_curve, test_curve));
//draw_points(10000)(test_curve);


// Question 2
const test_curve =
    t => make_point(t, 0.5 + (math_sin(4 * (math_PI * t)) / 2));

function stack_frac(frac, c1, c2) {
    // c1: scale by frac and translate up by 1 - frac
    const curve1 = translate(0, 1 - frac, 0)(scale(1, frac, 1)(c1));
    // scale by 1 - frac
    const curve2 = scale(1, 1 - frac, 1)(c2);
    return connect_rigidly(curve1, curve2);
}

// Test
draw_points(10000)
    (stack_frac(1 / 5,
                test_curve,
                stack_frac(1 / 2, test_curve, test_curve)));
