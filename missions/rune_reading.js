// Question 1
function fractal(pic, n) {
    // your answer here
    return n === 1
        // Base case: return double stacked runes
        ? pic
        // Recursively beside() rune on left and double stacked fractal() on right
        : beside_frac(0.5, pic, stack_frac(0.5, fractal(pic, n - 1), fractal(pic, n - 1)));
}

// Test
show(fractal(make_cross(rcross), 5));


// Question 2
function hook(frac) {
    // your answer here
    // declare rune before turning upside down
    // black on left, fraction of black on top right and rest of white on rest of bottom right
    const rune = beside(square, stack_frac(frac, square, blank));
    
    // turn rune quarter right and return it
    const quarter_right_rune = quarter_turn_right(rune);
    return quarter_right_rune;
}

// Test
show(hook(1/5));


// Question 3
function spiral(thickness, depth) {
    // your answer here
    return depth === 0
        // Base case: return nothing
        ? blank
        // Recursively stack hook on top of a quarter turned right hook ()
        : stack_frac(thickness, hook(thickness / 2), quarter_turn_right(spiral(thickness, depth - 1)));
}

// copy your hook function from Question 2 here if required
function hook(frac) {
    // your answer here
    // declare rune before turning upside down
    // black on left, fraction of black on top right and rest of white on rest of bottom right
    const rune = beside(square, stack_frac(frac, square, blank));
    
    // turn rune quarter right and return it
    const quarter_right_rune = quarter_turn_right(rune);
    return quarter_right_rune;
}

// Test
show(spiral(1 / 5, 20));
