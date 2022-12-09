// Question 1
function persian(rune, count) {
    // breaking down rug into top / bottom repetitions (of count times)
    // and left / right repetitions (of count - 2 times)
    // and inner make_cross() pattern of rune
    const inner_pattern = make_cross(rune);
    const top_bottom_repetitions = quarter_turn_right(stackn(count, quarter_turn_left(rune)));
    const left_right_repetitions = stackn(count - 2, rune);
    
    // form rug by stacking the top-middle over bottom repetitions
    return stack_frac(
        (count - 1) / count, 
        
        // within top-middle: stack top repetitions over middle
        stack_frac(
            1 / (count - 1), 
            top_bottom_repetitions, 
            
            // within middle: stack left-middle beside right repetitions
            beside_frac(
                (count - 1) / count,
                
                // within left-middle: stack left repetitions beside inner_pattern
                beside_frac(
                    1 / (count - 1), 
                    left_right_repetitions, 
                    inner_pattern), 
                left_right_repetitions))
        , top_bottom_repetitions);
}

// Tests
show(persian(heart, 7));
show(persian(make_cross(rcross), 5));
const paw = from_url("https://i.imgur.com/GJg95B8.png");
show(persian(paw, 5));
