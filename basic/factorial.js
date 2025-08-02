//factorial of a number using recursion

const userInput = window.prompt('Enter a number');

if (userInput !== null) {
    const number = parseInt(userInput, 10);
    if (Number.isInteger(number)) {
        console.log(`Factorial of ${number} is ${factorial(number)}`);
    }
}

function factorial(num) {
    if (num < 0) return 'not defined for negative numbers';
    if (num === 0 || num === 1) return 1;
    else return num * factorial(num - 1);
}