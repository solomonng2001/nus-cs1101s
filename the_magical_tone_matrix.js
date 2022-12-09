// Question 1
// copy generate_list_of_note from Mission "Musical Diversions"
function generate_list_of_note(letter_name, list_of_interval) {
    // convert letter name to midi note first
    // recursively obtain next note = previous note + interval
    function generate_notes(note, list_of_interval) {
        return is_null(list_of_interval)
            ? pair(note, null)
            : pair(note, generate_notes(note + head(list_of_interval), 
                tail(list_of_interval)));
    }
    return generate_notes(letter_name_to_midi_note(letter_name), 
        list_of_interval);
}

const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2

function repeat_pattern(n, pattern, rune) {
    return n === 0 ? rune : repeat_pattern(n - 1, pattern, pattern(rune));
}

function repeated_scale(note, list_of_interval, n, duration, instrument) {
    // your solution goes here
    const list_MIDI_notes = generate_list_of_note(note, 
        repeat_pattern(n - 1, x => append(list_of_interval, x), list_of_interval));
    return map(x => instrument(x, duration), list_MIDI_notes);
}

play(consecutively(repeated_scale("C4", pentatonic_list_of_interval,
                                  2, 1, cello)));


// Question 2
function play_matrix(duration, list_of_sounds) {
    // iterates and play each column concurrently, taking input of 0 count
    // and adding 1 each iteration, returning void
    // mapping converts list of truth values for all rows in a column to
    // a list of sounds to be played simultaneously
    function column_iteration(column) {
        // iterate through all rows in a defined column
        // takes 0 row count and column number as input
        // returns list of truth values for all rows in a column
        function row_truth(row, column) {
            return row === 16
                ? null
                : list_ref(list_ref(get_matrix(), row), column)
                ? pair(row, row_truth(row + 1, column))
                : row_truth(row + 1, column);
        }
        return column === 16
            ? column_iteration(0)
            : set_timeout(() => {play_concurrently(simultaneously(
                map(x => list_ref(list_of_sounds, x), row_truth(0, column))));
                column_iteration(column + 1);
                }, duration * 1000);
    }
    return column_iteration(0);
}

function stop_matrix() {
    /* your answer here */
    clear_all_timeout();
}

// copy your functions generate_list_of_note and repeated_scale
// from Question 1 here
function generate_list_of_note(letter_name, list_of_interval) {
    // convert letter name to midi note first
    // recursively obtain next note = previous note + interval
    function generate_notes(note, list_of_interval) {
        return is_null(list_of_interval)
            ? pair(note, null)
            : pair(note, generate_notes(note + head(list_of_interval), 
                tail(list_of_interval)));
    }
    return generate_notes(letter_name_to_midi_note(letter_name), 
        list_of_interval);
}

const pentatonic_list_of_interval = list(2, 2, 3, 2, 3);

// repeat_pattern from Lecture L2

function repeat_pattern(n, pattern, rune) {
    return n === 0 ? rune : repeat_pattern(n - 1, pattern, pattern(rune));
}

function repeated_scale(note, list_of_interval, n, duration, instrument) {
    // your solution goes here
    const list_MIDI_notes = generate_list_of_note(note, 
        repeat_pattern(n - 1, x => append(list_of_interval, x), list_of_interval));
    return map(x => instrument(x, duration), list_MIDI_notes);
}

const sounds = repeated_scale("C4", pentatonic_list_of_interval, 3, 0.2, cello);

play_matrix(0.5, sounds);
