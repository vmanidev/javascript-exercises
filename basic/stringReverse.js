const userInput = window.prompt('Enter a string to reverse'); // prompt to get a input string from user

if (userInput !== null) {
    const reversedString = getReversedString(userInput);
    console.log(`Reversed string: ${reversedString}`);
}

function getReversedString(input) {
    const trimmedStr = input.trim(); // remove leading and trailing spaces
    let reversedStr = '';
    for (let i = trimmedStr.length - 1; i >= 0; i--) {
        reversedStr += trimmedStr[i];
    }
    return reversedStr;
}