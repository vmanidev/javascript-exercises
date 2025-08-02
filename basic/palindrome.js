//check a string is a palindrom or not using two-pointer approach

const userInput = window.prompt('Enter a string'); // prompt to get a input string from user

if (userInput !== null) {
    if (isPalindrome(userInput)) console.log(`${userInput} is a palindrome`);
    else console.log(`${userInput} is not a palindrome`);
}

function isPalindrome(inputString) {
    const cleanedString = inputString.trim().toLowerCase();
    let left = 0;
    let right = cleanedString.length - 1;
    while (left < right) {
        if (cleanedString[left] !== cleanedString[right]) return false;
        left++;
        right--;
    }
    return true;
}