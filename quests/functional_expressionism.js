// Question 1
const increment_repeater =
    // input into repeated function f(x) for added round of function call
    repeater => f => x => repeater(f)(f(x));

const twice = f => x => f(f(x));
const thrice = increment_repeater(twice);
const fourtimes = increment_repeater(thrice);
const warn = thrice(display);
warn("ALERT");          // should display "ALERT"
                        // three times in orange
const bigwarn = fourtimes(display);
bigwarn("A L E R T");   // should display "A L E R T"
                        // four times in orange
                        // (the REPL will display
                        // "A L E R T"a fifth time
                        // [in white] as the value
                        // returned by bigwarn)


// Question 2
const pair = (x, y) => f => f(x, y);

// Give function f a lambda function that returns its parameters
const head = p => p((x, y) => x);  // complete lambda expression
const tail = p => p((x, y) => y);  // complete lambda expression

head(pair(1, 2)) === 1; // should return true
tail(pair(1, 2)) === 2; // should return true


// Question 3
/*
enter your answer here; no explanation required
lower bound of the decrement_repeater is Ω(n)
*/


// Question 4
const zero_repeater = f => x => x;
const one_repeater = f => x => f(zero_repeater, () => zero_repeater(f)(x));
const two_repeater = f => x => f(one_repeater, () => one_repeater(f)(x));
const three_repeater = f => x => f(two_repeater, () => two_repeater(f)(x));

const to_int = repeater => repeater((iter_count, x) => x() + 1)(0);

// With reference to lines 1 to 4,
// increment = f(previous repeater name, result of previous repeater)
const increment_repeater = repeater => f => x => 
    f(repeater, () => repeater(f)(x));

// Pass repeated function into input of other repeated function
// eg. a = f(f(x)), f(f(a)) = f(f(f(f(x))))
const add_repeaters = (repeater1, repeater2) => f => x => 
    repeater1(f)(repeater2(f)(x));

to_int(add_repeaters(two_repeater,
                     three_repeater));  // should return 5


// Question 5
const zero_repeater = f => x => x;
const one_repeater = f => x => f(zero_repeater, () => zero_repeater(f)(x));
const two_repeater = f => x => f(one_repeater, () => one_repeater(f)(x));
const three_repeater = f => x => f(two_repeater, () => two_repeater(f)(x));

const to_int = repeater => repeater((iter_count, x) => x() + 1)(0);

/* Input into 1st argument of repeater, a function that returns its 
repeater name, then input back the original function for decreased repeater
to evaluate */
const decrement_repeater = repeater => f => x => 
    repeater((x, y) => x)(x)(f)(x);

to_int(decrement_repeater(three_repeater));  // should return 2
