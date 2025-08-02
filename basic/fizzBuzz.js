//print numbers from 1 to 100, replacing multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz"

for (let i = 1; i <= 100; i++) {
    const multiplesOfThree = i % 3 === 0;
    const multiplesOfFive = i % 5 === 0;
    if (multiplesOfThree && multiplesOfFive) {
        console.log("FizzBuzz");
    } else if (multiplesOfThree) {
        console.log("Fizz");
    } else if (multiplesOfFive) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}