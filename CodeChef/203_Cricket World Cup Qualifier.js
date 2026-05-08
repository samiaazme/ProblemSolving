// Cricket World Cup Qualifier

function solve(take)
{
    let x = Number(take);
   if (x >= 12){
        console.log("Yes");
    }
    else {
        console.log("No");
    }
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