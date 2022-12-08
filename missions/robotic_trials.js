// Question 1
// Your program here.
const motorA = ev3_motorA();
const motorB = ev3_motorB();

display(ev3_connected(motorA) ? "A connected" : "A not connected");
display(ev3_connected(motorB) ? "B connected" : "B not connected");

ev3_speak("YUFAN VERY HANDSOME");


// Question 2
// Your program here.
const motorA = ev3_motorA();
const motorB = ev3_motorB();

display(ev3_connected(motorA) ? "A connected" : "A not connected");
display(ev3_connected(motorB) ? "B connected" : "B not connected");

function pause(time) {
    ev3_pause(time);
}

function move_cm(distance) {
    ev3_runForTime(motorA, 875, 20 * distance);
    ev3_runForTime(motorB, 875, 20 * distance);
    pause(1000);
}

// move 10cm
move_cm(10);


// Question 3
// Your program here.
const motorA = ev3_motorA();
const motorB = ev3_motorB();

display(ev3_connected(motorA) ? "A connected" : "A not connected");
display(ev3_connected(motorB) ? "B connected" : "B not connected");

function pause(time) {
    ev3_pause(time);
}

function turn_90_counterclockwise() {
    ev3_runForTime(motorA, 1000, -189);
    ev3_runForTime(motorB, 1000, 189);
    pause(1200);
}

//turn 90 degree counter clockwise
turn_90_counterclockwise();


// Question 4
// Your program here.
const motorA = ev3_motorA();
const motorB = ev3_motorB();

display(ev3_connected(motorA) ? "A connected" : "A not connected");
display(ev3_connected(motorB) ? "B connected" : "B not connected");

function pause(time) {
    ev3_pause(time);
}

function move_cm(distance) {
    ev3_runForTime(motorA, 875, 20 * distance);
    ev3_runForTime(motorB, 875, 20 * distance);
    pause(1000);
}

function turn_90_clockwise() {
    ev3_runForTime(motorA, 1000, 189);
    ev3_runForTime(motorB, 1000, -189);
    pause(1200);
}

function turn_90_counterclockwise() {
    ev3_runForTime(motorA, 1000, -189);
    ev3_runForTime(motorB, 1000, 189);
    pause(1200);
}

// move 10cm
move_cm(10);
//turn 90 degree counter clockwise
turn_90_counterclockwise();
//move 5cm
move_cm(5);
//turn 90 clockwise
turn_90_clockwise();
//move 15cm
move_cm(15);
