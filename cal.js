// script.js

let display = document.getElementById('display');

function appendCharacter(character) {
    display.value += character;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
function sin() {
    display.value = Math.sin(eval(display.value));
}

function cos() {
    display.value = Math.cos(eval(display.value));
}

function tan() {
    display.value = Math.tan(eval(display.value));
}


function clearDisplay() {
    display.value = '';
}
function backspace() {
    let currentInput = display.value;
    display.value = currentInput.substring(0, currentInput.length - 1);
}
// Additional scientific functions
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
