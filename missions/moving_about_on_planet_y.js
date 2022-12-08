// Question 1
// Your program here.
const sensor = ev3_ultrasonicSensor();
function display_distance(sensor) {
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10;
    display(distance);
    display_distance(sensor);
}

display_distance(sensor);


// Question 2
// Your program here.
const sensor = ev3_ultrasonicSensor();
function display_distance(sensor) {
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10;
    display(distance);
    if(distance <= 10) {
        move_cm(-30);
        return 'done';
    } else {
        move_cm(1);
        display_distance(sensor);
    }
}

display_distance(sensor);


// Question 3
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
    pause(925);
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

let count = 20;
const sensor = ev3_ultrasonicSensor();
function display_distance(sensor) {
    count = count - 1;
    const distance = ev3_ultrasonicSensorDistance(sensor) / 10;
    display(distance);
    if(count === 0) {
        return 'done';
    }
    if(distance <= 10) {
        if(turn === "") {
            first_turn();
        } else {
            turn_and_check();
        }
    } else {
        if(turn !== "") {
            turn_and_check();
            turn = "";
        } else {
            move_cm(3);
        }
    }
    display_distance(sensor);
}

function turn_and_check() {
    if(turn === "counter") {
        turn_90_counterclockwise();
        move_cm(15);
        turn_90_clockwise();
    } else {
        turn_90_clockwise();
        move_cm(15);
        turn_90_counterclockwise();
    }
}
let turn = "";
function first_turn() {
    const random = math_random();
    if(random < 0.5) {
        turn_90_counterclockwise();
        move_cm(15);
        turn_90_clockwise();
        turn = 'counter';
    } else {
        turn_90_clockwise();
        move_cm(15);
        turn_90_counterclockwise();
        turn = "clock";
    }
}
display_distance(sensor);
