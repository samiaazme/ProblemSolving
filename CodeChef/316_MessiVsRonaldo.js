function solve(score)
{
    let hoise = score.split(" ")
    let [A, B, X, Y] = hoise.map(Number)
    if((A*2)+B == (X*2)+Y)
    {
        console.log("Equal")
    }
    else if((A*2)+B > (X*2)+Y)
    {
        console.log("Messi")
    }
    else
    {
        console.log("Ronaldo")
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

