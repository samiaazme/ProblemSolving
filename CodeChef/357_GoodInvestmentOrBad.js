function solve(input)
{
    let coin = input.trim().split("\n")
    let T = Number(coin[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = coin[i].split(" ").map(Number)
        if( X >= 2*Y)
        {
            console.log("YES")
        }
        else{
            console.log("NO")
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




