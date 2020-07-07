// Selectors
let numbers = document.querySelectorAll('.num');
let operators = document.querySelectorAll('.operator')
let displayBot = document.querySelector('#display-bot');
let displayTop = document.querySelector('#display-top');

// Declarations
let displayValueTop = '';
let displayValueBot = '';
let numberArray = [];
let operatorArray = [];
let numberIndex = 0;
let lastChar;

// Event Listeners
for (let i = 0; i < numbers.length; i++) {
    let number = numbers[i].textContent;
    numbers[i].addEventListener('click', () => {
        click(number);
        updateDisplay(number);
    });
}
for (let i = 0; i < operators.length; i++) {
    let operator = operators[i].textContent;
    operators[i].addEventListener('click', () => {
        click(operator);
        updateDisplay(operator);
    });
}
document.querySelector('#equals').addEventListener('click', () => clickEquals());
document.querySelector('#clear').addEventListener('click', () => clearDisplay());
document.querySelector('#backspace').addEventListener('click', () => backspace());

// Functions
function click(input) {
    if(isOperator(input)) {
        if(isOperator(lastChar)) operatorArray.pop();
        operatorArray.push(input);
        if(numberIndex <= numberArray.length && !isOperator(lastChar)) numberIndex ++;
    } else {
        if (numberArray[numberIndex] === undefined) numberArray[numberIndex] = '';
        numberArray[numberIndex] += input;
    }
}

function updateDisplay(input) {    
    if(input == 'backspace') {
        displayValueBot = displayBot.textContent.slice(0, -1);
        displayBot.textContent = displayValueBot;
    } else if(isOperator(lastChar) && isOperator(input)) {
        displayValueBot = displayBot.textContent.slice(0, -1);
        displayValueBot += input;
    } else {
    displayValueBot += input;
    }
    displayBot.textContent = displayValueBot;
    lastChar = displayValueBot.slice(-1);
}

function clickEquals() {
    if(isOperator(lastChar)) error();
    console.log(displayValueBot);
    console.log(operatorArray);
    console.log(numberArray);
}

function backspace() {
    //updates array
    if(isOperator(lastChar)) {
        operatorArray.pop();
        numberIndex --;
    } else if(numberArray[numberIndex].length == 1) {
        numberArray.pop();
    } else {
        numberArray[numberIndex] = numberArray[numberIndex].slice(0,-1);
    }
    //updates display
    updateDisplay('backspace')
}

function clearDisplay() {
    displayValueTop = '';
    displayValueBot = '';
    numberArray = [];
    operatorArray = [];
    numberIndex = 0;
    displayTop.textContent = displayValueTop;
    displayBot.textContent = displayValueBot;
}

function error() {
    alert('Error!');
}

function isOperator(input) {
    return ((input == '+' || input == '-' || input == 'x' || input == '÷') ? true : false);
}





/*
function clickOperator(operator) {
    console.log(`operator: ${operator}`);
    if(operatorCount >= 1) {
        equals(operator);
    }
    if (!secondValue) {
        firstValue = displayBot.slice(tempIndexFirst, displayBot.length);
    } else {
        firstValue = secondValue;
    }
    //track the starting index of the second value using equals to determine the end
    switch(operator) {
        case 'add':
            display('+');
            break;
        case 'subtract':
            display('-');
            break;
        case 'multiply':
            display('x');
            break;
        case 'divide':
            display('÷');
            break;
    }
    tempIndexSecond = displayBot.length;
    operatorCount++;
    console.log(`first value: ${firstValue}`)
}

function equals(operator) {
    secondValue = displayBot.slice(tempIndexSecond, displayBot.length);
    console.log(`second value: ${secondValue}`);
    console.log(`equal was pressed with ${operator} operator`);
    switch(operator) {
        case 'add':
            add(firstValue, secondValue);
            break;
        case 'subtract':
            subtract(firstValue, secondValue);
            break;
        case 'multiply':
            multiply(firstValue, secondValue);
            break;
        case 'divide':
            divide(firstValue, secondValue);
            break;
    }
}

function operate(operator) {
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
}

function display(input) {
    return displayBot = displayBot.textContent += input;
}

function clearDisplay() {
    //clear declarations so new calculation can begin
    displayBot.textContent = '';
    return displayBot = '';
}

function add(x, y) {
    return console.log(Number(x) + Number(y));
}

function subtract(x, y) {
    return console.log(Number(x) - Number(y));
}

function multiply(x, y) {
    return console.log(Number(x) * Number(y));
}

function divide(x, y) {
    return console.log(Number(x) / Number(y));
}

 Previous code

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