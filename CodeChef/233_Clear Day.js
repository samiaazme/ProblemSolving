function solve(input) {
 let [X , Y] = input.split(" ").map(Number);
 let clearDay = 7-X-Y;
 console.log(clearDay);

}

// Boilerplate for JS
process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';

process.stdin.on('data', function (chunk) {
    inputString += chunk;
});

process.stdin.on('end', function () {
    solve(inputString);
});