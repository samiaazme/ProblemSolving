function solve(marathon)
{
    let X = Number(marathon)
    if(X < 3)
    {
        console.log("GOLD")
    }
    else if(X >= 3 && X < 6)
    {
        console.log("SILVER")
    }
    else
    {
        console.log("BRONZE")
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



