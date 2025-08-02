const userInput = window.prompt('Enter a number to check if prime or not');

if (userInput !== null) {
    const number = parseInt(userInput, 10); //convert input string to an integer using base 10
    if (Number.isInteger(number)) {
        if (isPrime(number)) console.log(`${number} is a prime number`);
        else console.log(`${number} is not a prime number`);
    }
}

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}