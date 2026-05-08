// Lucky Seven

function solve(take)
{
    let str = take.split("");
    let luckyLetter = str[6];
    console.log(luckyLetter);
    
    
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