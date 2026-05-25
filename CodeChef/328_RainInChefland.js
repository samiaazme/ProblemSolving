function solve(chefland)
{
    let rain = chefland.trim().split("\n")
    let T = Number(rain[0])
    for(let i = 1; i <= T; i++)
    {
        let X = Number(rain[i])
        if ( X < 3 ){
            console.log("LIGHT")
        }
        else if ( X >= 3 && X < 7)
        {
            console.log("MODERATE")
        }
        else
        {
            console.log("HEAVY")
        }
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

