// Question 1
//The function mirror shows a rune next to its mirror image.
function mirror(rune) {
    return beside(rune, flip_horiz(rune));
}

/*The function more_love takes a rune as
argument and returns a rune that shows
it next to a red heart.*/
function more_love(rune) {
    return beside(rune, red(heart));
}

//Test
show(more_love(mirror(sail)));


// Question 2
function mosaic(r1, r2, r3, r4) {
    // Stack the top 2 runes (nova & rcross) over the bottom 2 runes (corner and sail)
    return stack(
        // Place nova on the adjacent left of rcross 
        beside(r4, r1),
        // Place corner on the adjacent left of sail
        beside(r3, r2));
}

// Test
show(mosaic(rcross, sail, corner, nova));


// Question 3
function mosaic(r1, r2, r3, r4) {
    // Stack the top 2 runes (nova & rcross) over the bottom 2 runes (corner and sail)
    return stack(
        // Place nova on the adjacent left of rcross 
        beside(r4, r1),
        // Place corner on the adjacent left of sail
        beside(r3, r2));
}

function upside_down_mosaic(r1, r2, r3, r4) {
    // Rotate mosaic by 180 degrees
    return turn_upside_down(mosaic(r1, r2, r3, r4));
}

// Test
show(upside_down_mosaic(rcross, sail, corner, nova));


// Question 4
function mosaic(r1, r2, r3, r4) {
    // Stack the top 2 runes (nova & rcross) over the bottom 2 runes (corner and sail)
    return stack(
        // Place nova on the adjacent left of rcross 
        beside(r4, r1),
        // Place corner on the adjacent left of sail
        beside(r3, r2));
}

function transform_mosaic(r1, r2, r3, r4, transform) {
    // Apply transformation function to mosaic
    return transform(mosaic(r1, r2, r3, r4));
}

// Test
show(transform_mosaic(rcross, sail, corner, nova, make_cross));
