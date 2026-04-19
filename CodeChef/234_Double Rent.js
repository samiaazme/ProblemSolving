function solve(input)
{
   let [X] = input.split().map(Number); 
   let newRent = 2 * X;
   console.log(newRent);
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