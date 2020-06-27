// Selectors
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator')
let displayBot = document.querySelector('#display-bot');

// Declarations
let displayValue;

// Event Listeners
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i].textContent;
    numbers[i].addEventListener('click', () => displayNum(number));
}
//for (let i = 0; i < operators.length; i++) {
//    let operator = operators[i].getAttribute('id');
//    operators[i].addEventListener('click', () => operate(operator));
//}
//document.querySelector('#equals').addEventListener('click', () => operate());
document.querySelector('#clear').addEventListener('click', () => clearDisplay());


/*function operate(operator) {
    switch(operator) {
        case 'add':
            console.log(add(1,7));
            break;
        case 'subtract':
            console.log(subtract(20,7));
            break;
        case 'multiply':
            console.log(multiply(10,3));
            break;
        case 'divide':
            console.log(divide(30,3));
            break;
    }
}*/

function displayNum(number) {
    return displayValue = displayBot.textContent += number;
}

function clearDisplay() {
    displayBot.textContent = '';
    return displayValue = '';
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

/* Previous code

document.querySelector('#add').addEventListener('click', () => add());
document.querySelector('#subtract').addEventListener('click', () => subtract());
document.querySelector('#multiply').addEventListener('click', () => multiply());
document.querySelector('#divide').addEventListener('click', () => divide());

function add(...input) {
    return input.reduce((previous, current) => (previous + current), 0);
}

function subtract(...input) {
    return input.reduce((previous, current) => previous - current);
}

function multiply(...input) {
    return input.reduce((previous, current) => (previous * current));
}

function divide(...input) {
    return input.reduce((previous, current) => (previous / current));
} */