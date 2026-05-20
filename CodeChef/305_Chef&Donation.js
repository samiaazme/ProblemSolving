function solve(assets)
{
    let hae = assets.trim().split("\n")
    let T = Number(hae[0])
    for(let i = 1; i <= T; i++)
    {
        let [X, Y] = hae[i].split(" ").map(Number)
        let value = Y - X
        console.log(value)
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
