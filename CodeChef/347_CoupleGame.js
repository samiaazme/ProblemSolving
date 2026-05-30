function solve(pair)
{
    let game = pair.trim().split("\n")
    let T = Number(game[0])
    for(let i = 1; i <= T; i++)
    {
        let [G, B] = game[i].split(" ").map(Number)

        let ans = B - G
            console.log(ans)
        

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