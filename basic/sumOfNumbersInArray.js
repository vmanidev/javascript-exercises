//sum of all the numbers in an array using JavaScript Array.reduce() method

const exampleArr = [10, 8, 3, 24, 1, 5, 33, 41, 9, 12, 0, 111];

const sumOfNumbersInArr = exampleArr.reduce((acc, current) => acc + current, 0);

console.log(sumOfNumbersInArr);