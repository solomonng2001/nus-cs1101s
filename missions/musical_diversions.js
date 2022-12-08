// Question 1
const drum_envelope = adsr(0.05, 0.95, 0, 0);

function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
}

function bass_drum(note, duration) {
    /* your answer here */
    const prime_nums = list(79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
        131, 137, 139, 149);
    return drum_envelope(simultaneously(map(x => 
        sine_sound(x, duration), prime_nums)));
}

function mute(note, duration) {
    /* your answer here */
    return drum_envelope(silence_sound(duration));
}

// Test
play(snare_drum(50, 0.2));
play(bass_drum(50, 0.2));

play(consecutively(list(snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2),
                        mute(0, 0.2),
                        snare_drum(50, 0.2), mute(0, 0.2), bass_drum(50, 0.2))));


// Question 2
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

const major_scale_interval = list(2, 2, 1, 2, 2, 2, 1, -1, -2, -2, -2, -1, -2, -2);
const c_major_scale = generate_list_of_note("C4", major_scale_interval);

// display(c_major_scale);

function list_to_sound(list_of_midi_note, duration, instrument) {
    /* your answer here */
    return consecutively(map(x => instrument(x, duration), 
        list_of_midi_note));
}

const c_major_scale_sound = list_to_sound(c_major_scale, 0.4, cello);
play(c_major_scale_sound);

const harmonic_minor_scale_interval = list(2, 1, 2, 2, 1, 3, 1, -1, -3, -1, -2, -2, -1, -2);

const melodic_minor_scale_interval = list(2, 1, 2, 2, 2, 2, 1, -2, -2, -1, -2, -2, -1, -2);


const c_harmonic_minor_scale = generate_list_of_note("C4", 
    harmonic_minor_scale_interval);
const c_harmonic_minor_scale_sound = list_to_sound(c_harmonic_minor_scale, 0.4, cello);
play(c_harmonic_minor_scale_sound);

const c_melodic_minor_scale = generate_list_of_note("C4", 
    melodic_minor_scale_interval);
const c_melodic_minor_scale_sound = list_to_sound(c_melodic_minor_scale, 0.4, cello);
play(c_melodic_minor_scale_sound);


// Question 3
// copy your functions generate_list_of_note and list_to_sound
// from the previous Question here
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

function list_to_sound(list_of_midi_note, duration, instrument) {
    /* your answer here */
    return consecutively(map(x => instrument(x, duration), 
        list_of_midi_note));
}

const major_arpeggio_interval = list(4, 3, 5, 4, 3, 5);
const minor_arpeggio_interval = list(3, 4, 5, 3, 4, 5);

function generate_arpeggio(letter_name, list_of_interval) {
    return generate_list_of_note(letter_name, list_of_interval);
}

function arpeggiator_up(arpeggio, duration_each, instrument) {
    // arpeggiator takes in list of midi notes, end note to check base case,
    // and a note rank to cycle through first 4 notes per music phrase
    function arpeggiator(list_of_notes, end_note, note_rank) {
        // cycle until highest note played 4 times
        // implies that highest note is 3rd element in midi note list
        return list_ref(list_of_notes, 2) === end_note
            ? null
            // if reached 4th note, reshuffle midi note list,
            // by shifting 1st note to end of list
            : note_rank === 4
            ? arpeggiator(append(tail(list_of_notes), 
                list(head(list_of_notes))), end_note, 0)
            // cycle through first 4 notes in midi notes list
            : pair(list_ref(list_of_notes, note_rank), 
                arpeggiator(list_of_notes, end_note, note_rank + 1));
    }
    return length(arpeggio) < 4
        ? silence_sound(0)
        // map: convert each midi note number into instrument sound
        : consecutively(map(x => instrument(x, duration_each), 
            // parameter 2: highest note to end at
            // parameter3: start playing at first note in list
            arpeggiator(arpeggio, list_ref(arpeggio, 6), 0)));
}

// Test
play(arpeggiator_up(generate_arpeggio("C4", major_arpeggio_interval), 0.1, cello));


// Question 4
function simplify_rhythm(rhythm) {
    // repeat iterates through rhythm by magnitude of count
    function repeat(rhythm, count) {
        return count === 0
            ? null
            : append(simplify_rhythm(rhythm), repeat(rhythm, count - 1));
    }
    // if list, must be a list of rhythm of a simple list, then call
    // simplify_rhythm to check each element of the list
    // if not list and is piar, need to repeat
    // else, must be an element in a simple rhythm
    return is_null(rhythm)
        ? null
        : is_list(rhythm)
        ? append(simplify_rhythm(head(rhythm)), simplify_rhythm(tail(rhythm)))
        : is_pair(rhythm)
        ? repeat(head(rhythm), tail(rhythm))
        : list(rhythm);
}

// Test
const my_rhythm = pair(list(pair(list(1,2,0,1), 2), list(1,3,0,1,3,1,0,3)), 3);
const my_simple_rhythm = simplify_rhythm(my_rhythm);
display_list(my_simple_rhythm);

const correct_simple_rhythm = list(1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,
        2,0,1,1,3,0,1,3,1,0,3,1,2,0,1,1,2,0,1,1,3,0,1,3,1,0,3);
equal(my_simple_rhythm, correct_simple_rhythm);


// Question 5
const drum_envelope = adsr(0.05, 0.95, 0, 0);

// paste your snare_drum, mute and simplify_rhythm
// from Questions 1 and 4 here
function simplify_rhythm(rhythm) {
    // repeat iterates through rhythm by magnitude of count
    function repeat(rhythm, count) {
        return count === 0
            ? null
            : append(simplify_rhythm(rhythm), repeat(rhythm, count - 1));
    }
    // if list, must be a list of rhythm of a simple list, then call
    // simplify_rhythm to check each element of the list
    // if not list and is piar, need to repeat
    // else, must be an element in a simple rhythm
    return is_null(rhythm)
        ? null
        : is_list(rhythm)
        ? append(simplify_rhythm(head(rhythm)), simplify_rhythm(tail(rhythm)))
        : is_pair(rhythm)
        ? repeat(head(rhythm), tail(rhythm))
        : list(rhythm);
}

function snare_drum(note, duration) {
    /* your answer here */
    return drum_envelope(noise_sound(duration));
}

function bass_drum(note, duration) {
    /* your answer here */
    const prime_nums = list(79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
        131, 137, 139, 149);
    return drum_envelope(simultaneously(map(x => 
        sine_sound(x, duration), prime_nums)));
}

function mute(note, duration) {
    /* your answer here */
    return drum_envelope(silence_sound(duration));
}

function percussions(distance, list_of_sounds, rhythm) {
    // simplify rhythm list, then convert to list of sounds
    const simplified_rhythm = simplify_rhythm(rhythm);
    const list_of_rhythm_sound = map(x => list_ref(list_of_sounds, x), rhythm);
    // recursion: play simultaneous sounds of beat1 and delayed beat2
    function sequence(distance, list_of_rhythm_sound) {
        return is_null(list_of_rhythm_sound)
            ? silence_sound(0)
            : simultaneously(list(head(list_of_rhythm_sound), 
                consecutively(list(silence_sound(distance), 
                sequence(distance, tail(list_of_rhythm_sound))))));
    }
    return sequence(distance, list_of_rhythm_sound);
}

// Test
const my_mute_sound = mute(50, 0.7);
const my_snare_drum = snare_drum(50, 0.7);
const my_cello = cello(50, 0.7);
const my_bell = bell(72, 1);
play(percussions(0.5,
         list(my_mute_sound,
              my_snare_drum,
              my_cello,
              my_bell),
         list(1,2,1,0,3,1,0)));
