// Question 1
const connect_numbers =
    n => draw_connected_full_view(n)(unit_circle);

connect_numbers(5); // returns a Drawing of a pentagon


// Question 2
const connect_results =
    (n, f) =>
        draw_connected_full_view(n)
        (t => unit_circle(f(math_round(t * n)) / n));

const star =
    (n, step) => // skip steps by multiplying parameter
        connect_results(n, k => step * k);

star(11, 4);


// Question 3
const connect_results =
    (n, f) =>
        draw_connected_full_view(n)
        (t => unit_circle(f(math_round(t * n)) / n));

const wheel =
    (n) => 
        // for wheel(8) to produce same result, multiply n by 3
        connect_results(n * 3, k => {
            const v = 3 * math_round((k - 1) / 3);
            // for any wheel(n) to produce same result, (n * 3) / 2
            // so that spoke is drawn to opposite point
            return k % 3 === 1 ? v + (n * 3) / 2 : v; 
        });

//wheel(100);
wheel(100);


// Question 4
const connect_results =
    (n, f) =>
        draw_connected_full_view(n)
        (t => unit_circle(f(math_round(t * n)) / n));

const connect_laps =
    (n, g) =>
    connect_results(n * 3,
                    k => { const v = math_round((k - 1) / 3);
                           return k % 3 === 1 ? g(v)*3 : v * 3; }
                   );

const draw_times_table =
    (n, m) =>
        // multiple of h since it is a times table function
        connect_laps(n, h => m * h);

//draw_times_table(100, 2);      // m = 2: cardioid: 1 lobe
//draw_times_table(100, 3);      // m = 3: nephroid: 2 lobes
//draw_times_table(100, 4);      // m = 4: 3 lobes...

//draw_times_table(397, 200);    // m = (n + 3) / 2: cardioid
//draw_times_table(500, 252);    // m = (n + 4) / 2: nephroid
//draw_times_table(501, 253);    // m = (n + 5) / 2: 3 lobes...

//draw_times_table(500, 168);    // m = (n + 4) / 3: cardioid
//draw_times_table(295, 100);    // m = (n + 5) / 3: nephroid
//draw_times_table(594, 200);    // m = (n + 6) / 3: 3 lobes...

//draw_times_table(395, 100);    // m = (n + 5) / 4: cardioid
//draw_times_table(494, 100);    // m = (n + 6) / 5: cardioid
//draw_times_table(593, 100);    // m = (n + 7) / 6: cardioid...

// also nice:
//draw_times_table(400, 201);    // m = n / 2 + 1 (/4,/8,/16)
//draw_times_table(200, 99);     // m = (n / 2) - 1: square pattern
