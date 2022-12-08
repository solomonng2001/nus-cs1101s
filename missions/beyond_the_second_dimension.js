// Question 1
function steps(r1, r2, r3, r4){
    // Dividing up height of 3D space into halves
    return overlay(
        // Dividing up current halves into further halves
        overlay(
            // top-left
            scale_translate(- 1, - 1, r4), 
            // bottom-left
            scale_translate(- 1, 1, r3)), 
        overlay(
            // bottom-right
            scale_translate(1, 1, r2), 
            // top-right
            scale_translate(1, - 1, r1)));
}

/* Scales and translates runes based on direction vector inputs x, y
   eg. scale_translate(1, 1, rune) will translate scaled rune to 
   bottom-right corner */
function scale_translate(x, y, rune) {
    return translate(x / 2, y / 2, scale(1 / 2, rune));
}

// Tests
show(steps(rcross, triangle, corner, nova));
hollusion(steps(rcross, triangle, corner, nova));


// Question 2
function cone(n, rune){
    // Base case: when n === 0, return nothing
    return n === 0
    ? blank
    /* With decresing n, linearly decrease circle size
    and distance to top eg. using series 3/4, 2/3, 1/2,
    will result in even spacing and linear decrease */
    : overlay_frac(1 - 1 / n, 
        cone(n - 1, scale(1 - 1 / n, rune)), 
        rune);
}

// Tests
show(cone(4, circle));
hollusion(cone(15, circle));
