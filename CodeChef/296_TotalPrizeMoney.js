function solve(input)
{
    let PrizeMoney = input.trim().split("\n")
    let T = Number(PrizeMoney[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = PrizeMoney[i].split(" ").map(Number)
        let TotalValue = (X * 10) + (Y * 90);
            console.log(TotalValue);
        
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
ji