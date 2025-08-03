const userInput = window.prompt('Enter a string to count vowels');

if (userInput !== null) {
    const vowelsCount = getVowelsCount(userInput);
    console.log(vowelsCount);
}

function getVowelsCount(string = '') {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    let count = 0;
    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i].toLowerCase())) count += 1;
    }
    return count;
}