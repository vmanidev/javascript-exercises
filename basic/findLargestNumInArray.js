const arr = [123, -45, 301, 0, -212, 67, 412, -99, 250, -7, 33, 480];

let max = arr[0]; //set initial value

for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) max = arr[i];
}

console.log(max);